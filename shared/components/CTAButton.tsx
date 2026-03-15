// ============================================================
// CTAButton — Shared Component
// Primary call-to-action with glowmorphic accent treatment
// ============================================================

import React, { useState } from 'react';

interface CTAButtonProps {
  label:     string;
  onPress?:  () => void;
  onClick?:  () => void;
  href?:     string;
  variant?:  'primary' | 'secondary' | 'ghost';
  size?:     'sm' | 'md' | 'lg';
  platform?: 'web' | 'mobile';
  fullWidth?:boolean;
  style?:    React.CSSProperties | object;
}

// ── Web ──────────────────────────────────────────────────────
const CTAButtonWeb: React.FC<CTAButtonProps> = ({
  label,
  onClick,
  href,
  variant  = 'primary',
  size     = 'md',
  fullWidth = false,
  style    = {},
}) => {
  const [hovered, setHovered] = useState(false);

  const paddingMap = { sm: '0.625rem 1.5rem', md: '0.875rem 2.25rem', lg: '1.125rem 3rem' };
  const fontMap    = { sm: '0.875rem', md: '1rem', lg: '1.125rem' };

  const baseStyle: React.CSSProperties = {
    display:       'inline-flex',
    alignItems:    'center',
    justifyContent:'center',
    gap:           '0.5rem',
    padding:       paddingMap[size],
    fontSize:      fontMap[size],
    fontFamily:    "'Inter', sans-serif",
    fontWeight:    700,
    letterSpacing: '0.02em',
    borderRadius:  '12px',
    cursor:        'pointer',
    textDecoration:'none',
    border:        'none',
    transition:    'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    whiteSpace:    'nowrap',
    width:         fullWidth ? '100%' : 'auto',
    userSelect:    'none',
  };

  const variantStyle: React.CSSProperties =
    variant === 'primary' ? {
      background: hovered
        ? 'linear-gradient(135deg, #82C0EE 0%, #5BA3D9 100%)'
        : 'linear-gradient(135deg, #5BA3D9 0%, #3A7FAD 100%)',
      color:      '#0A0F1E',
      // SSV primary: normal 0 4px 15px #256dff4d / hover 0 6px 20px #256dff80 + bloom
      boxShadow:  hovered
        ? '0 6px 22px rgba(91,163,217,0.60), 0 0 14px rgba(91,163,217,0.28)'
        : '0 4px 15px rgba(91,163,217,0.38)',
      transform:  hovered ? 'translateY(-2px)' : 'translateY(0)',
    } :
    variant === 'secondary' ? {
      background:    hovered
        ? 'rgba(91, 163, 217, 0.20)'
        : 'rgba(91, 163, 217, 0.10)',
      color:         '#82C0EE',
      border:        '1px solid rgba(91, 163, 217, 0.35)',
      // SSV edit button: normal 0 0 15px #4bc3ff99, inset 0 0 10px #4bc3ff4d / hover 0 0 25px #4bc3ff
      boxShadow:     hovered
        ? '0 0 15px rgba(91,163,217,0.50), inset 0 0 10px rgba(91,163,217,0.12)'
        : '0 0 0 1px rgba(91,163,217,0.20), 0 4px 12px rgba(91,163,217,0.14)',
      transform:     hovered ? 'translateY(-1px)' : 'translateY(0)',
    } : {
      // ghost — SSV trash/share hover: 0 0 12px #4bc3ff66
      background:    'transparent',
      color:         '#82C0EE',
      border:        '1px solid rgba(91,163,217,0.25)',
      boxShadow:     hovered ? '0 0 12px rgba(91,163,217,0.35)' : 'none',
      transform:     hovered ? 'translateY(-1px)' : 'translateY(0)',
    };

  const combined = { ...baseStyle, ...variantStyle, ...(style as React.CSSProperties) };

  if (href) {
    return (
      <a
        href={href}
        style={combined}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {label}
        {variant === 'primary' && (
          <span style={{ fontSize: '1.1em', transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'none' }}>
            →
          </span>
        )}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      style={combined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseDown={e => { if (variant === 'primary') (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 8px rgba(91,163,217,0.45)'; }}
      onMouseUp={e => { if (variant === 'primary') (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 22px rgba(91,163,217,0.60), 0 0 14px rgba(91,163,217,0.28)'; }}
    >
      {label}
      {variant === 'primary' && (
        <span style={{ fontSize: '1.1em', transition: 'transform 0.2s', transform: hovered ? 'translateX(4px)' : 'none' }}>
          →
        </span>
      )}
    </button>
  );
};

// ── Mobile ────────────────────────────────────────────────────
let CTAButtonMobile: React.FC<CTAButtonProps> | null = null;

try {
  const { TouchableOpacity, Text, View, Animated } = require('react-native');
  CTAButtonMobile = ({ label, onPress, variant = 'primary', size = 'md', fullWidth = false, style }) => {
    const paddingV = size === 'lg' ? 16 : size === 'sm' ? 10 : 14;
    const paddingH = size === 'lg' ? 40 : size === 'sm' ? 20 : 28;
    const fontSize = size === 'lg' ? 18 : size === 'sm' ? 14 : 16;

    const isPrimary   = variant === 'primary';
    const isSecondary = variant === 'secondary';

    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={[{
          backgroundColor: isPrimary   ? '#5BA3D9' :
                           isSecondary ? 'rgba(91,163,217,0.12)' : 'transparent',
          paddingVertical:    paddingV,
          paddingHorizontal:  paddingH,
          borderRadius:       12,
          borderWidth:        isPrimary ? 0 : 1,
          borderColor:        'rgba(91,163,217,0.35)',
          alignItems:         'center' as const,
          justifyContent:     'center' as const,
          flexDirection:      'row' as const,
          gap:                8,
          width:              fullWidth ? '100%' : undefined,
          shadowColor:        '#5BA3D9',
          shadowOffset:       { width: 0, height: 4 },
          shadowOpacity:      isPrimary ? 0.40 : 0.10,
          shadowRadius:       16,
          elevation:          isPrimary ? 6 : 2,
        }, style as object]}
      >
        <Text style={{
          fontFamily: 'Inter_700Bold',
          fontSize,
          fontWeight: '700',
          color:      isPrimary ? '#0A0F1E' : '#82C0EE',
          letterSpacing: 0.5,
        }}>
          {label}
        </Text>
        {isPrimary && (
          <Text style={{ color: '#0A0F1E', fontSize: fontSize * 1.1 }}>→</Text>
        )}
      </TouchableOpacity>
    );
  };
} catch { /* web only */ }

// ── Export ────────────────────────────────────────────────────
export const CTAButton: React.FC<CTAButtonProps> = ({ platform = 'web', ...props }) => {
  if (platform === 'mobile' && CTAButtonMobile) {
    return <CTAButtonMobile {...props} />;
  }
  return <CTAButtonWeb {...props} />;
};

export default CTAButton;
