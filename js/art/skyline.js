/* London skyline: Detailed Tower Bridge, Palace of Westminster, Slender & Authentic Elizabeth Tower (Big Ben with moving clock hands),
   Slowly Spinning London Eye with gravity-level upright passenger pods, St Paul's Cathedral, Battersea Power Station,
   The Shard, The Gherkin (with strict SVG clipping preventing line bleed), Walkie-Talkie, Victorian lamps, K6 phone box, bus */
(function (MI) {
  const art = (MI.art = MI.art || {});
  art.skyline = () => `
<!-- High-detail London Skyline with Mathematically Precision Alignments -->
<svg class="sky" viewBox="0 0 1600 300" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg" fill="#0b0707" aria-hidden="true">
<defs>
  <!-- Multi-Tier Depth Window Patterns with Varied Lighting Tints -->
  <pattern id="win-grid" width="16" height="24" patternUnits="userSpaceOnUse">
    <!-- Row 1: Lit and Ambient Workstations -->
    <rect x="2" y="3" width="4.5" height="7" rx="0.8" fill="#ef2b20" opacity="0.88"/>
    <rect x="9.5" y="3" width="4.5" height="7" rx="0.8" fill="#7c0906" opacity="0.75"/>
    <!-- Row 2: Warm and Dimmed Workstations -->
    <rect x="2" y="14" width="4.5" height="7" rx="0.8" fill="#a3130d" opacity="0.8"/>
    <rect x="9.5" y="14" width="4.5" height="7" rx="0.8" fill="#4a0604" opacity="0.6"/>
  </pattern>

  <pattern id="win-grid-dense" width="12" height="18" patternUnits="userSpaceOnUse">
    <rect x="1.5" y="2" width="3.5" height="5.5" rx="0.6" fill="#ef2b20" opacity="0.82"/>
    <rect x="7" y="2" width="3.5" height="5.5" rx="0.6" fill="#5a0705" opacity="0.65"/>
    <rect x="1.5" y="10.5" width="3.5" height="5.5" rx="0.6" fill="#8f0c08" opacity="0.75"/>
    <rect x="7" y="10.5" width="3.5" height="5.5" rx="0.6" fill="#ef2b20" opacity="0.7"/>
  </pattern>

  <pattern id="gothic-win" width="12" height="32" patternUnits="userSpaceOnUse">
    <path d="M2 12V28H5V12C5 8 3.5 4 3.5 4S2 8 2 12Z" fill="#ef2b20" opacity="0.85"/>
    <path d="M7 12V28H10V12C10 8 8.5 4 8.5 4S7 8 7 12Z" fill="#6a0806" opacity="0.75"/>
  </pattern>

  <!-- Lighting Gradients for Architectural Depth -->
  <linearGradient id="walkwayGlow" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#4a0604" stop-opacity="0.8"/>
    <stop offset="25%" stop-color="#ef2b20" stop-opacity="0.9"/>
    <stop offset="50%" stop-color="#8f0c08" stop-opacity="0.75"/>
    <stop offset="75%" stop-color="#ef2b20" stop-opacity="0.95"/>
    <stop offset="100%" stop-color="#4a0604" stop-opacity="0.8"/>
  </linearGradient>

  <linearGradient id="cathedralGlow" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ef2b20" stop-opacity="0.9"/>
    <stop offset="60%" stop-color="#8f0c08" stop-opacity="0.75"/>
    <stop offset="100%" stop-color="#3a0604" stop-opacity="0.6"/>
  </linearGradient>

  <linearGradient id="skyGardenGlow" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#ef2b20" stop-opacity="0.95"/>
    <stop offset="40%" stop-color="#a3130d" stop-opacity="0.8"/>
    <stop offset="100%" stop-color="#4a0604" stop-opacity="0.5"/>
  </linearGradient>

  <!-- Thames water wave pattern -->
  <pattern id="river-wave" width="80" height="12" patternUnits="userSpaceOnUse">
    <path d="M0 6 Q20 1 40 6 T80 6" fill="none" stroke="#ef2b20" stroke-opacity="0.32" stroke-width="1.6" stroke-linecap="round"/>
    <path d="M-20 10 Q0 5 20 10 T60 10" fill="none" stroke="#ef2b20" stroke-opacity="0.18" stroke-width="1.2"/>
  </pattern>

  <!-- CLIPPING MASKS: Guaranteeing no lines ever exceed building contours -->
  <clipPath id="gherkinClip">
    <path d="M1520 270 C1510 220 1512 160 1532 94 C1536 82 1544 82 1548 94 C1568 160 1570 220 1560 270 Z"/>
  </clipPath>

  <clipPath id="shardClip">
    <path d="M1446 270 L1476 6 L1506 270 Z"/>
  </clipPath>

  <clipPath id="walkieClip">
    <path d="M1120 270 C1124 230 1120 190 1114 150 C1114 140 1126 136 1148 136 C1170 136 1182 140 1182 150 C1176 190 1172 230 1176 270 Z"/>
  </clipPath>

  <!-- Detailed Tower Bridge Tower Template with Depth-Tinted Lancet Lighting -->
  <g id="towerBridgePillar">
    <!-- Main Stone Pier Base in Thames with Cutwater Breakwaters -->
    <path d="M-36 274 C-36 248 -32 240 -26 238 H26 C32 238 36 248 36 274 Z" fill="#0b0707"/>
    <path d="M-32 274 H32" stroke="#7c0906" stroke-width="1.5"/>
    <path d="M-26 238 L-34 266 M26 238 L34 266" stroke="#5a0705" stroke-width="1.2"/>
    
    <!-- Main Tower Body -->
    <path d="M-26 238 V126 H26 V238 Z" fill="#0b0707"/>
    
    <!-- Lower Gothic Gateway Arch (roadway portal) with Atmospheric Red Glow -->
    <path d="M-14 238 V202 C-14 184 0 174 0 174 C0 174 14 184 14 202 V238 Z" fill="#5a0705" opacity="0.95"/>
    <path d="M-14 202 C-14 184 0 174 0 174 C0 174 14 184 14 202" fill="none" stroke="#ef2b20" stroke-width="1.5"/>
    <path d="M-9 238 V214 C-9 204 0 198 0 198 C0 198 9 204 9 214 V238 Z" fill="#ef2b20" opacity="0.25"/>

    <!-- Middle Level Windows & Stringcourses -->
    <rect x="-22" y="132" width="44" height="4" fill="#7c0906"/>
    <rect x="-24" y="162" width="48" height="3" fill="#7c0906"/>
    <rect x="-24" y="194" width="48" height="3" fill="#7c0906"/>

    <!-- Dual Lancet Windows on Tower Middle with Individual Depth Tints -->
    <!-- Upper Lancet Pair (Active illumination) -->
    <path d="M-16 142 V156 H-6 V142 C-6 138 -11 135 -11 135 C-11 135 -16 138 -16 142 Z" fill="#ef2b20" opacity="0.9"/>
    <path d="M6 142 V156 H16 V142 C16 138 11 135 11 135 C11 135 6 138 6 142 Z" fill="#a3130d" opacity="0.8"/>
    <!-- Lower Lancet Pair (Ambient warm lighting) -->
    <path d="M-16 172 V186 H-6 V172 C-6 168 -11 165 -11 165 C-11 165 -16 168 -16 172 Z" fill="#7c0906" opacity="0.85"/>
    <path d="M6 172 V186 H16 V172 C16 168 11 165 11 165 C11 165 6 168 6 172 Z" fill="#ef2b20" opacity="0.7"/>

    <!-- Upper Gallery / Tower Top Cornice -->
    <path d="M-28 126 H28 L30 118 H-30 Z" fill="#0b0707"/>
    <rect x="-28" y="120" width="56" height="2" fill="#7c0906"/>

    <!-- Four Corner Bartizans / Turrets with Conical Roofs -->
    <!-- Left Outer Turret -->
    <path d="M-30 118 V96 L-26 78 L-22 96 V118 Z" fill="#0b0707"/>
    <line x1="-26" y1="78" x2="-26" y2="70" stroke="#0b0707" stroke-width="1.5"/>
    <circle cx="-26" cy="69" r="1.5" fill="#ef2b20"/>
    <!-- Left Inner Turret -->
    <path d="M-14 118 V100 L-11 84 L-8 100 V118 Z" fill="#0b0707"/>
    <!-- Right Inner Turret -->
    <path d="M8 118 V100 L11 84 L14 100 V118 Z" fill="#0b0707"/>
    <!-- Right Outer Turret -->
    <path d="M22 118 V96 L26 78 L30 96 V118 Z" fill="#0b0707"/>
    <line x1="26" y1="78" x2="26" y2="70" stroke="#0b0707" stroke-width="1.5"/>
    <circle cx="26" cy="69" r="1.5" fill="#ef2b20"/>

    <!-- Central Hi-Pitch Spire Roof -->
    <path d="M-20 118 L0 66 L20 118 Z" fill="#0b0707"/>
    <path d="M-4 118 L0 66 L4 118 Z" fill="#5a0705"/>
    <line x1="0" y1="66" x2="0" y2="52" stroke="#0b0707" stroke-width="2"/>
    <circle cx="0" cy="51" r="2" fill="#ef2b20"/>
  </g>

  <!-- Ornate Victorian Street Lamp -->
  <g id="vicLamp">
    <path d="M-2 270 V224 H2 V270 Z" fill="#0b0707"/>
    <!-- Molded Base -->
    <path d="M-5 270 L-2 260 H2 L5 270 Z" fill="#0b0707"/>
    <!-- Ornate Cross Bracket -->
    <path d="M-6 230 H6" stroke="#0b0707" stroke-width="1.5"/>
    <!-- Lantern Crown -->
    <path d="M-5 224 L-3 214 H3 L5 224 Z" fill="#0b0707"/>
    <path d="M-3 214 L0 208 L3 214 Z" fill="#0b0707"/>
    <circle cx="0" cy="207" r="1.2" fill="#ef2b20"/>
    <!-- Glowing Glass Chamber -->
    <polygon points="-3.5,223 3.5,223 2.5,215 -2.5,215" fill="#ef2b20"/>
    <!-- Light Glow -->
    <circle cx="0" cy="219" r="6" fill="#ef2b20" opacity="0.35"/>
  </g>
</defs>

<!-- LAYER 1: Distant Realistic London Skyline with Battersea Power Station & BT Tower -->
<g fill="#3a0806" opacity="0.55">
  <!-- Battersea Power Station (x: 170 to 270) with 4 iconic fluted chimneys -->
  <path d="M0 270 
    L0 236 Q20 234 36 230 L36 200 L44 200 L44 230
    Q80 232 120 228 L130 216 L142 228
    L172 228 
    L172 170 L176 170 L178 132 L184 132 L186 170 L190 170 L190 228 
    L202 228 
    L202 170 L206 170 L208 132 L214 132 L216 170 L220 170 L220 228
    L232 228
    L232 170 L236 170 L238 132 L244 132 L246 170 L250 170 L250 228
    L262 228
    L262 170 L266 170 L268 132 L274 132 L276 170 L280 170 L280 228
    Q320 230 360 228 L370 206 L384 228
    Q410 232 440 226 L440 270 Z"/>
    
  <!-- BT Tower & Westminster Distant Skyline -->
  <path d="M440 270
    L440 225 Q465 220 490 224 L490 196 L498 174 L506 196 L506 224
    Q530 226 560 222 L570 190 L580 222
    Q610 224 640 228 L640 202 L650 185 L660 202 L660 228
    Q700 230 740 225 L750 210 L764 225
    Q790 224 820 228 
    L820 148 L824 148 L824 136 L828 136 L828 120 L830 120 L830 104 L832 104 L832 120 L834 120 L834 136 L838 136 L838 148 L842 148 L842 228
    Q870 230 900 225 L910 205 L924 225
    Q950 228 980 226 L980 270 Z"/>

  <!-- City of London Background & Docklands -->
  <path d="M980 270
    L980 226 Q1010 224 1040 228 L1048 208 L1056 228
    Q1080 230 1110 225 L1120 192 L1134 225
    Q1160 226 1190 222 L1190 180 L1202 180 L1202 222
    Q1230 225 1260 220 L1270 196 L1284 220
    Q1310 224 1350 224 L1360 178 L1374 224
    Q1400 226 1430 220 L1440 188 L1454 220
    Q1480 222 1520 226 L1530 180 L1545 226
    Q1570 228 1600 224 L1600 270 Z"/>
</g>

<!-- LAYER 2: Foreground Architectural Masterpieces -->

<!-- ==================== TOWER BRIDGE (x: 10 to 420) ==================== -->
<g id="towerBridge">
  <!-- Exact Bézier Mathematical Suspension Cables & Hanger Connections -->
  <!-- Left Shore Main Cable & Mathematical Hanger Intersections -->
  <path d="M12 216 Q68 214 116 130" fill="none" stroke="#0b0707" stroke-width="4.5"/>
  <path d="M12 216 Q68 214 116 130" fill="none" stroke="#ef2b20" stroke-width="1.2" opacity="0.6"/>
  <g stroke="#0b0707" stroke-width="1.5">
    <line x1="28" y1="216" x2="28" y2="213"/>
    <line x1="44" y1="216" x2="44" y2="207"/>
    <line x1="60" y1="216" x2="60" y2="197"/>
    <line x1="76" y1="216" x2="76" y2="182"/>
    <line x1="92" y1="216" x2="92" y2="164"/>
    <line x1="104" y1="216" x2="104" y2="148"/>
  </g>

  <!-- Right Shore Main Cable & Mathematical Hanger Intersections -->
  <path d="M304 130 Q352 214 408 216" fill="none" stroke="#0b0707" stroke-width="4.5"/>
  <path d="M304 130 Q352 214 408 216" fill="none" stroke="#ef2b20" stroke-width="1.2" opacity="0.6"/>
  <g stroke="#0b0707" stroke-width="1.5">
    <line x1="316" y1="148" x2="316" y2="216"/>
    <line x1="328" y1="164" x2="328" y2="216"/>
    <line x1="344" y1="182" x2="344" y2="216"/>
    <line x1="360" y1="197" x2="360" y2="216"/>
    <line x1="376" y1="207" x2="376" y2="216"/>
    <line x1="392" y1="213" x2="392" y2="216"/>
  </g>

  <!-- Left Abutment & Right Abutment Anchorage -->
  <path d="M0 270 V214 H20 V270 Z" fill="#0b0707"/>
  <path d="M400 270 V214 H420 V270 Z" fill="#0b0707"/>

  <!-- High-Level Pedestrian Walkways (Upper & Lower spans with illuminated interior walkway depth) -->
  <g>
    <!-- Upper Walkway -->
    <rect x="142" y="102" width="136" height="12" fill="#0b0707"/>
    <rect x="144" y="104" width="132" height="8" fill="url(#walkwayGlow)"/>
    <path d="M144 104 L152 112 M152 104 L160 112 M160 104 L168 112 M168 104 L176 112 M176 104 L184 112 M184 104 L192 112 M192 104 L200 112 M200 104 L208 112 M208 104 L216 112 M216 104 L224 112 M224 104 L232 112 M232 104 L240 112 M240 104 L248 112 M248 104 L256 112 M256 104 L264 112 M264 104 L272 112" stroke="#0b0707" stroke-width="1.4"/>
    
    <!-- Lower Walkway -->
    <rect x="142" y="122" width="136" height="10" fill="#0b0707"/>
    <rect x="144" y="124" width="132" height="6" fill="url(#walkwayGlow)"/>
    <path d="M144 124 L150 130 M150 124 L156 130 M156 124 L162 130 M162 124 L168 130 M168 124 L174 130 M174 124 L180 130 M180 124 L186 130 M186 124 L192 130 M192 124 L198 130 M198 124 L204 130 M204 124 L210 130 M210 124 L216 130 M216 124 L222 130 M222 124 L228 130 M228 124 L234 130 M234 124 L240 130 M240 124 L246 130 M246 124 L252 130 M252 124 L258 130 M258 124 L264 130 M264 124 L270 130" stroke="#0b0707" stroke-width="1.2"/>
    
    <!-- Cantilever brackets under walkways -->
    <path d="M142 132 L154 138 H142 Z M278 132 L266 138 H278 Z" fill="#0b0707"/>
  </g>

  <!-- Roadway Deck across Tower Bridge -->
  <rect x="0" y="214" width="420" height="8" fill="#0b0707"/>
  <rect x="0" y="215" width="420" height="2" fill="#7c0906" opacity="0.8"/>

  <!-- Bascule Central Opening Roadway (Drawbridge Split) -->
  <g>
    <!-- Left Bascule Leaf -->
    <path d="M142 214 H208 L204 220 H142 Z" fill="#0b0707"/>
    <!-- Right Bascule Leaf -->
    <path d="M212 214 H278 V220 H216 Z" fill="#0b0707"/>
    <!-- Center Gap Indicator -->
    <line x1="210" y1="213" x2="210" y2="221" stroke="#ef2b20" stroke-width="1.5"/>
  </g>

  <!-- The Two Gothic Towers -->
  <use href="#towerBridgePillar" x="116"/>
  <use href="#towerBridgePillar" x="304"/>
</g>

<!-- ==================== PALACE OF WESTMINSTER (x: 436 to 681) ==================== -->
<g id="westminster">
  <!-- VICTORIA TOWER (x: 436 to 488, Soaring Gothic Square Tower) -->
  <g id="victoriaTower">
    <!-- Main Tower Solid Body -->
    <path d="M438 270 V92 H486 V270 Z" fill="#0b0707"/>
    
    <!-- Outer Cladding / Corner Buttress Strips -->
    <path d="M436 270 V94 H442 V270 Z" fill="#0b0707"/>
    <path d="M482 270 V94 H488 V270 Z" fill="#0b0707"/>
    <line x1="439" y1="270" x2="439" y2="94" stroke="#5a0705" stroke-width="1.2"/>
    <line x1="485" y1="270" x2="485" y2="94" stroke="#5a0705" stroke-width="1.2"/>

    <!-- Sovereign's Grand Gothic Entrance Portal at Base -->
    <path d="M448 270 V246 C448 236 462 230 462 230 C462 230 476 236 476 246 V270 Z" fill="#5a0705" opacity="0.95"/>
    <path d="M448 246 C448 236 462 230 462 230 C462 230 476 236 476 246" fill="none" stroke="#ef2b20" stroke-width="1.4"/>
    <path d="M454 270 V252 C454 245 462 240 462 240 C462 240 470 245 470 252 V270 Z" fill="#0b0707"/>

    <!-- Horizontal Stringcourse Mouldings separating Storeys -->
    <rect x="436" y="200" width="52" height="3" fill="#7c0906"/>
    <rect x="436" y="164" width="52" height="3" fill="#7c0906"/>
    <rect x="436" y="128" width="52" height="3" fill="#7c0906"/>
    <rect x="435" y="94" width="54" height="4" fill="#7c0906"/>

    <!-- Tiered Perpendicular Gothic Windows on Victoria Tower with Stratified Lighting Depth -->
    <!-- Tier 1: Lower Storey (y: 206 to 226) -->
    <g fill="#4a0604" opacity="0.75">
      <path d="M446 226 V210 C446 207 449 205 449 205 C449 205 452 207 452 210 V226 Z"/>
      <path d="M472 226 V210 C472 207 475 205 475 205 C475 205 478 207 478 210 V226 Z"/>
    </g>
    <g fill="#a3130d" opacity="0.82">
      <path d="M455 226 V210 C455 207 458 205 458 205 C458 205 461 207 461 210 V226 Z"/>
      <path d="M463 226 V210 C463 207 466 205 466 205 C466 205 469 207 469 210 V226 Z"/>
    </g>

    <!-- Tier 2: Middle Storey (y: 170 to 192) -->
    <g fill="#7c0906" opacity="0.85">
      <path d="M446 192 V174 C446 171 449 169 449 169 C449 169 452 171 452 174 V192 Z"/>
      <path d="M472 192 V174 C472 171 475 169 475 169 C475 169 478 171 478 174 V192 Z"/>
    </g>
    <g fill="#ef2b20" opacity="0.8">
      <path d="M455 192 V174 C455 171 458 169 458 169 C458 169 461 171 461 174 V192 Z"/>
      <path d="M463 192 V174 C463 171 466 169 466 169 C466 169 469 171 469 174 V192 Z"/>
    </g>

    <!-- Tier 3: Upper Storey (y: 134 to 156) -->
    <g fill="#a3130d" opacity="0.85">
      <path d="M446 156 V138 C446 135 449 133 449 133 C449 133 452 135 452 138 V156 Z"/>
      <path d="M472 156 V138 C472 135 475 133 475 133 C475 133 478 135 478 138 V156 Z"/>
    </g>
    <g fill="#ef2b20" opacity="0.92">
      <path d="M455 156 V138 C455 135 458 133 458 133 C458 133 461 135 461 138 V156 Z"/>
      <path d="M463 156 V138 C463 135 466 133 466 133 C466 133 469 135 469 138 V156 Z"/>
    </g>

    <!-- Tier 4: Top Belfry Storey (y: 100 to 120) -->
    <g fill="#ef2b20" opacity="0.95">
      <path d="M447 120 V104 C447 101 450 99 450 99 C450 99 453 101 453 104 V120 Z"/>
      <path d="M456 120 V102 C456 99 462 97 462 97 C462 99 468 99 468 102 V120 Z"/>
      <path d="M471 120 V104 C471 101 474 99 474 99 C474 99 477 101 477 104 V120 Z"/>
    </g>

    <!-- Openwork Crenellated Parapet with Corbels -->
    <path d="M435 94 H489 L490 88 H434 Z" fill="#0b0707"/>
    <path d="M437 88 V84 H440 V88 H443 V84 H446 V88 H449 V84 H452 V88 H455 V84 H458 V88 H461 V84 H464 V88 H467 V84 H470 V88 H473 V84 H476 V88 H479 V84 H482 V88 H485 V84 H487 V88" stroke="#0b0707" stroke-width="1.8"/>

    <!-- High Pyramidal Mansard Roof behind Parapet -->
    <path d="M442 88 L456 64 H468 L482 88 Z" fill="#0b0707"/>
    <path d="M450 88 L458 64 H466 L474 88 Z" fill="#5a0705"/>

    <!-- 4 Corner Octagonal Turrets with Gothic Spirelets & Finials -->
    <!-- Left Outer Corner Turret -->
    <path d="M434 94 V74 L438 54 L442 74 V94 Z" fill="#0b0707"/>
    <path d="M437 74 L438 54 L439 74 Z" fill="#5a0705"/>
    <line x1="438" y1="54" x2="438" y2="46" stroke="#0b0707" stroke-width="1.5"/>
    <circle cx="438" cy="45" r="1.4" fill="#ef2b20"/>

    <!-- Right Outer Corner Turret -->
    <path d="M482 94 V74 L486 54 L490 74 V94 Z" fill="#0b0707"/>
    <path d="M485 74 L486 54 L487 74 Z" fill="#5a0705"/>
    <line x1="486" y1="54" x2="486" y2="46" stroke="#0b0707" stroke-width="1.5"/>
    <circle cx="486" cy="45" r="1.4" fill="#ef2b20"/>

    <!-- Intermediate Turret Spirelets -->
    <path d="M450 88 V76 L453 66 L456 76 V88 Z" fill="#0b0707"/>
    <circle cx="453" cy="65" r="1" fill="#ef2b20"/>
    <path d="M468 88 V76 L471 66 L474 76 V88 Z" fill="#0b0707"/>
    <circle cx="471" cy="65" r="1" fill="#ef2b20"/>

    <!-- Central Ornate Lantern Stage & Flagstaff -->
    <rect x="458" y="58" width="8" height="6" fill="#0b0707"/>
    <rect x="459" y="59" width="6" height="4" fill="#ef2b20" opacity="0.9"/>
    <path d="M457 58 L462 52 L467 58 Z" fill="#0b0707"/>
    <line x1="462" y1="52" x2="462" y2="22" stroke="#0b0707" stroke-width="2"/>
    <!-- Royal Standard / Union Jack Flag Fluttering -->
    <path d="M462 22 C470 20 476 26 486 23 L482 31 C472 28 470 35 462 33 Z" fill="#ef2b20"/>
  </g>

  <!-- MAIN PARLIAMENT RIVER FACADE (x: 488 to 681) -->
  <g id="parliamentRiverFacade">
    <!-- Base Masonry & Embankment Wall -->
    <path d="M488 270 V200 H681 V270 Z" fill="#0b0707"/>
    <rect x="488" y="258" width="193" height="12" fill="#5a0705" opacity="0.4"/>
    <line x1="488" y1="258" x2="681" y2="258" stroke="#7c0906" stroke-width="1.5"/>

    <!-- Continuous Mansard Roof behind Parapet -->
    <path d="M488 200 L496 178 H673 L681 200 Z" fill="#0b0707"/>
    <path d="M496 178 H673" stroke="#5a0705" stroke-width="1.5"/>

    <!-- Regular Vertical Buttress Piers & Pinnacles -->
    <g fill="#0b0707">
      <path d="M508 200 V184 L510 174 L512 184 V200 Z"/>
      <path d="M530 200 V184 L532 174 L534 184 V200 Z"/>
      <path d="M552 200 V184 L554 174 L556 184 V200 Z"/>
      <path d="M574 200 V184 L576 174 L578 184 V200 Z"/>
      <path d="M596 200 V184 L598 174 L600 184 V200 Z"/>
      <path d="M618 200 V184 L620 174 L622 184 V200 Z"/>
      <path d="M640 200 V184 L642 174 L644 184 V200 Z"/>
      <path d="M662 200 V184 L664 174 L666 184 V200 Z"/>
      <path d="M680 200 V184 L681 174 L682 184 V200 Z"/>
    </g>

    <!-- Graceful Gothic Roof Dormers with Tinted Inset Lights -->
    <g fill="#0b0707">
      <!-- Dormer 1 -->
      <path d="M497 200 L502 182 L507 200 Z"/>
      <path d="M500 198 V190 C500 188 502 186 502 186 C502 186 504 188 504 190 V198 Z" fill="#ef2b20" opacity="0.8"/>
      <!-- Dormer 2 -->
      <path d="M519 200 L524 182 L529 200 Z"/>
      <path d="M522 198 V190 C522 188 524 186 524 186 C524 186 526 188 526 190 V198 Z" fill="#7c0906"/>
      <!-- Dormer 3 -->
      <path d="M541 200 L546 182 L551 200 Z"/>
      <path d="M544 198 V190 C544 188 546 186 546 186 C546 186 548 188 548 190 V198 Z" fill="#ef2b20" opacity="0.85"/>
      <!-- Dormer 4 (East of Spire) -->
      <path d="M583 200 L588 182 L593 200 Z"/>
      <path d="M586 198 V190 C586 188 588 186 588 186 C588 186 590 188 590 190 V198 Z" fill="#a3130d" opacity="0.75"/>
      <!-- Dormer 5 -->
      <path d="M605 200 L610 182 L615 200 Z"/>
      <path d="M608 198 V190 C608 188 610 186 610 186 C610 186 612 188 612 190 V198 Z" fill="#ef2b20" opacity="0.8"/>
      <!-- Dormer 6 -->
      <path d="M627 200 L632 182 L637 200 Z"/>
      <path d="M630 198 V190 C630 188 632 186 632 186 C632 186 634 188 634 190 V198 Z" fill="#7c0906"/>
      <!-- Dormer 7 -->
      <path d="M649 200 L654 182 L659 200 Z"/>
      <path d="M652 198 V190 C652 188 654 186 654 186 C654 186 656 188 656 190 V198 Z" fill="#ef2b20" opacity="0.85"/>
      <!-- Dormer 8 -->
      <path d="M669 200 L674 182 L679 200 Z"/>
      <path d="M672 198 V190 C672 188 674 186 674 186 C674 186 676 188 676 190 V198 Z" fill="#a3130d" opacity="0.75"/>
    </g>

    <!-- Crenellated Parapet Stringcourse -->
    <rect x="488" y="198" width="193" height="3" fill="#7c0906"/>
    <rect x="488" y="228" width="193" height="2" fill="#5a0705"/>

    <!-- Two-Tier Gothic Windows across all Parliamentary Bays with Varied Realistic Lighting Tints -->
    <!-- LAYER A: Brightly Lit Active Offices / Chambers (fill="#ef2b20" opacity="0.88") -->
    <g fill="#ef2b20" opacity="0.88">
      <!-- Upper Floor Active Windows -->
      <path d="M500 226 V208 C500 205 502.5 204 502.5 204 C502.5 204 505 205 505 208 V226 Z"/>
      <path d="M514 226 V208 C514 205 516.5 204 516.5 204 C516.5 204 519 205 519 208 V226 Z"/>
      <path d="M544 226 V208 C544 205 546.5 204 546.5 204 C546.5 204 549 205 549 208 V226 Z"/>
      <path d="M580 226 V208 C580 205 582.5 204 582.5 204 C582.5 204 585 205 585 208 V226 Z"/>
      <path d="M610 226 V208 C610 205 612.5 204 612.5 204 C612.5 204 615 205 615 208 V226 Z"/>
      <path d="M632 226 V208 C632 205 634.5 204 634.5 204 C634.5 204 637 205 637 208 V226 Z"/>
      <path d="M654 226 V208 C654 205 656.5 204 656.5 204 C656.5 204 659 205 659 208 V226 Z"/>
      <path d="M675 226 V208 C675 205 677.5 204 677.5 204 C677.5 204 680 205 680 208 V226 Z"/>

      <!-- Lower Floor Active Windows -->
      <path d="M492 254 V236 C492 233 494.5 232 494.5 232 C494.5 232 497 233 497 236 V254 Z"/>
      <path d="M522 254 V236 C522 233 524.5 232 524.5 232 C524.5 232 527 233 527 236 V254 Z"/>
      <path d="M536 254 V236 C536 233 538.5 232 538.5 232 C538.5 232 541 233 541 236 V254 Z"/>
      <path d="M588 254 V236 C588 233 590.5 232 590.5 232 C590.5 232 593 233 593 236 V254 Z"/>
      <path d="M602 254 V236 C602 233 604.5 232 604.5 232 C604.5 232 607 233 607 236 V254 Z"/>
      <path d="M646 254 V236 C646 233 648.5 232 648.5 232 C648.5 232 651 233 651 236 V254 Z"/>
      <path d="M668 254 V236 C668 233 670.5 232 670.5 232 C670.5 232 673 233 673 236 V254 Z"/>
    </g>

    <!-- LAYER B: Warm Ambient Illuminated Windows (fill="#a3130d" opacity="0.8") -->
    <g fill="#a3130d" opacity="0.8">
      <!-- Upper Floor Warm Windows -->
      <path d="M492 226 V208 C492 205 494.5 204 494.5 204 C494.5 204 497 205 497 208 V226 Z"/>
      <path d="M522 226 V208 C522 205 524.5 204 524.5 204 C524.5 204 527 205 527 208 V226 Z"/>
      <path d="M536 226 V208 C536 205 538.5 204 538.5 204 C538.5 204 541 205 541 208 V226 Z"/>
      <path d="M588 226 V208 C588 205 590.5 204 590.5 204 C590.5 204 593 205 593 208 V226 Z"/>
      <path d="M602 226 V208 C602 205 604.5 204 604.5 204 C604.5 204 607 205 607 208 V226 Z"/>
      <path d="M624 226 V208 C624 205 626.5 204 626.5 204 C626.5 204 629 205 629 208 V226 Z"/>
      <path d="M646 226 V208 C646 205 648.5 204 648.5 204 C648.5 204 651 205 651 208 V226 Z"/>
      <path d="M668 226 V208 C668 205 670.5 204 670.5 204 C670.5 204 673 205 673 208 V226 Z"/>

      <!-- Lower Floor Warm Windows -->
      <path d="M500 254 V236 C500 233 502.5 232 502.5 232 C502.5 232 505 233 505 236 V254 Z"/>
      <path d="M514 254 V236 C514 233 516.5 232 516.5 232 C516.5 232 519 233 519 236 V254 Z"/>
      <path d="M544 254 V236 C544 233 546.5 232 546.5 232 C546.5 232 549 233 549 236 V254 Z"/>
      <path d="M580 254 V236 C580 233 582.5 232 582.5 232 C582.5 232 585 233 585 236 V254 Z"/>
      <path d="M610 254 V236 C610 233 612.5 232 612.5 232 C612.5 232 615 233 615 236 V254 Z"/>
      <path d="M632 254 V236 C632 233 634.5 232 634.5 232 C634.5 232 637 233 637 236 V254 Z"/>
      <path d="M654 254 V236 C654 233 656.5 232 656.5 232 C656.5 232 659 233 659 236 V254 Z"/>
      <path d="M675 254 V236 C675 233 677.5 232 677.5 232 C677.5 232 680 233 680 236 V254 Z"/>
    </g>

    <!-- LAYER C: Deep Shaded / Dim Night Rooms (fill="#4a0604" opacity="0.65") -->
    <g fill="#4a0604" opacity="0.65">
      <path d="M516.5 226 V210 C516.5 207 517.5 206 517.5 206 C517.5 206 519 207 519 210 V226 Z"/>
      <path d="M626.5 254 V238 C626.5 235 627.5 234 627.5 234 C627.5 234 629 235 629 238 V254 Z"/>
    </g>
  </g>

  <!-- CENTRAL LOBBY OCTAGONAL TOWER & SPIRE (x: 554 to 574) -->
  <g id="centralLobbySpire">
    <!-- Octagonal Drum Base with Flying Buttresses (y: 168 to 200) -->
    <path d="M552 200 V172 L556 166 H572 L576 172 V200 Z" fill="#0b0707"/>
    <!-- Flying Buttress Brackets -->
    <path d="M548 200 L554 172 H552 L546 200 Z" fill="#0b0707"/>
    <path d="M580 200 L574 172 H576 L582 200 Z" fill="#0b0707"/>
    <!-- Drum Traceried Windows -->
    <g fill="#ef2b20" opacity="0.85">
      <path d="M557 194 V176 C557 173 560 171 560 171 C560 171 563 173 563 176 V194 Z"/>
      <path d="M565 194 V176 C565 173 568 171 568 171 C568 171 571 173 571 176 V194 Z"/>
    </g>
    <rect x="554" y="166" width="20" height="2" fill="#7c0906"/>

    <!-- Lantern Storey (y: 136 to 166) -->
    <path d="M555 166 V140 L558 136 H570 L573 140 V166 Z" fill="#0b0707"/>
    <path d="M560 162 V142 C560 140 564 138 564 138 C564 138 568 140 568 142 V162 Z" fill="#7c0906" opacity="0.9"/>

    <!-- Soaring Octagonal Gothic Spire (y: 72 to 136) -->
    <path d="M557 136 L564 74 L571 136 Z" fill="#0b0707"/>
    <path d="M561 136 L564 74 L567 136 Z" fill="#5a0705"/>
    <!-- Spire Ring Bands -->
    <line x1="559" y1="116" x2="569" y2="116" stroke="#7c0906" stroke-width="1.2"/>
    <line x1="561" y1="96" x2="567" y2="96" stroke="#7c0906" stroke-width="1.2"/>

    <!-- Spire Tip Finial & Glowing Beacon -->
    <line x1="564" y1="74" x2="564" y2="60" stroke="#0b0707" stroke-width="1.8"/>
    <circle cx="564" cy="59" r="1.8" fill="#ef2b20"/>
  </g>

  <!-- ST STEPHEN'S / PEERS' TURRET (x: 594 to 604) -->
  <g id="stStephensTurret">
    <path d="M595 200 V160 L599 130 L603 160 V200 Z" fill="#0b0707"/>
    <path d="M598 160 L599 130 L600 160 Z" fill="#5a0705"/>
    <line x1="599" y1="130" x2="599" y2="120" stroke="#0b0707" stroke-width="1.4"/>
    <circle cx="599" cy="119" r="1.2" fill="#ef2b20"/>
  </g>
</g>

<!-- ==================== SLENDER & AUTHENTIC ELIZABETH TOWER / BIG BEN (x: 676 to 724) ==================== -->
<g id="bigBen">
  <!-- Slender Gothic Tower Shaft (width: 38px from x: 681 to 719) -->
  <path d="M681 270 V138 H719 V270 Z" fill="#0b0707"/>
  
  <!-- Slender Vertical Buttress Pilasters -->
  <line x1="684" y1="270" x2="684" y2="138" stroke="#5a0705" stroke-width="1.2"/>
  <line x1="716" y1="270" x2="716" y2="138" stroke="#5a0705" stroke-width="1.2"/>
  
  <!-- Tiered Lancet Windows on Shaft with Stratified Lighting Depth -->
  <!-- Top Shaft Tier (Active Bright Illumination) -->
  <g fill="#ef2b20" opacity="0.9">
    <path d="M692 148 V172 H696 V148 C696 144 694 142 694 142 C694 142 692 144 692 148 Z"/>
    <path d="M704 148 V172 H708 V148 C708 144 706 142 706 142 C706 142 704 144 704 148 Z"/>
  </g>
  <!-- Middle Shaft Tier (Warm Ambient Red) -->
  <g fill="#a3130d" opacity="0.85">
    <path d="M692 186 V210 H696 V186 C696 182 694 180 694 180 C694 180 692 182 692 186 Z"/>
    <path d="M704 186 V210 H708 V186 C708 182 706 180 706 180 C706 180 704 182 704 186 Z"/>
  </g>
  <!-- Lower Shaft Tier (Deep Ambient Ruby) -->
  <g fill="#5a0705" opacity="0.75">
    <path d="M692 224 V248 H696 V224 C696 220 694 218 694 218 C694 218 692 220 692 224 Z"/>
    <path d="M704 224 V248 H708 V224 C708 220 706 218 706 218 C706 218 704 220 704 224 Z"/>
  </g>

  <!-- Clock Storey with Delicate Corbelling (width: 48px from x: 676 to 724) -->
  <path d="M678 138 L676 134 V98 H724 V134 L722 138 Z" fill="#0b0707"/>
  <rect x="676" y="134" width="48" height="2" fill="#7c0906"/>
  <rect x="676" y="98" width="48" height="2" fill="#7c0906"/>

  <!-- Belfry Storey with Triple Gothic Louvres (width: 42px from x: 679 to 721) -->
  <rect x="679" y="66" width="42" height="32" fill="#0b0707"/>
  <!-- Triple Gothic Belfry Louvres with Tint Depth -->
  <g>
    <path d="M684 94 V74 C684 70 688 68 688 68 C688 68 692 70 692 74 V94 Z" fill="#8f0c08" opacity="0.8"/>
    <path d="M696 94 V72 C696 68 700 66 700 66 C700 66 704 68 704 72 V94 Z" fill="#ef2b20" opacity="0.95"/>
    <path d="M708 94 V74 C708 70 712 68 712 68 C712 68 716 70 716 74 V94 Z" fill="#8f0c08" opacity="0.8"/>
  </g>

  <!-- 4 Corner Spirelet Pinnacles on Belfry -->
  <path d="M676 98 V72 L679 50 L682 72 V98 Z" fill="#0b0707"/>
  <path d="M718 98 V72 L721 50 L724 72 V98 Z" fill="#0b0707"/>

  <!-- Soaring Steep Victorian Gothic Pyramid Spire (from y: 66 up to y: 12) -->
  <path d="M679 66 L700 12 L721 66 Z" fill="#0b0707"/>
  <!-- Spire Gable Dormers -->
  <path d="M693 66 L700 48 L707 66 Z" fill="#5a0705"/>
  <path d="M696 46 L700 32 L704 46 Z" fill="#5a0705"/>
  
  <!-- Spire Lantern Spirelet & Golden Sphere Finial -->
  <line x1="700" y1="12" x2="700" y2="2" stroke="#0b0707" stroke-width="2"/>
  <circle cx="700" cy="2" r="1.8" fill="#ef2b20"/>

  <!-- AUTHENTIC CLOCK FACE (Centered precisely at cx: 700, cy: 117, r: 16) -->
  <!-- Outer Bezel Ring -->
  <circle cx="700" cy="117" r="16.5" fill="#0b0707" stroke="#ef2b20" stroke-width="1.2"/>
  <!-- Glowing Dial Face with Multi-Layer Radial Luminous Depth -->
  <circle cx="700" cy="117" r="14.2" fill="#ef2b20"/>
  <circle cx="700" cy="117" r="13.5" fill="#0b0707" opacity="0.12"/>
  
  <!-- 12-Hour Roman Numeral Dial Ticks (radius ~ 11px to 13.5px) -->
  <g stroke="#0b0707" stroke-width="1.3" stroke-linecap="round">
    <line x1="700" y1="103.5" x2="700" y2="106"/> <!-- 12 -->
    <line x1="706.8" y1="105.3" x2="705.5" y2="107.5"/> <!-- 1 -->
    <line x1="711.7" y1="110.2" x2="709.5" y2="111.5"/> <!-- 2 -->
    <line x1="713.5" y1="117" x2="711" y2="117"/> <!-- 3 -->
    <line x1="711.7" y1="123.8" x2="709.5" y2="122.5"/> <!-- 4 -->
    <line x1="706.8" y1="128.7" x2="705.5" y2="126.5"/> <!-- 5 -->
    <line x1="700" y1="130.5" x2="700" y2="128"/> <!-- 6 -->
    <line x1="693.2" y1="128.7" x2="694.5" y2="126.5"/> <!-- 7 -->
    <line x1="688.3" y1="123.8" x2="690.5" y2="122.5"/> <!-- 8 -->
    <line x1="686.5" y1="117" x2="689" y2="117"/> <!-- 9 -->
    <line x1="688.3" y1="110.2" x2="690.5" y2="111.5"/> <!-- 10 -->
    <line x1="693.2" y1="105.3" x2="694.5" y2="107.5"/> <!-- 11 -->
  </g>
  <circle cx="700" cy="117" r="10.8" fill="none" stroke="#0b0707" stroke-width="0.7" opacity="0.6"/>

  <!-- MOVING SLENDER CLOCK HANDS (Pivot at 700, 117) -->
  <!-- Hour Hand -->
  <g class="clock-hand-hour">
    <path d="M700 117 L699.2 118 L699.2 110 L698 108.5 L700 105 L702 108.5 L700.8 110 L700.8 117 Z" fill="#0b0707"/>
  </g>
  <!-- Minute Hand -->
  <g class="clock-hand-minute">
    <path d="M700 119 L699.2 117 L699.4 104 L700 102 L700.6 104 L700.8 117 Z" fill="#0b0707"/>
    <line x1="700" y1="117" x2="700" y2="103" stroke="#0b0707" stroke-width="1.6" stroke-linecap="round"/>
  </g>
  <!-- Center Pin Cap -->
  <circle cx="700" cy="117" r="1.8" fill="#ef2b20"/>
  <circle cx="700" cy="117" r="0.8" fill="#0b0707"/>
</g>

<!-- ==================== COUNTY HALL & SOUTH BANK EMBANKMENT (x: 742 to 874) ==================== -->
<g id="countyHall">
  <!-- Main Edwardian Classical Masonry Body -->
  <path d="M744 270 V206 H872 V270 Z" fill="#0b0707"/>
  
  <!-- Curved South Bank Crescent Colonnade Inset with Warm Interior Illumination -->
  <path d="M784 270 V216 Q808 224 832 216 V270 Z" fill="url(#cathedralGlow)"/>
  <g stroke="#0b0707" stroke-width="2.2">
    <line x1="788" y1="218" x2="788" y2="258"/>
    <line x1="796" y1="220" x2="796" y2="258"/>
    <line x1="804" y1="222" x2="804" y2="258"/>
    <line x1="812" y1="222" x2="812" y2="258"/>
    <line x1="820" y1="220" x2="820" y2="258"/>
    <line x1="828" y1="218" x2="828" y2="258"/>
  </g>

  <!-- Classical Balustrade & Cornice -->
  <rect x="742" y="204" width="132" height="3" fill="#7c0906"/>
  <rect x="742" y="234" width="132" height="2" fill="#5a0705"/>

  <!-- Steep Red-Tile Mansard Roof Pitch -->
  <path d="M742 204 L754 184 H862 L874 204 Z" fill="#0b0707"/>
  <path d="M754 184 H862" stroke="#5a0705" stroke-width="1.4"/>

  <!-- Central Pavilion Belvedere & Baroque Lantern Tower -->
  <path d="M800 184 V168 H816 V184 Z" fill="#0b0707"/>
  <path d="M798 168 L808 152 L818 168 Z" fill="#0b0707"/>
  <line x1="808" y1="152" x2="808" y2="140" stroke="#0b0707" stroke-width="1.8"/>
  <circle cx="808" cy="139" r="1.5" fill="#ef2b20"/>
  <rect x="804" y="172" width="8" height="8" rx="1" fill="#ef2b20" opacity="0.9"/>

  <!-- Roof Pediment Dormers with Inset Lighting -->
  <!-- Left Dormer 1 -->
  <path d="M758 204 L764 188 L770 204 Z" fill="#0b0707"/>
  <path d="M761 198 V192 H767 V198 Z" fill="#ef2b20" opacity="0.85"/>
  <!-- Left Dormer 2 -->
  <path d="M774 204 L780 188 L786 204 Z" fill="#0b0707"/>
  <path d="M777 198 V192 H783 V198 Z" fill="#7c0906"/>
  <!-- Right Dormer 1 -->
  <path d="M830 204 L836 188 L842 204 Z" fill="#0b0707"/>
  <path d="M833 198 V192 H839 V198 Z" fill="#ef2b20" opacity="0.85"/>
  <!-- Right Dormer 2 -->
  <path d="M846 204 L852 188 L858 204 Z" fill="#0b0707"/>
  <path d="M849 198 V192 H855 V198 Z" fill="#7c0906"/>

  <!-- Wing Windows with Varied Lighting Tints -->
  <!-- Active Lit Offices (fill="#ef2b20" opacity="0.88") -->
  <g fill="#ef2b20" opacity="0.88">
    <rect x="756" y="210" width="5" height="8" rx="0.5"/>
    <rect x="772" y="210" width="5" height="8" rx="0.5"/>
    <rect x="748" y="222" width="5" height="8" rx="0.5"/>
    <rect x="764" y="240" width="5" height="10" rx="0.5"/>
    
    <rect x="838" y="210" width="5" height="8" rx="0.5"/>
    <rect x="854" y="210" width="5" height="8" rx="0.5"/>
    <rect x="846" y="222" width="5" height="8" rx="0.5"/>
    <rect x="862" y="240" width="5" height="10" rx="0.5"/>
  </g>

  <!-- Warm Ambient Offices (fill="#a3130d" opacity="0.8") -->
  <g fill="#a3130d" opacity="0.8">
    <rect x="748" y="210" width="5" height="8" rx="0.5"/>
    <rect x="764" y="222" width="5" height="8" rx="0.5"/>
    <rect x="756" y="240" width="5" height="10" rx="0.5"/>
    
    <rect x="846" y="210" width="5" height="8" rx="0.5"/>
    <rect x="862" y="222" width="5" height="8" rx="0.5"/>
    <rect x="838" y="240" width="5" height="10" rx="0.5"/>
    <rect x="854" y="240" width="5" height="10" rx="0.5"/>
  </g>

  <!-- Dimmed Night Rooms (fill="#4a0604" opacity="0.65") -->
  <g fill="#4a0604" opacity="0.65">
    <rect x="764" y="210" width="5" height="8" rx="0.5"/>
    <rect x="756" y="222" width="5" height="8" rx="0.5"/>
    <rect x="772" y="222" width="5" height="8" rx="0.5"/>
    <rect x="748" y="240" width="5" height="10" rx="0.5"/>
    <rect x="772" y="240" width="5" height="10" rx="0.5"/>

    <rect x="862" y="210" width="5" height="8" rx="0.5"/>
    <rect x="838" y="222" width="5" height="8" rx="0.5"/>
    <rect x="854" y="222" width="5" height="8" rx="0.5"/>
    <rect x="846" y="240" width="5" height="10" rx="0.5"/>
  </g>
</g>

<!-- ==================== LONDON EYE / FERRIS WHEEL (x: 880 to 1100, Center: 990, 155) ==================== -->
<g id="londonEye">
  <!-- Static A-Frame Support Pier Legs & Boarding Dock -->
  <g id="eyeSupports">
    <!-- Boarding Pavilion on Thames -->
    <path d="M920 270 V252 H1060 V270 Z" fill="#0b0707"/>
    <rect x="930" y="256" width="120" height="4" fill="#7c0906"/>
    
    <!-- Massive Triangular A-Frame Support Legs reaching Hub (990, 155) -->
    <path d="M944 266 L990 155 L954 266 Z" fill="#0b0707"/>
    <path d="M1036 266 L990 155 L1026 266 Z" fill="#0b0707"/>
    <line x1="949" y1="266" x2="990" y2="155" stroke="#5a0705" stroke-width="2"/>
    <line x1="1031" y1="266" x2="990" y2="155" stroke="#5a0705" stroke-width="2"/>
    
    <!-- Backstay Tension Rigging -->
    <line x1="990" y1="155" x2="890" y2="266" stroke="#0b0707" stroke-width="2.5"/>
    <line x1="990" y1="155" x2="894" y2="266" stroke="#ef2b20" stroke-width="0.8" opacity="0.5"/>
  </g>

  <!-- SLOWLY SPINNING WHEEL ASSEMBLY (Rotates at slow 100s speed around 990, 155) -->
  <g class="ferris-wheel-spin">
    <!-- Double Concentric Outer Rim Truss -->
    <circle cx="990" cy="155" r="106" fill="none" stroke="#0b0707" stroke-width="4"/>
    <circle cx="990" cy="155" r="98" fill="none" stroke="#0b0707" stroke-width="2.5"/>
    <circle cx="990" cy="155" r="102" fill="none" stroke="#ef2b20" stroke-width="1.2" opacity="0.6"/>

    <!-- 24 Radial Spoke Cables -->
    <g stroke="#0b0707" stroke-width="1.2" opacity="0.9">
      <line x1="990" y1="155" x2="990" y2="49"/>
      <line x1="990" y1="155" x2="1017.4" y2="52.6"/>
      <line x1="990" y1="155" x2="1043" y2="63.2"/>
      <line x1="990" y1="155" x2="1065" y2="80"/>
      <line x1="990" y1="155" x2="1081.8" y2="102"/>
      <line x1="990" y1="155" x2="1092.4" y2="127.6"/>
      <line x1="990" y1="155" x2="1096" y2="155"/>
      <line x1="990" y1="155" x2="1092.4" y2="182.4"/>
      <line x1="990" y1="155" x2="1081.8" y2="208"/>
      <line x1="990" y1="155" x2="1065" y2="230"/>
      <line x1="990" y1="155" x2="1043" y2="246.8"/>
      <line x1="990" y1="155" x2="1017.4" y2="257.4"/>
      <line x1="990" y1="155" x2="990" y2="261"/>
      <line x1="990" y1="155" x2="962.6" y2="257.4"/>
      <line x1="990" y1="155" x2="937" y2="246.8"/>
      <line x1="990" y1="155" x2="915" y2="230"/>
      <line x1="990" y1="155" x2="898.2" y2="208"/>
      <line x1="990" y1="155" x2="887.6" y2="182.4"/>
      <line x1="990" y1="155" x2="884" y2="155"/>
      <line x1="990" y1="155" x2="887.6" y2="127.6"/>
      <line x1="990" y1="155" x2="898.2" y2="102"/>
      <line x1="990" y1="155" x2="915" y2="80"/>
      <line x1="990" y1="155" x2="937" y2="63.2"/>
      <line x1="990" y1="155" x2="962.6" y2="52.6"/>
    </g>

    <!-- 24 Passenger Capsules / Pods with Counter-Rotation to stay LEVEL & UPRIGHT -->
    <g fill="#0b0707" stroke="#ef2b20" stroke-width="0.9">
      <g class="ferris-pod" style="transform-origin: 990px 49px;"><ellipse cx="990" cy="49" rx="5.5" ry="3.8"/><circle cx="990" cy="49" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 1017.4px 52.6px;"><ellipse cx="1017.4" cy="52.6" rx="5.5" ry="3.8"/><circle cx="1017.4" cy="52.6" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 1043px 63.2px;"><ellipse cx="1043" cy="63.2" rx="5.5" ry="3.8"/><circle cx="1043" cy="63.2" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 1065px 80px;"><ellipse cx="1065" cy="80" rx="5.5" ry="3.8"/><circle cx="1065" cy="80" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 1081.8px 102px;"><ellipse cx="1081.8" cy="102" rx="5.5" ry="3.8"/><circle cx="1081.8" cy="102" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 1092.4px 127.6px;"><ellipse cx="1092.4" cy="127.6" rx="5.5" ry="3.8"/><circle cx="1092.4" cy="127.6" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 1096px 155px;"><ellipse cx="1096" cy="155" rx="5.5" ry="3.8"/><circle cx="1096" cy="155" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 1092.4px 182.4px;"><ellipse cx="1092.4" cy="182.4" rx="5.5" ry="3.8"/><circle cx="1092.4" cy="182.4" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 1081.8px 208px;"><ellipse cx="1081.8" cy="208" rx="5.5" ry="3.8"/><circle cx="1081.8" cy="208" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 1065px 230px;"><ellipse cx="1065" cy="230" rx="5.5" ry="3.8"/><circle cx="1065" cy="230" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 1043px 246.8px;"><ellipse cx="1043" cy="246.8" rx="5.5" ry="3.8"/><circle cx="1043" cy="246.8" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 1017.4px 257.4px;"><ellipse cx="1017.4" cy="257.4" rx="5.5" ry="3.8"/><circle cx="1017.4" cy="257.4" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 990px 261px;"><ellipse cx="990" cy="261" rx="5.5" ry="3.8"/><circle cx="990" cy="261" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 962.6px 257.4px;"><ellipse cx="962.6" cy="257.4" rx="5.5" ry="3.8"/><circle cx="962.6" cy="257.4" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 937px 246.8px;"><ellipse cx="937" cy="246.8" rx="5.5" ry="3.8"/><circle cx="937" cy="246.8" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 915px 230px;"><ellipse cx="915" cy="230" rx="5.5" ry="3.8"/><circle cx="915" cy="230" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 898.2px 208px;"><ellipse cx="898.2" cy="208" rx="5.5" ry="3.8"/><circle cx="898.2" cy="208" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 887.6px 182.4px;"><ellipse cx="887.6" cy="182.4" rx="5.5" ry="3.8"/><circle cx="887.6" cy="182.4" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 884px 155px;"><ellipse cx="884" cy="155" rx="5.5" ry="3.8"/><circle cx="884" cy="155" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 887.6px 127.6px;"><ellipse cx="887.6" cy="127.6" rx="5.5" ry="3.8"/><circle cx="887.6" cy="127.6" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 898.2px 102px;"><ellipse cx="898.2" cy="102" rx="5.5" ry="3.8"/><circle cx="898.2" cy="102" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 915px 80px;"><ellipse cx="915" cy="80" rx="5.5" ry="3.8"/><circle cx="915" cy="80" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 937px 63.2px;"><ellipse cx="937" cy="63.2" rx="5.5" ry="3.8"/><circle cx="937" cy="63.2" r="1.5" fill="#ef2b20"/></g>
      <g class="ferris-pod" style="transform-origin: 962.6px 52.6px;"><ellipse cx="962.6" cy="52.6" rx="5.5" ry="3.8"/><circle cx="962.6" cy="52.6" r="1.5" fill="#ef2b20"/></g>
    </g>

    <!-- Inner Hub Spindle Core -->
    <circle cx="990" cy="155" r="12" fill="#0b0707" stroke="#ef2b20" stroke-width="1.5"/>
    <circle cx="990" cy="155" r="6" fill="#ef2b20"/>
  </g>
</g>

<!-- ==================== MODERN CITY LANDMARKS (Walkie-Talkie & Leadenhall) ==================== -->
<g id="cityModern">
  <!-- 20 Fenchurch Street ("Walkie-Talkie" with distinctive upward concave flare & curved Sky Garden) -->
  <path d="M1120 270 
    C1124 230 1120 190 1114 150 
    C1114 140 1126 136 1148 136 
    C1170 136 1182 140 1182 150 
    C1176 190 1172 230 1176 270 Z" fill="#0b0707"/>
  <!-- Sky Garden & Floor Plates with Depth Office Lighting -->
  <g clip-path="url(#walkieClip)">
    <!-- Sky Garden Glowing Upper Atrium -->
    <path d="M1114 144 Q1148 134 1182 144 V160 Q1148 150 1114 160 Z" fill="url(#skyGardenGlow)"/>
    <path d="M1114 148 Q1148 138 1182 148" fill="none" stroke="#ef2b20" stroke-width="1.6"/>
    <path d="M1116 156 Q1148 146 1180 156" fill="none" stroke="#7c0906" stroke-width="1.2"/>
    <!-- Office Floor Plates with Varied Tiered Illumination -->
    <rect x="1120" y="164" width="56" height="106" fill="url(#win-grid-dense)"/>
    <!-- Distinct Horizontal Floor Slabs -->
    <g stroke="#0b0707" stroke-width="1.8">
      <line x1="1114" y1="182" x2="1182" y2="182"/>
      <line x1="1116" y1="200" x2="1180" y2="200"/>
      <line x1="1118" y1="218" x2="1178" y2="218"/>
      <line x1="1120" y1="236" x2="1176" y2="236"/>
      <line x1="1120" y1="254" x2="1176" y2="254"/>
    </g>
  </g>

  <!-- The Leadenhall Building ("Cheesegrater" - wedge profile with diagrid office lighting) -->
  <path d="M1188 270 L1188 128 L1220 270 Z" fill="#0b0707"/>
  <line x1="1188" y1="128" x2="1220" y2="270" stroke="#7c0906" stroke-width="2"/>
  <g stroke="#ef2b20" stroke-width="1" opacity="0.65">
    <line x1="1188" y1="150" x2="1195" y2="180"/>
    <line x1="1188" y1="180" x2="1205" y2="220"/>
    <line x1="1188" y1="210" x2="1215" y2="250"/>
  </g>
</g>

<!-- ==================== ST PAUL'S CATHEDRAL (x: 1220 to 1420, Center: 1320) ==================== -->
<g id="stPauls">
  <!-- Solid Nave Base & Two-Tier Facade with Stained Glass & Candlelight Depth -->
  <rect x="1226" y="214" width="188" height="56" fill="#0b0707"/>
  <rect x="1232" y="218" width="176" height="48" fill="url(#win-grid-dense)"/>

  <!-- Upper Nave Wall & Crossing Drum Base (Completely solid, zero floating gap) -->
  <rect x="1254" y="188" width="132" height="28" fill="#0b0707"/>
  <rect x="1272" y="186" width="96" height="30" fill="#0b0707"/>

  <!-- West Front Dual Baroque Bell Towers (North & South) with Glowing Lanterns -->
  <!-- Left West Tower -->
  <path d="M1230 214 V166 H1256 V214 Z" fill="#0b0707"/>
  <rect x="1236" y="172" width="14" height="26" rx="2" fill="url(#cathedralGlow)"/>
  <path d="M1228 166 L1243 138 L1258 166 Z" fill="#0b0707"/>
  <line x1="1243" y1="138" x2="1243" y2="124" stroke="#0b0707" stroke-width="2"/>
  <circle cx="1243" cy="123" r="1.8" fill="#ef2b20"/>
  
  <!-- Right West Tower -->
  <path d="M1384 214 V166 H1410 V214 Z" fill="#0b0707"/>
  <rect x="1390" y="172" width="14" height="26" rx="2" fill="url(#cathedralGlow)"/>
  <path d="M1382 166 L1397 138 L1412 166 Z" fill="#0b0707"/>
  <line x1="1397" y1="138" x2="1397" y2="124" stroke="#0b0707" stroke-width="2"/>
  <circle cx="1397" cy="123" r="1.8" fill="#ef2b20"/>

  <!-- Classical Upper West Portico & Triangular Pediment -->
  <path d="M1280 214 L1320 188 L1360 214 Z" fill="#0b0707"/>
  <path d="M1284 214 L1320 190 L1356 214" stroke="#7c0906" stroke-width="1.5" fill="none"/>
  <!-- Classical Portico Columns under Pediment -->
  <g stroke="#7c0906" stroke-width="1.8">
    <line x1="1288" y1="214" x2="1288" y2="202"/>
    <line x1="1298" y1="214" x2="1298" y2="197"/>
    <line x1="1308" y1="214" x2="1308" y2="192"/>
    <line x1="1332" y1="214" x2="1332" y2="192"/>
    <line x1="1342" y1="214" x2="1342" y2="197"/>
    <line x1="1352" y1="214" x2="1352" y2="202"/>
  </g>

  <!-- GRAND CENTRAL DOME -->
  <!-- Peristyle Colonnade Drum with Radiant Internal Cathedral Backlight -->
  <rect x="1278" y="162" width="84" height="26" fill="url(#cathedralGlow)"/>
  <!-- Classical Stone Columns In Front -->
  <g stroke="#0b0707" stroke-width="2.6">
    <line x1="1284" y1="162" x2="1284" y2="188"/>
    <line x1="1293" y1="162" x2="1293" y2="188"/>
    <line x1="1302" y1="162" x2="1302" y2="188"/>
    <line x1="1311" y1="162" x2="1311" y2="188"/>
    <line x1="1329" y1="162" x2="1329" y2="188"/>
    <line x1="1338" y1="162" x2="1338" y2="188"/>
    <line x1="1347" y1="162" x2="1347" y2="188"/>
    <line x1="1356" y1="162" x2="1356" y2="188"/>
  </g>
  <!-- Attic Drum Ring & Whispering Gallery Plinth -->
  <rect x="1284" y="148" width="72" height="14" fill="#0b0707"/>
  <rect x="1286" y="152" width="68" height="3" fill="#7c0906"/>

  <!-- Main Smooth Hemispherical Outer Dome -->
  <path d="M1288 148 C1288 92 1302 68 1320 68 C1338 68 1352 92 1352 148 Z" fill="#0b0707"/>
  <!-- Dome Rib Highlights -->
  <path d="M1320 68 V148" stroke="#5a0705" stroke-width="2"/>
  <path d="M1320 68 Q1305 106 1300 148" stroke="#5a0705" stroke-width="1.2"/>
  <path d="M1320 68 Q1335 106 1340 148" stroke="#5a0705" stroke-width="1.2"/>

  <!-- Stone Lantern Tower atop Dome with Glowing Cross -->
  <rect x="1312" y="48" width="16" height="20" fill="#0b0707"/>
  <rect x="1316" y="52" width="8" height="10" fill="#ef2b20" opacity="0.85"/>
  <path d="M1310 48 L1320 34 L1330 48 Z" fill="#0b0707"/>
  <!-- Golden Ball and Cross -->
  <circle cx="1320" cy="31" r="3.2" fill="#ef2b20"/>
  <line x1="1320" y1="28" x2="1320" y2="14" stroke="#0b0707" stroke-width="2.5"/>
  <line x1="1314" y1="20" x2="1326" y2="20" stroke="#0b0707" stroke-width="2.5"/>
</g>

<!-- ==================== THE SHARD, THE GHERKIN & EAST CITY (x: 1430 to 1600) ==================== -->
<g id="eastCity">
  <!-- THE SHARD (x: 1445 to 1505, Soaring 309m glass pyramid) -->
  <path d="M1446 270 L1476 6 L1506 270 Z" fill="#0b0707"/>
  
  <!-- Shard Facets, Fissures & Floor Bands strictly clipped to Shard outline -->
  <g clip-path="url(#shardClip)">
    <path d="M1476 6 L1464 270" stroke="#7c0906" stroke-width="1.6"/>
    <path d="M1476 6 L1488 270" stroke="#5a0705" stroke-width="1.6"/>
    <!-- Stratified Floor Bands with Varying Illumination Height -->
    <path d="M1456 220 H1496" stroke="#4a0604" stroke-width="1.4" opacity="0.8"/>
    <path d="M1462 170 H1490" stroke="#a3130d" stroke-width="1.4" opacity="0.85"/>
    <path d="M1468 120 H1484" stroke="#ef2b20" stroke-width="1.4" opacity="0.9"/>
    <path d="M1472 70 H1480" stroke="#ef2b20" stroke-width="1.4" opacity="0.95"/>
    <!-- Diagonal Spire Fissures -->
    <line x1="1476" y1="6" x2="1472" y2="80" stroke="#ef2b20" stroke-width="0.8" opacity="0.7"/>
  </g>
  
  <!-- Open Jagged Shards at the Pinnacle -->
  <path d="M1472 16 L1476 6 L1480 18" stroke="#ef2b20" stroke-width="1.2" fill="none"/>
  <!-- Red Aviation Warning Beacon Light on Shard Top -->
  <circle cx="1476" cy="6" r="2.2" fill="#ef2b20"/>

  <!-- 30 ST MARY AXE ("THE GHERKIN" - Curved aerodynamic bullet shape) -->
  <path d="M1520 270 
    C1510 220 1512 160 1532 94 
    C1536 82 1544 82 1548 94 
    C1568 160 1570 220 1560 270 Z" fill="#0b0707"/>
  
  <!-- Iconic Curved Spiral Diagrid Panels with Alternating Office Illumination Depth -->
  <g clip-path="url(#gherkinClip)">
    <!-- Spiral Diagrid Ribs -->
    <g stroke="#7c0906" stroke-width="1.5" opacity="0.85">
      <path d="M1500 240 Q1540 210 1580 180"/>
      <path d="M1500 200 Q1540 170 1580 140"/>
      <path d="M1500 160 Q1540 130 1580 100"/>
      <path d="M1500 120 Q1540 90 1580 60"/>
      <path d="M1580 240 Q1540 210 1500 180"/>
      <path d="M1580 200 Q1540 170 1500 140"/>
      <path d="M1580 160 Q1540 130 1500 100"/>
      <path d="M1580 120 Q1540 90 1500 60"/>
    </g>
    <!-- Glowing Spiral Atrium Spine -->
    <path d="M1544 260 Q1536 175 1544 95" stroke="#ef2b20" stroke-width="2" opacity="0.45" fill="none"/>
  </g>

  <!-- Top Cap Finial -->
  <circle cx="1540" cy="88" r="4.2" fill="#0b0707" stroke="#ef2b20" stroke-width="1"/>

  <!-- Far Right Canary Wharf / City Towers with Depth Windows -->
  <path d="M1572 270 V184 H1600 V270 Z" fill="#0b0707"/>
  <rect x="1574" y="188" width="24" height="78" fill="url(#win-grid-dense)"/>
  <line x1="1586" y1="184" x2="1586" y2="162" stroke="#0b0707" stroke-width="2"/>
  <circle cx="1586" cy="161" r="1.5" fill="#ef2b20"/>
</g>

<!-- ==================== VICTORIAN EMBANKMENT PROMENADE & THAMES ==================== -->
<!-- Embankment Stone Wall & Parapet -->
<rect x="0" y="266" width="1600" height="34" fill="#0b0707"/>
<line x1="0" y1="268" x2="1600" y2="268" stroke="#7c0906" stroke-width="2"/>
<line x1="0" y1="272" x2="1600" y2="272" stroke="#0b0707" stroke-width="2"/>

<!-- Thames Flowing Water Surface with Red Ambient Wave Light -->
<rect x="0" y="274" width="1600" height="26" fill="url(#river-wave)"/>

<!-- Victorian Street Lamps (Evenly stationed along the embankment) -->
<use href="#vicLamp" x="428"/>
<use href="#vicLamp" x="656"/>
<use href="#vicLamp" x="876"/>
<use href="#vicLamp" x="1108"/>
<use href="#vicLamp" x="1218"/>
<use href="#vicLamp" x="1436"/>

<!-- Red K6 Telephone Kiosk (Iconic London phone box) -->
<g transform="translate(1096, 236)">
  <!-- Main Red Body -->
  <rect x="0" y="8" width="18" height="26" fill="#d3130e"/>
  <!-- Domed Crown Roof with Tudor Crest -->
  <path d="M-1 9 Q9 -2 19 9 Z" fill="#d3130e"/>
  <circle cx="9" cy="4" r="1.2" fill="#fff"/>
  <!-- Phone Box Window Grids -->
  <g fill="#0b0707">
    <rect x="2.5" y="11" width="5" height="4" rx="0.5"/>
    <rect x="10.5" y="11" width="5" height="4" rx="0.5"/>
    <rect x="2.5" y="17" width="5" height="4" rx="0.5"/>
    <rect x="10.5" y="17" width="5" height="4" rx="0.5"/>
    <rect x="2.5" y="23" width="5" height="4" rx="0.5"/>
    <rect x="10.5" y="23" width="5" height="4" rx="0.5"/>
  </g>
</g>

<!-- Animated Red Double-Decker Routemaster Bus (Grounded firmly on Embankment Road) -->
<g class="bus">
  <!-- Main Red Double-Decker Chassis Body (Authentic AEC Routemaster Half-Cab Shape) -->
  <!-- Lower Deck & Front Engine Bonnet Body (y: 253 to 264) -->
  <path d="M0 264 V253 H52 V257 Q54 257 54 261 V264 Z" fill="#d3130e"/>
  <!-- Upper Deck Overhang Body (y: 242 to 253) -->
  <path d="M0 253 V244 C0 242.5 1.5 242 3 242 H49 C51 242 52 243 52 245 V253 Z" fill="#d3130e"/>
  <!-- Upper Front Brow Curved Peak -->
  <path d="M48 242 H52 V246 Q52 242 48 242 Z" fill="#b00f0a"/>

  <!-- Inter-Deck Waistline Band -->
  <rect x="0" y="253" width="53" height="2" fill="#7c0906"/>
  <!-- Crimson Accent Pin Stripe -->
  <line x1="0" y1="254" x2="53" y2="254" stroke="#a3130d" stroke-width="0.6" opacity="0.9"/>

  <!-- Front Radiator Grille & Bumper -->
  <rect x="52" y="258" width="2" height="6" fill="#0b0707"/>
  <line x1="52" y1="259" x2="52" y2="263" stroke="#5a0705" stroke-width="0.8"/>
  <!-- Front Headlight Lamp (Clean fixture without beam projection) -->
  <circle cx="53" cy="261.5" r="1.4" fill="#ef2b20"/>
  <circle cx="53" cy="261.5" r="0.7" fill="#fff"/>

  <!-- Front Destination Blind (Authentic white-on-black route roll) -->
  <rect x="42" y="243.5" width="9.5" height="4" rx="0.5" fill="#0b0707"/>
  <rect x="43" y="244.5" width="7.5" height="1" fill="#ffffff" opacity="0.95"/>
  <rect x="43" y="246" width="5.5" height="0.8" fill="#ffffff" opacity="0.75"/>

  <!-- Upper Deck Windows with Multi-Tier Passenger Lighting Depth -->
  <g fill="#0b0707">
    <rect x="3" y="244.5" width="6.5" height="6.5" rx="1"/>
    <rect x="11.5" y="244.5" width="6.5" height="6.5" rx="1"/>
    <rect x="20" y="244.5" width="6.5" height="6.5" rx="1"/>
    <rect x="28.5" y="244.5" width="6.5" height="6.5" rx="1"/>
    <rect x="37" y="244.5" width="6.5" height="6.5" rx="1"/>
  </g>
  <!-- Interior Warm Lit Passenger Windows -->
  <g fill="#ef2b20" opacity="0.8">
    <rect x="4" y="245.5" width="4.5" height="4.5" rx="0.6"/>
    <rect x="21" y="245.5" width="4.5" height="4.5" rx="0.6"/>
    <rect x="38" y="245.5" width="4.5" height="4.5" rx="0.6"/>
  </g>
  <g fill="#a3130d" opacity="0.75">
    <rect x="12.5" y="245.5" width="4.5" height="4.5" rx="0.6"/>
    <rect x="29.5" y="245.5" width="4.5" height="4.5" rx="0.6"/>
  </g>

  <!-- Lower Deck Windows & Driver's Cab -->
  <!-- Open Rear Hop-On Hop-Off Entrance (At the Back, Left side) -->
  <rect x="0" y="255" width="7" height="9" fill="#0b0707"/>
  <rect x="1" y="256" width="5" height="8" fill="#5a0705"/>
  <!-- Vertical Handrail Pole -->
  <line x1="4.5" y1="255" x2="4.5" y2="264" stroke="#d3130e" stroke-width="0.9"/>

  <!-- Lower Deck Passenger Windows -->
  <g fill="#0b0707">
    <rect x="9" y="256" width="6.5" height="6.5" rx="1"/>
    <rect x="17.5" y="256" width="6.5" height="6.5" rx="1"/>
    <rect x="26" y="256" width="6.5" height="6.5" rx="1"/>
    <rect x="34.5" y="256" width="6.5" height="6.5" rx="1"/>
    <!-- Front Driver Windscreen -->
    <polygon points="43,256 48,256 48,262 43,262" fill="#0b0707"/>
  </g>
  <!-- Lower Deck Interior Warm Lights -->
  <g fill="#ef2b20" opacity="0.82">
    <rect x="10" y="257" width="4.5" height="4.5" rx="0.6"/>
    <rect x="27" y="257" width="4.5" height="4.5" rx="0.6"/>
    <polygon points="44,257 47,257 47,261 44,261" fill="#ef2b20" opacity="0.9"/>
  </g>
  <g fill="#a3130d" opacity="0.75">
    <rect x="18.5" y="257" width="4.5" height="4.5" rx="0.6"/>
    <rect x="35.5" y="257" width="4.5" height="4.5" rx="0.6"/>
  </g>

  <!-- Wheel Arches / Mudguards -->
  <path d="M6.5 264 A 5.5 5.5 0 0 1 17.5 264 Z" fill="#0b0707"/>
  <path d="M34.5 264 A 5.5 5.5 0 0 1 45.5 264 Z" fill="#0b0707"/>

  <!-- ROTATING ROAD WHEELS (Firmly resting on the Embankment road, spinning smoothly) -->
  <!-- Rear Wheel (Centered at cx: 12, cy: 264.5) -->
  <g class="bus-wheel" style="transform-origin: 12px 264.5px;">
    <!-- Black Rubber Tire -->
    <circle cx="12" cy="264.5" r="4.5" fill="#0b0707"/>
    <!-- Red Wheel Rim -->
    <circle cx="12" cy="264.5" r="3.2" fill="#d3130e"/>
    <!-- Wheel Spokes / Lug Bolts (Visibly Rotate) -->
    <line x1="9" y1="264.5" x2="15" y2="264.5" stroke="#0b0707" stroke-width="1.2"/>
    <line x1="12" y1="261.5" x2="12" y2="267.5" stroke="#0b0707" stroke-width="1.2"/>
    <line x1="9.8" y1="262.3" x2="14.2" y2="266.7" stroke="#ef2b20" stroke-width="0.9"/>
    <line x1="14.2" y1="262.3" x2="9.8" y2="266.7" stroke="#ef2b20" stroke-width="0.9"/>
    <!-- Chrome Center Hubcap -->
    <circle cx="12" cy="264.5" r="1.2" fill="#0b0707"/>
    <circle cx="12" cy="264.5" r="0.6" fill="#ef2b20"/>
  </g>

  <!-- Front Wheel (Centered at cx: 40, cy: 264.5) -->
  <g class="bus-wheel" style="transform-origin: 40px 264.5px;">
    <!-- Black Rubber Tire -->
    <circle cx="40" cy="264.5" r="4.5" fill="#0b0707"/>
    <!-- Red Wheel Rim -->
    <circle cx="40" cy="264.5" r="3.2" fill="#d3130e"/>
    <!-- Wheel Spokes / Lug Bolts (Visibly Rotate) -->
    <line x1="37" y1="264.5" x2="43" y2="264.5" stroke="#0b0707" stroke-width="1.2"/>
    <line x1="40" y1="261.5" x2="40" y2="267.5" stroke="#0b0707" stroke-width="1.2"/>
    <line x1="37.8" y1="262.3" x2="42.2" y2="266.7" stroke="#ef2b20" stroke-width="0.9"/>
    <line x1="42.2" y1="262.3" x2="37.8" y2="266.7" stroke="#ef2b20" stroke-width="0.9"/>
    <!-- Chrome Center Hubcap -->
    <circle cx="40" cy="264.5" r="1.2" fill="#0b0707"/>
    <circle cx="40" cy="264.5" r="0.6" fill="#ef2b20"/>
  </g>
</g>

</svg>
`;
})((window.MI = window.MI || {}));
