/* Scenario leak cards: redacted text, tap to declassify with a scramble-decrypt effect */
(function (MI) {
  const { $, $$, esc, reduce } = MI;
  const GLYPHS = '█▓▒░#@%&*01/\\';
  MI.leaks = {
    init() {
      const wrap = $('#leaks');
      if (!wrap) return;
      wrap.innerHTML = MI.event.leaks.map((l) => `
  <article class="leak">
    ${MI.art.hudSvg('hud')}
    <p class="lab mono">${esc(l.label)}</p>
    <p class="q red" data-text="${esc(l.text)}" role="status" aria-live="polite">&nbsp;</p>
    <div class="foot"><small>${esc(l.note)}</small><button class="btn red sm declass" type="button" aria-label="Declassify ${esc(l.label)}">Declassify</button></div>
  </article>`).join('');
      $$('.leak', wrap).forEach((card) => {
        const q = $('.q', card), text = q.dataset.text, btn = $('.declass', card);
        q.textContent = text.replace(/\S/g, '█');
        q.setAttribute('aria-label', 'Classified intelligence scenario. Press Declassify button to reveal details.');
        btn.addEventListener('click', () => {
          if (btn.dataset.done) return;
          btn.dataset.done = 1; btn.disabled = true; btn.textContent = 'Declassified';
          btn.setAttribute('aria-label', 'Scenario declassified');
          q.classList.remove('red');
          q.setAttribute('aria-label', `Declassified scenario: ${text}`);
          if (reduce) { q.textContent = text; q.removeAttribute('aria-label'); return; }
          let i = 0;
          const iv = setInterval(() => {
            q.textContent = text.split('').map((c, k) => (c === ' ' ? ' ' : k < i ? c : GLYPHS[(Math.random() * GLYPHS.length) | 0])).join('');
            i += 1.4;
            if (i >= text.length) { q.textContent = text; q.removeAttribute('aria-label'); clearInterval(iv); }
          }, 28);
        });
      });
    }
  };
})((window.MI = window.MI || {}));
