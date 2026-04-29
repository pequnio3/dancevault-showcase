(function () {
  'use strict';

  // 1. Inject architecture diagram
  var mount = document.getElementById('stack-diagram-mount');
  if (mount) {
    mount.innerHTML = [
      '<svg viewBox="0 0 720 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="diagram-title">',
      '  <title id="diagram-title">Architecture: Flutter app syncs to Supabase via PowerSync, with R2/Coconut for video, Gemini for chat, Deepgram for speech.</title>',

      // Flutter client box
      '  <g class="diag-node diag-client">',
      '    <rect x="240" y="20"  width="240" height="64" rx="14" />',
      '    <text x="360" y="48"  text-anchor="middle">Flutter (iOS / Android)</text>',
      '    <text x="360" y="68"  text-anchor="middle" class="diag-sub">Riverpod · GoRouter</text>',
      '  </g>',

      // PowerSync
      '  <g class="diag-node diag-sync">',
      '    <rect x="280" y="130" width="160" height="56" rx="14" />',
      '    <text x="360" y="158" text-anchor="middle">PowerSync</text>',
      '    <text x="360" y="176" text-anchor="middle" class="diag-sub">offline-first sync</text>',
      '  </g>',

      // Supabase
      '  <g class="diag-node diag-supabase">',
      '    <rect x="240" y="232" width="240" height="64" rx="14" />',
      '    <text x="360" y="260" text-anchor="middle">Supabase (Postgres)</text>',
      '    <text x="360" y="280" text-anchor="middle" class="diag-sub">Auth · Edge Functions</text>',
      '  </g>',

      // R2 + Coconut
      '  <g class="diag-node diag-leaf">',
      '    <rect x="40"  y="362" width="180" height="64" rx="14" />',
      '    <text x="130" y="390" text-anchor="middle">R2 + Coconut</text>',
      '    <text x="130" y="410" text-anchor="middle" class="diag-sub">video storage + transcode</text>',
      '  </g>',

      // Gemini
      '  <g class="diag-node diag-leaf">',
      '    <rect x="270" y="362" width="180" height="64" rx="14" />',
      '    <text x="360" y="390" text-anchor="middle">Gemini</text>',
      '    <text x="360" y="410" text-anchor="middle" class="diag-sub">AI coach agent</text>',
      '  </g>',

      // Deepgram
      '  <g class="diag-node diag-leaf">',
      '    <rect x="500" y="362" width="180" height="64" rx="14" />',
      '    <text x="590" y="390" text-anchor="middle">Deepgram</text>',
      '    <text x="590" y="410" text-anchor="middle" class="diag-sub">streaming dictation</text>',
      '  </g>',

      // Connectors (vertical center lines + branches)
      '  <path class="diag-line" d="M 360 84 L 360 130" />',
      '  <path class="diag-line" d="M 360 186 L 360 232" />',
      '  <path class="diag-line" d="M 360 296 L 360 340 L 130 340 L 130 362" />',
      '  <path class="diag-line" d="M 360 340 L 360 362" />',
      '  <path class="diag-line" d="M 360 340 L 590 340 L 590 362" />',

      '</svg>'
    ].join('');
  }

  // 2. Fade-in on scroll
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('[data-reveal]').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('[data-reveal]').forEach(function (el) { el.classList.add('is-visible'); });
  }
})();
