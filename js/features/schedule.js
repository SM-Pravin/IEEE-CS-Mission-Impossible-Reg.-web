/* Schedule: vertical timeline, marks live / complete slots on event day. Content comes from data/event.js */
(function (MI) {
  const { $, $$, esc, fmt12, at } = MI;
  function update() {
    const now = new Date();
    $$('#tl li').forEach((li) => {
      const s = at(li.dataset.s), e = at(li.dataset.e), b = $('.badge', li);
      li.classList.remove('live', 'done');
      b.textContent = '';
      if (now >= e) { li.classList.add('done'); b.textContent = 'Complete'; }
      else if (now >= s) { li.classList.add('live'); b.textContent = 'Live now'; }
    });
  }
  MI.schedule = {
    init() {
      const tl = $('#tl');
      if (!tl) return;
      tl.innerHTML = MI.event.schedule.map((x) => `
  <li data-s="${x.s}" data-e="${x.e}">
    <span class="time">${fmt12(x.s)} – ${fmt12(x.e)}</span>
    <h3>${x.round ? 'Round ' + x.round + ' · ' : ''}${esc(x.label)}<span class="badge"></span></h3>
    ${x.desc ? `<p>${esc(x.desc)}</p>` : ''}
  </li>`).join('');
      update();
      setInterval(update, 30000);
    },
    update
  };
})((window.MI = window.MI || {}));
