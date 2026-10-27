/* Rulebook accordion (native <details>), rendered from data */
(function (MI) {
  const { $, esc } = MI;
  MI.rules = {
    init() {
      const acc = $('#acc');
      if (!acc) return;
      acc.innerHTML = MI.event.rules.map((s, i) => `
  <details${i === 0 ? ' open' : ''}>
    <summary><small>SECTION ${s.n}</small>${esc(s.t)}</summary>
    <div class="body">${s.r.map((r) => `<div class="rule"><h4><span>${esc(r[0])}</span>${esc(r[1])}</h4><p>${esc(r[2])}</p></div>`).join('')}</div>
  </details>`).join('');
    }
  };
})((window.MI = window.MI || {}));
