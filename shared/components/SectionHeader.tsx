// ============================================================
// SectionHeader — Shared Component
// Section-level heading with gradient text + optional eyebrow
// ============================================================

import React from 'react';

interface SectionHeaderProps {
  title:    string;
  eyebrow?: string;
  align?:   'left' | 'center';
  size?:    'sm' | 'md' | 'lg';
  platform?: 'web' | 'mobile';
  style?:   React.CSSProperties | object;
}

// ── Web ──────────────────────────────────────────────────────
const SectionHeaderWeb: React.FC<SectionHeaderProps> = ({
  title,
  eyebrow,
  align = 'left',
  size = 'lg',
}) => {
  const fontSize =
    size === 'lg' ? 'clamp(2rem, 4vw, 3rem)' :
    size === 'md' ? 'clamp(1.5rem, 3vw, 2.25rem)' :
    'clamp(1.25rem, 2.5vw, 1.875rem)';

  return (
    <div style={{ textAlign: align, marginBottom: '2rem' }}>
      {eyebrow && (
        <p style={{
          fontFamily:    "'Inter', sans-serif",
          fontSize:      '0.75rem',
          fontWeight:    600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color:         '#5BA3D9',
          marginBottom:  '0.75rem',
          margin:        '0 0 0.75rem 0',
        }}>
          {eyebrow}
        </p>
      )}
      <h2 style={{
        fontFamily:  "'Inter', sans-serif",
        fontSize,
        fontWeight:  800,
        lineHeight:  1.2,
        margin:      0,
        background:  'linear-gradient(135deg, #E2E8F0 0%, #B3D9F5 60%, #D4A843 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor:  'transparent',
        backgroundClip: 'text',
        letterSpacing: '-0.02em',
      }}>
        {title}
      </h2>
    </div>
  );
};

// ── Mobile ────────────────────────────────────────────────────
let SectionHeaderMobile: React.FC<SectionHeaderProps> | null = null;

try {
  const { View, Text } = require('react-native');
  const LinearGradient = (() => {
    try { return require('expo-linear-gradient').LinearGradient; } catch { return null; }
  })();

  SectionHeaderMobile = ({ title, eyebrow, align = 'left', style }) => (
    <View style={[{ marginBottom: 24 }, style as object]}>
      {eyebrow && (
        <Text style={{
          fontFamily:    'Inter_600SemiBold',
          fontSize:      11,
          letterSpacing: 2,
          textTransform: 'uppercase' as const,
          color:         '#5BA3D9',
          marginBottom:  10,
        }}>
          {eyebrow}
        </Text>
      )}
      <Text style={{
        fontFamily: 'Inter_800ExtraBold',
        fontSize:   28,
        fontWeight: '800',
        lineHeight: 34,
        color:      '#E2E8F0',
        textAlign:  align,
      }}>
        {title}
      </Text>
    </View>
  );
} catch { /* web only */ }

// ── Export ────────────────────────────────────────────────────
export const SectionHeader: React.FC<SectionHeaderProps> = ({ platform = 'web', ...props }) => {
  if (platform === 'mobile' && SectionHeaderMobile) {
    return <SectionHeaderMobile {...props} />;
  }
  return <SectionHeaderWeb {...props} />;
};

export default SectionHeader;
