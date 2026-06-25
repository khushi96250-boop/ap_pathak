
  /* ── NAVBAR SCROLL ── */
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
      backToTop.classList.add('visible');
    } else {
      navbar.classList.remove('scrolled');
      backToTop.classList.remove('visible');
    }
  });

  /* ── HAMBURGER ── */
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.add('open');
  });
  document.getElementById('mobileClose').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.remove('open');
  });
  function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('open');
  }

  /* ── SCROLL REVEAL ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));

  /* ── ANIMATED COUNTERS ── */
  function animateCounter(el) {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const inner = el.innerHTML;
    const spanMatch = inner.match(/<span[^>]*>(.*?)<\/span>/);
    const spanContent = spanMatch ? spanMatch[0] : '';
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      let val = Math.floor(eased * target);
      if (target >= 1000000) {
        el.textContent = (val / 1000000).toFixed(1) + 'M+';
      } else if (suffix) {
        el.textContent = val + suffix;
      } else {
        el.textContent = val.toLocaleString();
        if (spanContent) el.innerHTML = val.toLocaleString() + spanContent;
      }
      if (progress < 1) requestAnimationFrame(step);
      else {
        if (target >= 1000000) { el.textContent = '3M+'; }
        else if (suffix) { el.textContent = target + suffix; }
        else if (spanContent) { el.innerHTML = target.toLocaleString() + spanContent; }
        else { el.textContent = target.toLocaleString(); }
      }
    };
    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        counterObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('.counter-num[data-target]').forEach(el => counterObserver.observe(el));

  /* ── NEWS FILTERS ── */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.news-controls, .gallery-controls')?.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  /* ── LIGHTBOX ── */
  const lightbox = document.getElementById('lightbox');
  function openLightbox(title, sub, icon) {
    document.getElementById('lightboxTitle').textContent = title;
    document.getElementById('lightboxSub').textContent = sub;
    document.getElementById('lightboxIcon').innerHTML = '<i class="fas ' + (icon || 'fa-image') + '"></i>';
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  document.getElementById('lightboxClose').addEventListener('click', () => {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  });
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
  document.querySelectorAll('.video-card').forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('.video-info-title')?.textContent || 'Video';
      openLightbox(title, 'Video player — replace with your embedded content', 'fa-play-circle');
    });
  });

  /* ── FORM SUBMIT ── */
  function handleFormSubmit(btn, type) {
    const labels = { volunteer: 'Volunteer Request Submitted!', contact: 'Message Sent!', member: 'Membership Application Received!' };
    const subs = { volunteer: "We'll contact you within 48 hours to onboard you.", contact: "Our team will respond within 2 business days.", member: "Your membership kit and ID card will be dispatched soon." };
    openLightbox(labels[type] || 'Submitted!', subs[type] || 'Thank you for connecting with us.', 'fa-check-circle');
  }

  /* ── SMOOTH ACTIVE NAV ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === '#' + current
        ? 'var(--saffron-light)' : '';
    });
  }, { passive: true });


