/* Rappelling agent silhouette behind the hero text (poster motif) */
(function (MI) {
  const art = (MI.art = MI.art || {});
  art.silhouette = () => `
<!-- agent silhouette: rappelling operative (poster motif) -->
  <svg class="sil" viewBox="0 0 200 280" aria-hidden="true">
    <defs><linearGradient id="fade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b0707"/><stop offset="1" stop-color="#0b0707" stop-opacity="0"/></linearGradient></defs>
    <!-- rappel line -->
    <line x1="100" y1="0" x2="92" y2="280" stroke="url(#fade)" stroke-width="1.4" opacity=".6"/>
    <!-- harness and torso -->
    <path fill="url(#fade)" d="M100 24c8 0 14 6 14 14v8c0 3-2 6-5 8l10 16c4 6 2 14-4 18-3 2-7 2-10 0l-10-16c-3-2-5-5-5-8v-8c0-8 6-14 14-14z"/>
    <!-- head -->
    <circle cx="100" cy="12" r="8" fill="url(#fade)"/>
    <!-- left arm (extended) -->
    <path fill="url(#fade)" d="M92 36c-12 4-22 12-28 24l8 6c5-10 14-17 26-20z"/>
    <!-- right arm (on rappel device) -->
    <path fill="url(#fade)" d="M108 36c12 4 22 12 28 24l-8 6c-5-10-14-17-26-20z"/>
    <!-- left leg (bent, descending) -->
    <path fill="url(#fade)" d="M92 56c-6 16-8 34-6 52l10-2c-2-16 0-32 4-46z"/>
    <!-- right leg (extended forward) -->
    <path fill="url(#fade)" d="M108 56c6 16 8 34 6 52l-10-2c2-16 0-32-4-46z"/>
    <!-- boot outlines for depth -->
    <ellipse cx="90" cy="106" rx="4" ry="6" fill="url(#fade)" opacity=".8"/>
    <ellipse cx="110" cy="110" rx="4" ry="6" fill="url(#fade)" opacity=".8"/>
    <!-- tactical vest detail -->
    <rect x="94" y="34" width="12" height="18" fill="none" stroke="url(#fade)" stroke-width=".8" opacity=".6"/>
  </svg>
`;
})((window.MI = window.MI || {}));
