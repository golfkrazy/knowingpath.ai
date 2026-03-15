// ============================================================
// KnowingPath.ai — Shared Design Tokens: Colors
// Extracted from StashSnap Vault design system
// Ascending Bridge ethos: calm, elevated, timeless
// ============================================================

export const colors = {
  // ── Backgrounds ──────────────────────────────────────────
  bg: {
    deepest:  '#050912',
    base:     '#0A0F1E',
    elevated: '#0F1729',
    surface:  '#141E35',
  },

  // ── Glass Surface (SSV glassmorphism spec) ────────────────
  glass: {
    surface:    'rgba(30, 41, 59, 0.70)',
    surfaceHover: 'rgba(30, 41, 59, 0.85)',
    border:     'rgba(255, 255, 255, 0.10)',
    borderHover:'rgba(255, 255, 255, 0.18)',
    borderAccent:'rgba(91, 163, 217, 0.30)',
  },

  // ── Accent — KnowingPath.ai Ascending Bridge Blue ─────────
  accent: {
    primary:   '#5BA3D9',   // calm sky-bridge blue
    light:     '#82C0EE',
    lighter:   '#B3D9F5',
    dark:      '#3A7FAD',
    glow:      'rgba(91, 163, 217, 0.25)',
    glowStrong:'rgba(91, 163, 217, 0.45)',
  },

  // ── Gold — Elevation / Ascension ──────────────────────────
  gold: {
    primary:   '#D4A843',
    light:     '#E8C56A',
    dark:      '#A87E28',
    glow:      'rgba(212, 168, 67, 0.20)',
  },

  // ── Text ─────────────────────────────────────────────────
  text: {
    primary:   '#E2E8F0',
    secondary: '#94A3B8',
    muted:     '#64748B',
    inverse:   '#0A0F1E',
    accent:    '#82C0EE',
    gold:      '#D4A843',
  },

  // ── Semantic ──────────────────────────────────────────────
  success: '#34D399',
  warning: '#FBBF24',
  error:   '#F87171',
  info:    '#60A5FA',

  // ── Neutrals ─────────────────────────────────────────────
  white:  '#FFFFFF',
  black:  '#000000',
} as const;

export type Colors = typeof colors;
