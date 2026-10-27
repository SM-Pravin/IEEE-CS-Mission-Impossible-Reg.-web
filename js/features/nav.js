/* Mobile menu toggle */
(function (MI) {
  const { $, $$ } = MI;
  MI.nav = {
    init() {
      const nav = $('#nav'), burger = $('#burger');
      burger.addEventListener('click', () => burger.setAttribute('aria-expanded', nav.classList.toggle('open')));
      $$('#menu a').forEach((a) => a.addEventListener('click', () => { nav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }));
    }
  };
})((window.MI = window.MI || {}));
