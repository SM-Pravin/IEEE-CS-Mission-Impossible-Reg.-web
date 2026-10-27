/* Event specs, prize podium and fee cards, rendered from data */
(function (MI) {
  const { $, esc } = MI;
  MI.details = {
    init() {
      const E = MI.event;
      const specs = $('#specs');
      if (specs) {
        const rows = [
          ['Date', esc(E.dateLong)],
          ['Timings', `${esc(E.timeLabel)} <small>IST (Indian Standard Time)</small>`],
          ['Venue', esc(E.venue)],
          ['Squad size', `${esc(E.squadLabel)} operatives`],
          ['Registration fee', E.fees.map((f) => `<span class="fee-line">${esc(f.amount)} <small>per head · ${esc(f.label)}</small></span>`).join('')],
          ['Field support / inquiries', `${esc(E.contact.name)}<small><a href="tel:${esc(E.contact.tel)}">${esc(E.contact.phone)}</a></small>`]
        ];
        specs.innerHTML = rows.map(([k, v]) => `<div class="spec"><dt>${k}</dt><dd>${v}</dd></div>`).join('');
      }
      const pod = $('#podium');
      if (pod) {
        const by = (r) => E.prizes.find((p) => p.rank === r);
        pod.innerHTML = [2, 1, 3].map((r) => by(r)).filter(Boolean)
          .map((p) => `<div class="pod p${p.rank}"><b>${esc(p.amount)}</b><span>${esc(p.label)}</span></div>`).join('');
      }
      const fees = $('#fees');
      if (fees) fees.innerHTML = E.fees.map((f) => `<div class="fee"><span>${esc(f.label)}</span><b>${esc(f.amount)}</b></div>`).join('');
    }
  };
})((window.MI = window.MI || {}));
