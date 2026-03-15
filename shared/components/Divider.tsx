// ============================================================
// Divider — Shared Component
// Luminous gradient separator
// ============================================================

import React from 'react';

interface DividerProps {
  variant?:  'blue' | 'gold' | 'subtle';
  margin?:   string | number;
  platform?: 'web' | 'mobile';
  style?:    React.CSSProperties | object;
}

const DividerWeb: React.FC<DividerProps> = ({
  variant = 'blue',
  margin  = '3rem 0',
  style   = {},
}) => {
  const gradient =
    variant === 'blue'   ? 'linear-gradient(90deg, transparent 0%, rgba(91,163,217,0.50) 50%, transparent 100%)' :
    variant === 'gold'   ? 'linear-gradient(90deg, transparent 0%, rgba(212,168,67,0.45) 50%, transparent 100%)' :
    'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)';

  return (
    <div style={{
      width:      '100%',
      height:     '1px',
      background: gradient,
      margin:     typeof margin === 'number' ? `${margin}px 0` : margin,
      ...(style as React.CSSProperties),
    }} />
  );
};

let DividerMobile: React.FC<DividerProps> | null = null;

try {
  const { View } = require('react-native');
  DividerMobile = ({ variant = 'blue', margin = 32, style }) => (
    <View style={[{
      height:          1,
      marginVertical:  typeof margin === 'number' ? margin : 32,
      backgroundColor: variant === 'gold'
        ? 'rgba(212,168,67,0.35)'
        : variant === 'subtle'
        ? 'rgba(255,255,255,0.08)'
        : 'rgba(91,163,217,0.35)',
    }, style as object]} />
  );
} catch { /* web only */ }

export const Divider: React.FC<DividerProps> = ({ platform = 'web', ...props }) => {
  if (platform === 'mobile' && DividerMobile) {
    return <DividerMobile {...props} />;
  }
  return <DividerWeb {...props} />;
};

export default Divider;
