// ============================================================
// KnowingPath.ai — Shared Design Tokens: Gradients
// Deep radial-gradient dark mode (SSV spec)
// ============================================================

export const gradients = {
  // ── Page Backgrounds ──────────────────────────────────────
  pageBackground: `
    radial-gradient(ellipse at 20% 50%, rgba(91,163,217,0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 20%, rgba(212,168,67,0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 100%, rgba(91,163,217,0.06) 0%, transparent 70%),
    linear-gradient(180deg, #050912 0%, #0A0F1E 40%, #0F1729 100%)
  `.trim(),

  heroBackground: `
    radial-gradient(ellipse at 30% 40%, rgba(91,163,217,0.15) 0%, transparent 55%),
    radial-gradient(ellipse at 70% 10%, rgba(212,168,67,0.08) 0%, transparent 45%),
    linear-gradient(160deg, #050912 0%, #0A0F1E 50%, #070B14 100%)
  `.trim(),

  sectionAlt: `
    radial-gradient(ellipse at 60% 50%, rgba(91,163,217,0.07) 0%, transparent 60%),
    linear-gradient(180deg, #0A0F1E 0%, #0C1322 100%)
  `.trim(),

  // ── Accent Gradients ──────────────────────────────────────
  accent:       'linear-gradient(135deg, #5BA3D9 0%, #3A7FAD 100%)',
  accentHover:  'linear-gradient(135deg, #82C0EE 0%, #5BA3D9 100%)',
  gold:         'linear-gradient(135deg, #D4A843 0%, #A87E28 100%)',
  goldHover:    'linear-gradient(135deg, #E8C56A 0%, #D4A843 100%)',
  ascension:    'linear-gradient(160deg, #5BA3D9 0%, #D4A843 100%)',

  // ── Text Gradients ────────────────────────────────────────
  headlineText:   'linear-gradient(135deg, #E2E8F0 0%, #B3D9F5 60%, #D4A843 100%)',
  accentText:     'linear-gradient(135deg, #82C0EE 0%, #5BA3D9 100%)',
  goldText:       'linear-gradient(135deg, #E8C56A 0%, #D4A843 100%)',

  // ── Card / Surface ────────────────────────────────────────
  cardSurface:    'linear-gradient(135deg, rgba(30,41,59,0.80) 0%, rgba(15,23,41,0.70) 100%)',
  cardBorder:     'linear-gradient(135deg, rgba(91,163,217,0.25) 0%, rgba(212,168,67,0.15) 100%)',

  // ── Divider ───────────────────────────────────────────────
  divider:        'linear-gradient(90deg, transparent 0%, rgba(91,163,217,0.40) 50%, transparent 100%)',
  dividerGold:    'linear-gradient(90deg, transparent 0%, rgba(212,168,67,0.35) 50%, transparent 100%)',

  // ── Button ────────────────────────────────────────────────
  button:         'linear-gradient(135deg, #5BA3D9 0%, #3A7FAD 100%)',
  buttonHover:    'linear-gradient(135deg, #82C0EE 0%, #5BA3D9 100%)',
  buttonSecondary:'linear-gradient(135deg, rgba(91,163,217,0.15) 0%, rgba(91,163,217,0.08) 100%)',
} as const;

export type Gradients = typeof gradients;
