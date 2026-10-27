/* Binds data/event.js values into the page: [data-bind], [data-reg], [data-tel], hero chips */
(function (MI) {
  const { $, $$, esc } = MI;
  const get = (o, p) => p.split('.').reduce((a, k) => (a == null ? a : a[k]), o);
  MI.bind = {
    init() {
      const E = MI.event;
      $$('[data-bind]').forEach((el) => { const v = get(E, el.dataset.bind); if (v != null) el.textContent = v; });
      $$('[data-reg]').forEach((a) => { a.href = E.registerUrl; a.target = '_blank'; a.rel = 'noopener'; });
      $$('[data-tel]').forEach((a) => { a.href = 'tel:' + E.contact.tel; a.textContent = `${E.contact.name} · ${E.contact.phone}`; });
      const chips = $('#chips');
      if (chips) chips.innerHTML = [E.dateLabel, E.timeLabel, E.venue, `Squads of ${E.squadLabel}`].map((t) => `<li>${esc(t)}</li>`).join('');
      const build = E.schedule.find((x) => x.id === 'build');
      const el = $('[data-build-min]');
      if (build && el) el.textContent = MI.toMin(build.e) - MI.toMin(build.s);
    }
  };
})((window.MI = window.MI || {}));
