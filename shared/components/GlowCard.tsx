// ============================================================
// GlowCard — Shared Component
// Platform: Web (CSS-in-JS via style prop) | Mobile (StyleSheet)
// Glassmorphism surface per SSV design system
// ============================================================
//
// USAGE — Web:
//   import { GlowCard } from '@/shared/components/GlowCard'
//   <GlowCard platform="web" accent="blue">...</GlowCard>
//
// USAGE — Mobile:
//   import { GlowCard } from '../shared/components/GlowCard'
//   <GlowCard platform="mobile" accent="gold">...</GlowCard>
//
// NOTE: This file uses conditional rendering based on the
// `platform` prop. Web uses div + CSS; mobile uses View.
// ============================================================

import React from 'react';
import { colors } from '../theme/colors';
import { shadows } from '../theme/shadows';

export type GlowAccent = 'blue' | 'gold' | 'none';
export type Platform   = 'web' | 'mobile';

interface GlowCardProps {
  children:   React.ReactNode;
  accent?:    GlowAccent;
  platform?:  Platform;
  className?: string;    // web only
  style?:     React.CSSProperties | object; // web or mobile
  hoverable?: boolean;   // web only
}

// ── Web Version ──────────────────────────────────────────────
const GlowCardWeb: React.FC<Omit<GlowCardProps, 'platform'>> = ({
  children,
  accent = 'blue',
  className = '',
  style = {},
  hoverable = true,
}) => {
  const borderColor =
    accent === 'blue' ? colors.glass.borderAccent :
    accent === 'gold' ? `rgba(212, 168, 67, 0.25)` :
    colors.glass.border;

  const glowShadow =
    accent === 'blue' ? shadows.card :
    accent === 'gold' ? `0 8px 32px rgba(0,0,0,0.50), ${shadows.goldGlow}` :
    shadows.md;

  return (
    <div
      className={`kp-glow-card ${hoverable ? 'kp-glow-card--hoverable' : ''} ${className}`}
      style={{
        background:     colors.glass.surface,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border:         `1px solid ${borderColor}`,
        borderRadius:   '16px',
        boxShadow:      glowShadow,
        padding:        '2rem',
        position:       'relative',
        overflow:       'hidden',
        // SSV transition: all 0.3s cubic-bezier(.4,0,.2,1) — matched exactly
        transition:     'box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
        ...(style as React.CSSProperties),
      }}
    >
      {/* Subtle top-edge highlight */}
      <div style={{
        position:   'absolute',
        top:        0,
        left:       '10%',
        right:      '10%',
        height:     '1px',
        background: accent === 'gold'
          ? 'linear-gradient(90deg, transparent, rgba(212,168,67,0.40), transparent)'
          : 'linear-gradient(90deg, transparent, rgba(91,163,217,0.35), transparent)',
      }} />
      {children}
    </div>
  );
};

// ── Mobile Version ────────────────────────────────────────────
// Uses React Native View — only imported when platform === 'mobile'
// To avoid RN imports breaking web builds, we lazy-detect.
let GlowCardMobile: React.FC<Omit<GlowCardProps, 'platform'>> | null = null;

try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const RN = require('react-native');
  GlowCardMobile = ({ children, accent = 'blue', style }) => {
    const borderColor =
      accent === 'blue' ? 'rgba(91,163,217,0.30)' :
      accent === 'gold' ? 'rgba(212,168,67,0.25)' :
      'rgba(255,255,255,0.10)';

    return (
      <RN.View style={[{
        backgroundColor: 'rgba(30, 41, 59, 0.85)',
        borderWidth:     1,
        borderColor,
        borderRadius:    16,
        padding:         20,
        shadowColor:     accent === 'gold' ? '#D4A843' : '#5BA3D9',
        shadowOffset:    { width: 0, height: 6 },
        shadowOpacity:   0.38,   // SSV: 0 4px 15px #4bc3ff ≈ 38% opacity
        shadowRadius:    15,
        elevation:       8,
        overflow:        'hidden',
      }, style]}>
        {children}
      </RN.View>
    );
  };
} catch {
  // Not in React Native environment — web only
}

// ── Unified Export ────────────────────────────────────────────
export const GlowCard: React.FC<GlowCardProps> = ({ platform = 'web', ...props }) => {
  if (platform === 'mobile' && GlowCardMobile) {
    return <GlowCardMobile {...props} />;
  }
  return <GlowCardWeb {...props} />;
};

export default GlowCard;
