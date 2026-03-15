// ============================================================
// SubHeader — Shared Component
// Sub-section headings with accent treatment
// ============================================================

import React from 'react';

interface SubHeaderProps {
  title:    string;
  accent?:  'blue' | 'gold' | 'white';
  align?:   'left' | 'center';
  platform?:'web' | 'mobile';
  style?:   React.CSSProperties | object;
}

const SubHeaderWeb: React.FC<SubHeaderProps> = ({
  title,
  accent = 'blue',
  align  = 'left',
  style  = {},
}) => {
  const color =
    accent === 'blue' ? '#82C0EE' :
    accent === 'gold' ? '#D4A843' :
    '#E2E8F0';

  return (
    <h3 style={{
      fontFamily:  "'Inter', sans-serif",
      fontSize:    'clamp(1.125rem, 2vw, 1.375rem)',
      fontWeight:  700,
      lineHeight:  1.3,
      color,
      margin:      '0 0 0.75rem 0',
      letterSpacing: '-0.01em',
      textAlign:   align,
      ...(style as React.CSSProperties),
    }}>
      {title}
    </h3>
  );
};

let SubHeaderMobile: React.FC<SubHeaderProps> | null = null;

try {
  const { Text } = require('react-native');
  SubHeaderMobile = ({ title, accent = 'blue', align = 'left', style }) => {
    const color =
      accent === 'blue' ? '#82C0EE' :
      accent === 'gold' ? '#D4A843' :
      '#E2E8F0';

    return (
      <Text style={[{
        fontFamily: 'Inter_700Bold',
        fontSize:   18,
        fontWeight: '700',
        color,
        marginBottom: 8,
        textAlign:  align,
      }, style as object]}>
        {title}
      </Text>
    );
  };
} catch { /* web only */ }

export const SubHeader: React.FC<SubHeaderProps> = ({ platform = 'web', ...props }) => {
  if (platform === 'mobile' && SubHeaderMobile) {
    return <SubHeaderMobile {...props} />;
  }
  return <SubHeaderWeb {...props} />;
};

export default SubHeader;
