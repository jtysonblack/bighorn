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

  // Mobile flyout (Services submenu) toggle — tap to expand instead of hover
  document.querySelectorAll('.has-flyout > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 760) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
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
