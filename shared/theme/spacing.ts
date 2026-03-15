// ============================================================
// KnowingPath.ai — Shared Design Tokens: Spacing
// Spacious vertical rhythm per Ascending Bridge ethos
// ============================================================

export const spacing = {
  // ── Base unit: 4px ────────────────────────────────────────
  px:   '1px',
  '0':  '0',
  '1':  '0.25rem',   //  4px
  '2':  '0.5rem',    //  8px
  '3':  '0.75rem',   // 12px
  '4':  '1rem',      // 16px
  '5':  '1.25rem',   // 20px
  '6':  '1.5rem',    // 24px
  '8':  '2rem',      // 32px
  '10': '2.5rem',    // 40px
  '12': '3rem',      // 48px
  '16': '4rem',      // 64px
  '20': '5rem',      // 80px
  '24': '6rem',      // 96px
  '32': '8rem',      // 128px
  '40': '10rem',     // 160px
  '48': '12rem',     // 192px

  // ── Semantic aliases ──────────────────────────────────────
  section:     '6rem',      // vertical section padding
  sectionSm:   '4rem',
  container:   '1.5rem',    // horizontal container padding
  containerLg: '2rem',
  card:        '2rem',      // card padding
  cardSm:      '1.5rem',
  gap:         '1.5rem',    // grid gap
  gapSm:       '1rem',
  gapLg:       '2rem',
} as const;

export type Spacing = typeof spacing;
