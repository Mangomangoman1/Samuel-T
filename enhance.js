/* Actrix progressive enhancement — tasteful, opt-in motion.
   Adds .reveal-on to <html> ONLY when motion is allowed, then reveals each
   section as it scrolls into view. No-JS or reduced-motion => class is never
   added => everything is visible by default (see polish.css rule #8).
   A safety net guarantees content can never get stuck hidden. */
(function () {
  var d = document, root = d.documentElement;
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  root.classList.add('reveal-on');
  function go() {
    var els = [].slice.call(d.querySelectorAll('main > section')).slice(1); // hero has its own entrance
    function reveal(e) { e.classList.add('in'); }
    if (!('IntersectionObserver' in window)) { els.forEach(reveal); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { reveal(en.target); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });
    els.forEach(function (e) { io.observe(e); });
    // Safety net: if anything in (or above) the viewport is still hidden after 1.8s
    // (e.g. observer hiccup), reveal it so content is never stuck.
    setTimeout(function () {
      els.forEach(function (e) {
        if (!e.classList.contains('in')) {
          var r = e.getBoundingClientRect();
          if (r.top < (window.innerHeight || 0)) reveal(e);
        }
      });
    }, 1800);
  }
  if (d.readyState !== 'loading') go(); else d.addEventListener('DOMContentLoaded', go);
})();
