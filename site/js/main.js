/* ============================================
   Hamilton Pool Service — Main JavaScript
   GSAP + ScrollTrigger Animations
   Rebuilt with bulletproof element guards
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initAnimations();
  initFAQ();
  initForm();
});

/* --- Header Scroll Effect --- */
function initHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('header--scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --- Mobile Menu --- */
function initMobileMenu() {
  const toggle = document.querySelector('.header__menu-toggle');
  const nav = document.querySelector('.header__nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('header__nav--open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  nav.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('header__nav--open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --- GSAP ScrollTrigger Animations --- */
function initAnimations() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  /* Helper: set initial hidden state, then animate TO visible.
     Uses gsap.set() + gsap.to() to avoid the gsap.from() immediateRender
     bug where elements stay invisible if ScrollTrigger never fires. */
  function animateIn(selector, triggerSelector, vars) {
    const els = document.querySelectorAll(selector);
    const trigger = document.querySelector(triggerSelector || selector);
    if (!els.length || !trigger) return;

    const { stagger, duration, ease, start, ...fromVars } = vars;
    gsap.set(els, fromVars);
    gsap.to(els, {
      scrollTrigger: {
        trigger: trigger,
        start: start || 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 1, y: 0, x: 0, scale: 1,
      stagger: stagger || 0,
      duration: duration || 0.6,
      ease: ease || 'power2.out'
    });
  }

  /* Hero scroll-driven frame animation */
  const heroScroll = document.querySelector('.hero-scroll');
  if (heroScroll) {
    const track = heroScroll.querySelector('.hero-scroll__track');
    const heroContent = heroScroll.querySelector('.hero-scroll__content');
    const heroOverlay = heroScroll.querySelector('.hero-scroll__overlay');
    const heroBadge = heroScroll.querySelector('.hero__badge');
    const heroTitle = heroScroll.querySelector('.hero-scroll__title');
    const heroSubtitle = heroScroll.querySelector('.hero-scroll__subtitle');
    const heroBtns = heroScroll.querySelectorAll('.hero-scroll__buttons .btn');

    /* Entrance animations */
    if (heroBadge) gsap.set(heroBadge, { opacity: 0, y: 20 });
    if (heroTitle) gsap.set(heroTitle, { opacity: 0, y: 40 });
    if (heroSubtitle) gsap.set(heroSubtitle, { opacity: 0, y: 20 });
    if (heroBtns.length) gsap.set(heroBtns, { opacity: 0, y: 20 });

    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    if (heroBadge) heroTl.to(heroBadge, { opacity: 1, y: 0, duration: 0.6, delay: 0.3 });
    if (heroTitle) heroTl.to(heroTitle, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.2');
    if (heroSubtitle) heroTl.to(heroSubtitle, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5');
    if (heroBtns.length) heroTl.to(heroBtns, { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 }, '-=0.3');

    /* Canvas frame rendering */
    const canvas = document.getElementById('heroFrameCanvas');
    if (canvas && track) {
      const ctx = canvas.getContext('2d');
      const frameCount = 121;
      const frames = [];
      let loadedFrames = 0;
      let currentFrame = -1;
      let ticking = false;

      function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
        if (currentFrame >= 0) drawFrame(currentFrame);
      }

      function drawFrame(index) {
        const img = frames[index];
        if (!img || !img.complete) return;
        const cw = canvas.width;
        const ch = canvas.height;
        ctx.clearRect(0, 0, cw, ch);

        const imgRatio = img.naturalWidth / img.naturalHeight;
        const canvasRatio = cw / ch;
        let drawW, drawH, drawX, drawY;

        if (window.innerWidth > 768) {
          if (canvasRatio > imgRatio) { drawW = cw; drawH = cw / imgRatio; }
          else { drawH = ch; drawW = ch * imgRatio; }
        } else {
          const zoom = 1.2;
          if (canvasRatio > imgRatio) { drawH = ch * zoom; drawW = drawH * imgRatio; }
          else { drawW = cw * zoom; drawH = drawW / imgRatio; }
        }
        drawX = (cw - drawW) / 2;
        drawY = (ch - drawH) / 2;
        ctx.drawImage(img, drawX, drawY, drawW, drawH);
      }

      const finalCta = heroScroll.querySelector('.hero-scroll__final-cta');

      function onScroll() {
        if (!ticking) {
          requestAnimationFrame(() => {
            const rect = track.getBoundingClientRect();
            const scrollableHeight = track.offsetHeight - window.innerHeight;
            const progress = Math.min(1, Math.max(0, -rect.top / scrollableHeight));
            const frameIndex = Math.min(frameCount - 1, Math.floor(progress * frameCount));

            if (frameIndex !== currentFrame) {
              currentFrame = frameIndex;
              drawFrame(frameIndex);
            }

            /* Show final CTA when scroll reaches last ~15% of animation */
            if (finalCta) {
              finalCta.classList.toggle('is-visible', progress > 0.85);
            }

            ticking = false;
          });
          ticking = true;
        }
      }

      /* Preload all frames */
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = 'assets/frames/frame_' + String(i).padStart(4, '0') + '.jpg';
        img.onload = () => {
          loadedFrames++;
          if (loadedFrames === frameCount) {
            resizeCanvas();
            drawFrame(0);
            window.addEventListener('scroll', onScroll, { passive: true });
            window.addEventListener('resize', resizeCanvas);
          }
        };
        frames.push(img);
      }
    }

    /* Content fades out on scroll */
    if (heroContent) {
      gsap.to(heroContent, {
        scrollTrigger: { trigger: track, start: 'top top', end: '30% top', scrub: true },
        opacity: 0,
        ease: 'none'
      });
    }

    /* Overlay darkens on scroll */
    if (heroOverlay) {
      gsap.to(heroOverlay, {
        scrollTrigger: { trigger: track, start: '60% top', end: 'bottom top', scrub: true },
        opacity: 0.9,
        ease: 'none'
      });
    }
  }

  /* Legacy hero support for non-homepage (service pages etc.) */
  const heroSection = document.querySelector('.hero');
  if (heroSection) {
    const heroEls = {
      badge: heroSection.querySelector('.hero__badge'),
      title: heroSection.querySelector('.hero__title'),
      subtitle: heroSection.querySelector('.hero__subtitle'),
      btns: heroSection.querySelectorAll('.hero__actions .btn')
    };

    if (heroEls.badge) gsap.set(heroEls.badge, { opacity: 0, y: 20 });
    if (heroEls.title) gsap.set(heroEls.title, { opacity: 0, y: 40 });
    if (heroEls.subtitle) gsap.set(heroEls.subtitle, { opacity: 0, y: 20 });
    if (heroEls.btns.length) gsap.set(heroEls.btns, { opacity: 0, y: 20 });

    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    if (heroEls.badge) heroTl.to(heroEls.badge, { opacity: 1, y: 0, duration: 0.6, delay: 0.3 });
    if (heroEls.title) heroTl.to(heroEls.title, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.2');
    if (heroEls.subtitle) heroTl.to(heroEls.subtitle, { opacity: 1, y: 0, duration: 0.7 }, '-=0.5');
    if (heroEls.btns.length) heroTl.to(heroEls.btns, { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 }, '-=0.3');
  }

  /* CTA section buttons (outside hero) — scroll-triggered */
  document.querySelectorAll('.section--dark .hero__actions, #cta .hero__actions').forEach(container => {
    if (heroSection && heroSection.contains(container)) return;
    const btns = container.querySelectorAll('.btn');
    if (!btns.length) return;
    gsap.set(btns, { opacity: 0, y: 20 });
    gsap.to(btns, {
      scrollTrigger: { trigger: container, start: 'top 90%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, stagger: 0.12, duration: 0.5, ease: 'power2.out'
    });
  });

  /* Trust bar */
  animateIn('.trust-bar__item', '.trust-bar', {
    opacity: 0, y: 15, stagger: 0.08, duration: 0.5
  });

  /* Fade-up elements */
  document.querySelectorAll('.fade-up').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
      opacity: 1, y: 0, duration: 0.7, ease: 'power2.out'
    });
  });

  /* Service cards — uses gsap.to() instead of gsap.from() to avoid
     the immediateRender issue where cards go invisible on short pages */
  const serviceCards = document.querySelectorAll('.service-card');
  if (serviceCards.length) {
    serviceCards.forEach(card => {
      gsap.set(card, { opacity: 0, y: 40 });
    });
    gsap.to(serviceCards, {
      scrollTrigger: {
        trigger: '.services__grid',
        start: 'top 92%',
        toggleActions: 'play none none none'
      },
      opacity: 1, y: 0,
      stagger: 0.12, duration: 0.6, ease: 'power2.out'
    });
  }

  /* Why cards */
  animateIn('.why-card', '.why__grid', {
    opacity: 0, y: 35, stagger: 0.15, duration: 0.6, start: 'top 90%'
  });

  /* Process steps (service detail pages) */
  animateIn('.process-step', '.process__grid', {
    opacity: 0, y: 30, stagger: 0.12, duration: 0.5
  });

  /* Checklist items */
  animateIn('.checklist__item', '.checklist', {
    opacity: 0, y: 20, stagger: 0.06, duration: 0.4
  });

  /* Slide left / right */
  document.querySelectorAll('.slide-left').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      opacity: 1, x: 0, duration: 0.8, ease: 'power2.out'
    });
  });

  document.querySelectorAll('.slide-right').forEach(el => {
    gsap.to(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      opacity: 1, x: 0, duration: 0.8, ease: 'power2.out'
    });
  });

  /* Testimonial cards */
  animateIn('.testimonial-card', '.testimonials__slider', {
    opacity: 0, y: 25, stagger: 0.12, duration: 0.6
  });

  /* FAQ items */
  animateIn('.faq-item', '.faq__list', {
    opacity: 0, y: 15, stagger: 0.08, duration: 0.4
  });

  /* Parallax hero background */
  if (document.querySelector('.hero__bg')) {
    gsap.to('.hero__bg', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: 120, ease: 'none'
    });
  }

  /* Recalculate after all setup */
  ScrollTrigger.refresh();
}

/* --- FAQ Accordion --- */
function initFAQ() {
  const questions = document.querySelectorAll('.faq-item__question');
  if (!questions.length) return;

  questions.forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('faq-item--open');

      /* Close all items */
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('faq-item--open');
        i.querySelector('.faq-item__question').setAttribute('aria-expanded', 'false');
      });

      /* Toggle clicked */
      if (!isOpen) {
        item.classList.add('faq-item--open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --- Form Handling --- */
function initForm() {
  const form = document.querySelector('#quote-form');
  if (!form) return;

  function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    const group = field.closest('.form-group');
    const errorEl = document.getElementById(fieldId + '-error');
    if (group) group.classList.add('form-group--error');
    if (errorEl) {
      errorEl.textContent = message;
      errorEl.classList.add('form-error--visible');
    }
  }

  function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    const group = field.closest('.form-group');
    const errorEl = document.getElementById(fieldId + '-error');
    if (group) group.classList.remove('form-group--error');
    if (errorEl) {
      errorEl.textContent = '';
      errorEl.classList.remove('form-error--visible');
    }
  }

  function clearAllErrors() {
    ['name', 'phone', 'email'].forEach(clearError);
  }

  /* Clear errors on input */
  ['name', 'phone', 'email'].forEach(id => {
    const field = document.getElementById(id);
    if (field) {
      field.addEventListener('input', () => clearError(id));
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearAllErrors();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    let hasError = false;
    let firstErrorField = null;

    if (!data.name || data.name.trim() === '') {
      showError('name', 'Please enter your full name.');
      hasError = true;
      firstErrorField = firstErrorField || 'name';
    }

    if (!data.phone || data.phone.trim() === '') {
      showError('phone', 'Please enter your phone number.');
      hasError = true;
      firstErrorField = firstErrorField || 'phone';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || data.email.trim() === '') {
      showError('email', 'Please enter your email address.');
      hasError = true;
      firstErrorField = firstErrorField || 'email';
    } else if (!emailPattern.test(data.email)) {
      showError('email', 'Please enter a valid email address.');
      hasError = true;
      firstErrorField = firstErrorField || 'email';
    }

    if (hasError) {
      const el = document.getElementById(firstErrorField);
      if (el) el.focus();
      return;
    }

    /* Success state */
    const submitBtn = form.querySelector('button[type="submit"]');
    if (!submitBtn) return;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sent! We\'ll be in touch.';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    setTimeout(() => {
      form.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
    }, 3000);
  });
}
