// ============================================================
// KnowingPath.ai — Shared Design Tokens: Typography
// SSV brand rules: Inter (primary), JetBrains Mono (mono)
// ============================================================

export const typography = {
  // ── Font Families ─────────────────────────────────────────
  families: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    mono:    "'JetBrains Mono', 'Fira Code', monospace",
    // Elevated display — used for hero headlines
    display: "'Inter', sans-serif",
  },

  // ── Font Weights ──────────────────────────────────────────
  weights: {
    light:      300,
    regular:    400,
    medium:     500,
    semibold:   600,
    bold:       700,
    extrabold:  800,
  },

  // ── Font Sizes (rem) ──────────────────────────────────────
  sizes: {
    xs:   '0.75rem',   //  12px
    sm:   '0.875rem',  //  14px
    base: '1rem',      //  16px
    md:   '1.125rem',  //  18px
    lg:   '1.25rem',   //  20px
    xl:   '1.5rem',    //  24px
    '2xl':'1.875rem',  //  30px
    '3xl':'2.25rem',   //  36px
    '4xl':'3rem',      //  48px
    '5xl':'3.75rem',   //  60px
    '6xl':'4.5rem',    //  72px
  },

  // ── Line Heights ──────────────────────────────────────────
  lineHeights: {
    tight:   1.2,
    snug:    1.375,
    normal:  1.5,
    relaxed: 1.625,
    loose:   1.8,
  },

  // ── Letter Spacing ────────────────────────────────────────
  tracking: {
    tight:  '-0.025em',
    normal: '0em',
    wide:   '0.025em',
    wider:  '0.05em',
    widest: '0.15em',
  },
} as const;

export type Typography = typeof typography;
