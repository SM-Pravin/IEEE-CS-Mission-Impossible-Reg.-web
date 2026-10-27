/* Section headings reveal (.rv) - set statically visible immediately */
(function (MI) {
  const { $$ } = MI;
  MI.reveal = {
    init() {
      const els = $$('.rv');
      els.forEach((e) => e.classList.add('in'));
    }
  };
})((window.MI = window.MI || {}));
