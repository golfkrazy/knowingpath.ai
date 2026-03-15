// ============================================================
// KnowingPath.ai — Shared Design Tokens: Shadows
// Glowmorphism: soft, luminous, elevated
// ============================================================

export const shadows = {
  // ── Glow shadows (accent blue) ────────────────────────────
  glowSm:   '0 0 12px rgba(91, 163, 217, 0.20)',
  glow:     '0 0 24px rgba(91, 163, 217, 0.28)',
  glowMd:   '0 0 40px rgba(91, 163, 217, 0.35)',
  glowLg:   '0 0 64px rgba(91, 163, 217, 0.40)',
  glowXl:   '0 0 96px rgba(91, 163, 217, 0.45)',

  // ── Glow shadows (gold) ───────────────────────────────────
  goldGlow:   '0 0 24px rgba(212, 168, 67, 0.20)',
  goldGlowMd: '0 0 48px rgba(212, 168, 67, 0.30)',

  // ── Elevation shadows ─────────────────────────────────────
  xs:  '0 1px 3px rgba(0,0,0,0.40)',
  sm:  '0 4px 12px rgba(0,0,0,0.50)',
  md:  '0 8px 24px rgba(0,0,0,0.55)',
  lg:  '0 16px 48px rgba(0,0,0,0.60)',
  xl:  '0 24px 64px rgba(0,0,0,0.65)',

  // ── Combined: elevation + glow — SSV-matched signature ───────
  // SSV uses: normal 0 4px 15px #0003 / hover 0 15px 45px #0009, 0 0 30px #4bc3ff80, 0 0 60px #4bc3ff33
  // KP accent #5BA3D9 replaces SSV's #4BC3FF
  card:        '0 4px 15px rgba(0,0,0,0.20), 0 0 12px rgba(91,163,217,0.18)',
  cardHover:   '0 15px 45px rgba(0,0,0,0.55), 0 0 30px rgba(91,163,217,0.50), 0 0 60px rgba(91,163,217,0.20)',
  // SSV button: normal 0 4px 15px #256dff4d / hover 0 6px 20px #256dff80
  button:      '0 4px 15px rgba(91,163,217,0.38)',
  buttonHover: '0 6px 22px rgba(91,163,217,0.60), 0 0 14px rgba(91,163,217,0.28)',
  buttonActive:'0 2px 8px rgba(91,163,217,0.45)',

  // ── Text shadows ──────────────────────────────────────────
  textGlow:    '0 0 20px rgba(91, 163, 217, 0.50)',
  textGoldGlow:'0 0 20px rgba(212, 168, 67, 0.50)',
} as const;

export type Shadows = typeof shadows;
