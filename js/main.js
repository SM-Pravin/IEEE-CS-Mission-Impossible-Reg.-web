/* Bootstrap: mount SVG art, then init each feature in order. Scripts are `defer`red, so the DOM is ready. */
(function (MI) {
  document.querySelectorAll('[data-art]').forEach((el) => {
    const make = MI.art[el.dataset.art];
    if (make) el.outerHTML = make(el);
  });
  ['bind', 'details', 'calendar', 'rules', 'leaks', 'schedule', 'countdown', 'reveal', 'nav', 'scroll', 'intro']
    .forEach((k) => MI[k] && MI[k].init());
})(window.MI);
