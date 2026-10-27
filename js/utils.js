/* Tiny shared helpers. Everything hangs off one global: window.MI */
(function (MI) {
  MI.$ = (s, c = document) => c.querySelector(s);
  MI.$$ = (s, c = document) => [...c.querySelectorAll(s)];
  MI.pad = (n) => String(n).padStart(2, '0');
  MI.esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  MI.reduce = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  MI.toMin = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
  MI.fmt12 = (t) => { const [h, m] = t.split(':').map(Number); return `${((h + 11) % 12) + 1}:${MI.pad(m)} ${h < 12 ? 'AM' : 'PM'}`; };
  MI.at = (t) => new Date(`${MI.event.date}T${t}:00${MI.event.tz}`);
})((window.MI = window.MI || {}));
