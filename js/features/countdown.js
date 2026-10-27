/* Hero countdown to the event start; switches to LIVE / COMPLETE states */
(function (MI) {
  const { $, pad, at } = MI;
  MI.countdown = {
    init() {
      const E = MI.event, start = at(E.start), end = at(E.end);
      const cd = $('#cd'), label = $('#cdLabel'), status = $('#cdStatus');
      if (!cd) return;
      const tick = () => {
        const now = new Date();
        if (now >= start) {
          cd.hidden = true; label.hidden = true; status.hidden = false;
          status.textContent = now >= end ? 'Mission complete' : `Mission live now · ${E.venue}`;
          return;
        }
        let d = Math.floor((start - now) / 1000);
        const days = Math.floor(d / 86400); d %= 86400;
        const h = Math.floor(d / 3600); d %= 3600;
        $('#cdD').textContent = pad(days); $('#cdH').textContent = pad(h);
        $('#cdM').textContent = pad(Math.floor(d / 60)); $('#cdS').textContent = pad(d % 60);
      };
      tick();
      setInterval(tick, 1000);
    }
  };
})((window.MI = window.MI || {}));
