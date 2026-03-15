// ============================================================
// Paragraph — Shared Component
// Body text with Ascending Bridge voice: calm, grounded
// ============================================================

import React from 'react';

interface ParagraphProps {
  children:  React.ReactNode;
  size?:     'sm' | 'base' | 'lg';
  muted?:    boolean;
  align?:    'left' | 'center';
  platform?: 'web' | 'mobile';
  style?:    React.CSSProperties | object;
}

const ParagraphWeb: React.FC<ParagraphProps> = ({
  children,
  size   = 'base',
  muted  = false,
  align  = 'left',
  style  = {},
}) => {
  const fontSize =
    size === 'lg' ? '1.125rem' :
    size === 'sm' ? '0.875rem' :
    '1rem';

  return (
    <p style={{
      fontFamily:  "'Inter', sans-serif",
      fontSize,
      fontWeight:  400,
      lineHeight:  1.75,
      color:       muted ? '#64748B' : '#94A3B8',
      margin:      '0 0 1rem 0',
      textAlign:   align,
      ...(style as React.CSSProperties),
    }}>
      {children}
    </p>
  );
};

let ParagraphMobile: React.FC<ParagraphProps> | null = null;

try {
  const { Text } = require('react-native');
  ParagraphMobile = ({ children, size = 'base', muted = false, align = 'left', style }) => {
    const fontSize =
      size === 'lg' ? 18 :
      size === 'sm' ? 14 :
      16;

    return (
      <Text style={[{
        fontFamily: 'Inter_400Regular',
        fontSize,
        lineHeight: fontSize * 1.7,
        color:      muted ? '#64748B' : '#94A3B8',
        marginBottom: 12,
        textAlign:  align,
      }, style as object]}>
        {children}
      </Text>
    );
  };
} catch { /* web only */ }

export const Paragraph: React.FC<ParagraphProps> = ({ platform = 'web', ...props }) => {
  if (platform === 'mobile' && ParagraphMobile) {
    return <ParagraphMobile {...props} />;
  }
  return <ParagraphWeb {...props} />;
};

export default Paragraph;
