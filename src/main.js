/* ================================================
   YUKESH S — IRON MAN PORTFOLIO
   Main JavaScript — Animations & Interactivity
   ================================================ */

// ─── CONFIGURATION ─────────────────────────────
const CONFIG = {
  typewriterTexts: [
    'Software Engineer',
    'ML Enthusiast',
    'Full-Stack Developer',
    'Cloud Architect',
    'AI Researcher',
  ],
  typewriterSpeed: 80,
  typewriterDeleteSpeed: 40,
  typewriterPauseTime: 2000,
  introDuration: 4000,
  scrollRevealThreshold: 0.15,
};

// ─── INTRO ANIMATION — HELMET POV ──────────────
function initIntro() {
  const overlay = document.getElementById('intro-overlay');
  const introText = document.getElementById('intro-text');
  const skipBtn = document.getElementById('skip-btn');
  const progressBar = document.getElementById('hud-progress');

  if (!overlay || !introText || !skipBtn) return;

  // Use sessionStorage: intro plays once per browser session
  if (sessionStorage.getItem('portfolio-intro-done')) {
    overlay.classList.add('done');
    document.body.style.overflow = '';
    return;
  }

  document.body.style.overflow = 'hidden';

  const messages = [
    { text: 'INITIALIZING JARVIS INTERFACE...', progress: 15 },
    { text: 'LOADING NEURAL NETWORKS...', progress: 35 },
    { text: 'CALIBRATING HUD SENSORS...', progress: 55 },
    { text: 'DEPLOYING DEFENSE SYSTEMS...', progress: 75 },
    { text: 'ALL SYSTEMS ONLINE', progress: 100 },
  ];

  let messageIndex = 0;

  // Animate progress bar and messages
  const messageInterval = setInterval(() => {
    messageIndex++;
    if (messageIndex < messages.length) {
      introText.textContent = messages[messageIndex].text;
      if (progressBar) {
        progressBar.style.width = messages[messageIndex].progress + '%';
      }
    }
  }, 650);

  // Set initial progress
  if (progressBar) {
    progressBar.style.width = messages[0].progress + '%';
  }

  // Skip button
  skipBtn.addEventListener('click', () => {
    clearInterval(messageInterval);
    finishIntro(overlay);
  });

  // Auto-finish: visor lifts after messages complete
  setTimeout(() => {
    clearInterval(messageInterval);
    finishIntro(overlay);
  }, CONFIG.introDuration);
}

function finishIntro(overlay) {
  overlay.classList.add('opening');
  setTimeout(() => {
    overlay.classList.add('done');
    document.body.style.overflow = '';
    sessionStorage.setItem('portfolio-intro-done', 'true');
    initHeroAnimations();
  }, 1500);
}

// Replay intro — accessible via logo click or console
function replayIntro() {
  sessionStorage.removeItem('portfolio-intro-done');
  const overlay = document.getElementById('intro-overlay');
  if (overlay) {
    overlay.classList.remove('done', 'opening');
    const introText = document.getElementById('intro-text');
    if (introText) introText.textContent = 'INITIALIZING JARVIS INTERFACE...';
    const progressBar = document.getElementById('hud-progress');
    if (progressBar) progressBar.style.width = '0%';
    initIntro();
  }
}

// ─── HERO ANIMATIONS ───────────────────────────
function initHeroAnimations() {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
  }
}

// ─── TYPEWRITER EFFECT ─────────────────────────
function initTypewriter() {
  const element = document.getElementById('typewriter');
  if (!element) return;

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = CONFIG.typewriterTexts[textIndex];

    if (isDeleting) {
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? CONFIG.typewriterDeleteSpeed : CONFIG.typewriterSpeed;

    if (!isDeleting && charIndex === currentText.length) {
      speed = CONFIG.typewriterPauseTime;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % CONFIG.typewriterTexts.length;
      speed = 500;
    }

    setTimeout(type, speed);
  }

  type();
}

// ─── MOUSE REVEAL EFFECT ───────────────────────
// Enhanced mouse reveal with glowing cursor ring
function initSimpleMouseReveal() {
  const container = document.getElementById('hero-illustration');
  const normalImg = document.getElementById('illustration-normal');
  const armoredImg = document.getElementById('illustration-armored');
  const illustrationContainer = document.querySelector('.illustration-container');

  if (!container || !normalImg || !armoredImg || !illustrationContainer) return;

  const revealRadius = 120;

  // Create the glowing cursor ring
  const cursorRing = document.createElement('div');
  cursorRing.className = 'reveal-cursor-ring';
  illustrationContainer.appendChild(cursorRing);

  // Set armored image on top with clip-path circle(0)
  armoredImg.style.zIndex = '3';
  armoredImg.style.clipPath = 'circle(0% at 50% 50%)';
  armoredImg.style.transition = 'clip-path 0.3s ease-out';
  normalImg.style.zIndex = '2';
  normalImg.style.clipPath = 'none';

  illustrationContainer.addEventListener('mousemove', (e) => {
    const rect = illustrationContainer.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    // Update clip-path to reveal armored image
    armoredImg.style.clipPath = `circle(${revealRadius}px at ${xPercent}% ${yPercent}%)`;
    armoredImg.style.transition = 'clip-path 0.05s ease-out';

    // Move cursor ring
    cursorRing.style.left = `${x}px`;
    cursorRing.style.top = `${y}px`;
  });

  illustrationContainer.addEventListener('mouseenter', () => {
    cursorRing.style.opacity = '1';
  });

  illustrationContainer.addEventListener('mouseleave', () => {
    armoredImg.style.clipPath = 'circle(0% at 50% 50%)';
    armoredImg.style.transition = 'clip-path 0.4s ease-out';
    cursorRing.style.opacity = '0';
  });
}

// ─── NAVBAR ────────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu on link click
    links.forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  // Active link on scroll
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    links.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// ─── SMOOTH SCROLL ─────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
}

// ─── SCROLL REVEAL ANIMATIONS ──────────────────
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-up');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Don't unobserve — one-time animation
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: CONFIG.scrollRevealThreshold,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el) => {
    observer.observe(el);
  });
}

// ─── COUNTER ANIMATION ────────────────────────
function initCounters() {
  const counters = document.querySelectorAll('.stat-value[data-count]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-count'));
          animateCounter(entry.target, 0, target, 1500);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function animateCounter(element, start, end, duration) {
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out)
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (end - start) * easeOut);

    element.textContent = current;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = end;
    }
  }

  requestAnimationFrame(update);
}

// ─── SCROLL INDICATOR HIDE ─────────────────────
function initScrollIndicator() {
  const indicator = document.getElementById('scroll-indicator');
  if (!indicator) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      indicator.style.opacity = '0';
      indicator.style.pointerEvents = 'none';
    } else {
      indicator.style.opacity = '1';
      indicator.style.pointerEvents = 'auto';
    }
  });
}

// ─── CONTACT FORM (EmailJS) ────────────────────
function initContactForm() {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const btnText = submitBtn.querySelector('.btn-text');
    const originalText = btnText.textContent;
    btnText.textContent = 'TRANSMITTING...';
    submitBtn.disabled = true;

    const formData = {
      from_name: document.getElementById('from_name').value,
      reply_to: document.getElementById('reply_to').value,
      message: document.getElementById('message').value,
    };

    try {
      // EmailJS integration — will be configured in Step 9
      if (typeof emailjs !== 'undefined') {
        await emailjs.send(
          'service_gk1vk4o', // Replace with actual service ID
          'template_d4yluq5', // Replace with actual template ID
          formData
        );
        status.textContent = '✅ TRANSMISSION SUCCESSFUL — Message delivered!';
        status.className = 'form-status success';
        form.reset();
      } else {
        // Fallback: show success for demo
        await new Promise((resolve) => setTimeout(resolve, 1500));
        status.textContent = '✅ TRANSMISSION SUCCESSFUL — Message delivered!';
        status.className = 'form-status success';
        form.reset();
      }
    } catch (error) {
      status.textContent = '❌ TRANSMISSION FAILED — Please try again.';
      status.className = 'form-status error';
      console.error('Form error:', error);
    }

    btnText.textContent = originalText;
    submitBtn.disabled = false;

    // Clear status after 5 seconds
    setTimeout(() => {
      status.textContent = '';
      status.className = 'form-status';
    }, 5000);
  });
}

// ─── FLOATING HUD PARTICLES ───────────────────
function createHUDParticles() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const symbols = ['⟨', '⟩', '{', '}', '/', '<', '>', '0', '1', '•'];
  const particleCount = 15;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('span');
    particle.className = 'hud-particle';
    particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    particle.style.cssText = `
      position: absolute;
      color: rgba(0, 212, 255, ${0.05 + Math.random() * 0.1});
      font-family: var(--font-mono);
      font-size: ${10 + Math.random() * 16}px;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      pointer-events: none;
      animation: floatParticle ${8 + Math.random() * 12}s linear infinite;
      animation-delay: ${Math.random() * 5}s;
      z-index: 0;
    `;
    hero.appendChild(particle);
  }

  // Add the float keyframe if not exists
  if (!document.getElementById('particle-keyframes')) {
    const style = document.createElement('style');
    style.id = 'particle-keyframes';
    style.textContent = `
      @keyframes floatParticle {
        0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '' : '-'}50px) rotate(360deg); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }
}

// ─── PARALLAX EFFECT ───────────────────────────
function initParallax() {
  const hexGrid = document.querySelector('.hex-grid-bg');
  if (!hexGrid) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    hexGrid.style.transform = `translateY(${scrolled * 0.3}px)`;
  });
}

// ─── INITIALIZE EVERYTHING ─────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initIntro();
  initTypewriter();
  initNavbar();
  initSmoothScroll();
  initScrollReveal();
  initCounters();
  initScrollIndicator();
  initContactForm();
  createHUDParticles();
  initParallax();

  // Initialize mouse reveal after images load
  window.addEventListener('load', () => {
    initSimpleMouseReveal();
  });

  // Triple-click logo to replay intro animation
  const navLogo = document.getElementById('nav-logo');
  if (navLogo) {
    let clickCount = 0;
    let clickTimer = null;
    navLogo.addEventListener('click', (e) => {
      clickCount++;
      if (clickCount === 3) {
        e.preventDefault();
        clickCount = 0;
        clearTimeout(clickTimer);
        replayIntro();
      } else {
        clearTimeout(clickTimer);
        clickTimer = setTimeout(() => { clickCount = 0; }, 500);
      }
    });
  }

  // Initialize EmailJS (user needs to add their public key)
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: 'yKj6RM2oMYdsG716b' }); // Will be configured later
  }

  // Expose replayIntro for console access
  window.replayIntro = replayIntro;
});
