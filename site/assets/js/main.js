// Bighorn Government Services — shared site behavior
document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var open = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Services flyout — click to open/close (no hover-open), any viewport
  var flyoutItems = document.querySelectorAll('.has-flyout');
  flyoutItems.forEach(function (item) {
    var trigger = item.querySelector(':scope > a');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.addEventListener('click', function (e) {
      e.preventDefault();
      var isOpen = item.classList.contains('open');
      flyoutItems.forEach(function (other) {
        other.classList.remove('open');
        other.querySelector(':scope > a').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
  document.addEventListener('click', function (e) {
    flyoutItems.forEach(function (item) {
      if (!item.contains(e.target)) {
        item.classList.remove('open');
        item.querySelector(':scope > a').setAttribute('aria-expanded', 'false');
      }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      flyoutItems.forEach(function (item) {
        item.classList.remove('open');
        item.querySelector(':scope > a').setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Tab component (VR Powered Training page)
  document.querySelectorAll('.tabs').forEach(function (tabGroup) {
    var buttons = tabGroup.querySelectorAll('.tab-btn');
    var panels = tabGroup.querySelectorAll('.tab-panel');
    buttons.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); });
        panels.forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        panels[i].classList.add('active');
      });
    });
  });

  // Hero rotating slider (Training / Defense / Infrastructure)
  var heroSlider = document.getElementById('heroSlider');
  if (heroSlider) {
    var slides = heroSlider.querySelectorAll('.hero-slide');
    var tabs = heroSlider.querySelectorAll('.hero-tab');
    var kickerEl = heroSlider.querySelector('[data-slide-kicker]');
    var headingEl = heroSlider.querySelector('[data-slide-heading]');
    var linkEl = heroSlider.querySelector('[data-slide-link]');
    var panelEl = heroSlider.querySelector('.hero-slider-panel');
    var current = 0;
    var timer;

    var goTo = function (index) {
      current = index;
      slides.forEach(function (s, i) { s.classList.toggle('is-active', i === index); });
      tabs.forEach(function (t, i) { t.classList.toggle('is-active', i === index); });
      var tab = tabs[index];
      kickerEl.textContent = tab.getAttribute('data-kicker');
      headingEl.textContent = tab.getAttribute('data-heading');
      linkEl.setAttribute('href', tab.getAttribute('data-href'));
      // Slide 1 (index 0): panel aligns left. Slides 2-3: panel aligns right.
      panelEl.classList.toggle('is-align-right', index !== 0);
    };
    var next = function () { goTo((current + 1) % slides.length); };
    var startAuto = function () { timer = setInterval(next, 6000); };
    var stopAuto = function () { clearInterval(timer); };

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        goTo(i);
        stopAuto();
        startAuto();
      });
    });
    heroSlider.addEventListener('mouseenter', stopAuto);
    heroSlider.addEventListener('mouseleave', startAuto);
    startAuto();
  }

  // Counter animation — reads data-to-value, matches live site's real numbers
  var counters = document.querySelectorAll('.stat .num[data-to-value]');
  if (counters.length) {
    var animate = function (el) {
      var target = parseInt(el.getAttribute('data-to-value'), 10);
      var duration = 1200;
      var start = null;
      function step(ts) {
        if (!start) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        el.textContent = Math.round(progress * target) + '%';
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    };
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(function (c) { observer.observe(c); });
  }
});
