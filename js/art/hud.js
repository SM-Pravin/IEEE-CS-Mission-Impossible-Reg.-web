/* Radar / crosshair HUD ring used in the intro and the scenario-leak cards */
(function (MI) {
  const art = (MI.art = MI.art || {});
  art.hudSvg = (cls = 'hud') => `
<svg class="${cls}" viewBox="0 0 200 200" aria-hidden="true">
  <g fill="none" stroke="#d3130e" stroke-width=".7">
    <circle cx="100" cy="100" r="96"/><circle cx="100" cy="100" r="76" stroke-dasharray="1 3.5"/>
    <circle cx="100" cy="100" r="52"/><circle cx="100" cy="100" r="22"/>
    <path d="M0 100h200M100 0v200"/>
    <path d="M100 4v8M100 188v8M4 100h8M188 100h8M32 32l5 5M168 32l-5 5M32 168l5-5M168 168l-5-5"/>
  </g>
</svg>`;
  art.hud = (el) => art.hudSvg(el && el.dataset && el.dataset.class);
})((window.MI = window.MI || {}));
