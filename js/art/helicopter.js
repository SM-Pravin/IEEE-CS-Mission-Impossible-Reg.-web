/* Light utility helicopter silhouette (class .heli is styled/animated in css/hero.css) */
(function (MI) {
  const art = (MI.art = MI.art || {});
  art.helicopter = () => `
<svg class="heli" viewBox="60 290 960 410" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <!-- Tail Rotor System (Proportional spinning anti-torque blades on tail pylon) -->
  <g class="tail-rotor" style="transform-origin: 92px 470px;">
    <!-- High-speed motion blur disc -->
    <circle cx="92" cy="470" r="24" fill="#0b0707" opacity="0.18"/>
    <!-- Tail rotor dual-blade pair -->
    <line x1="92" y1="446" x2="92" y2="494" stroke="#0b0707" stroke-width="3" stroke-linecap="round"/>
    <line x1="68" y1="470" x2="116" y2="470" stroke="#0b0707" stroke-width="3" stroke-linecap="round"/>
    <circle cx="92" cy="470" r="3" fill="#0b0707"/>
  </g>

  <!-- Main Rotor System (Inspired by tutorial: .rotor container with scaleY + .rotator crossed blades with rotate keyframes) -->
  <g class="rotor" style="transform-origin: 588px 368px;">
    <!-- Translucent speed disk background -->
    <circle cx="588" cy="368" r="292" fill="#0b0707" opacity="0.18"/>
    <!-- Spinning rotator with crossed blades (0deg and 90deg) -->
    <g class="rotator" style="transform-origin: 588px 368px;">
      <!-- Blade 1 (0deg) -->
      <rect x="296" y="348" width="584" height="40" rx="20" fill="#0b0707"/>
      <!-- Blade 2 (90deg) -->
      <rect x="296" y="348" width="584" height="40" rx="20" fill="#0b0707" transform="rotate(90 588 368)"/>
    </g>
  </g>

  <!-- Rotor Mast Hub Cap / Swashplate Housing -->
  <path d="M552 366C552 354 570 352 587 352C604 352 624 354 624 366C624 376 606 384 587 384C568 384 552 376 552 366Z"/>
  <path d="M556 384L566 428H574L582 386ZM584 386H592V428H584ZM618 384L608 428H600L592 386Z"/>

  <!-- Fuselage Body, Windows, Skids -->
  <path fill-rule="evenodd" d="M470 436C480 428 500 427 540 427L640 426C656 428 664 442 672 464L780 469C805 473 840 500 880 546C892 560 892 582 868 600C846 616 800 628 740 633L600 637C530 636 462 606 400 572L300 568L170 556L165 575L135 605L108 613L122 544L84 543L82 527L124 526L72 431L105 431L160 519L300 507L422 502L440 490C448 470 458 448 470 436Z
  M587 497L612 497L615 548L590 546Z
  M658 494L697 494L697 556L658 556Z
  M724 494L764 494L780 556L724 556Z
  M776 482L800 481C834 498 860 522 874 548L826 534C812 530 800 534 791 540Z"/>
  <path d="M412 455H446C456 455 460 462 460 471C460 480 456 487 446 487H412C402 487 398 480 398 471C398 462 402 455 412 455Z"/>
  <path d="M736 468L764 428L770 438L754 470ZM692 466L694 450L708 467Z"/>
  <path d="M260 580L325 568L305 582Z"/>
  <path d="M538 634L532 672H542L548 636ZM706 636L702 672H712L718 634Z"/>
  <path d="M470 668H738L772 646C780 642 792 642 792 648C792 654 784 656 778 656L744 683H470Z"/>
  <path d="M504 647H742V658H504Z"/>
</svg>
`;
})((window.MI = window.MI || {}));
