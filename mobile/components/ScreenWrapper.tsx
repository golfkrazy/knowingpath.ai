// ============================================================
// ScreenWrapper — Mobile Component
// Consistent screen container with gradient background,
// safe area, header, and footer — matches web Layout
// ============================================================

import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
  Platform, StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';

type Nav = StackNavigationProp<RootStackParamList>;

// ── KP Logo (mobile) ──────────────────────────────────────────
// SVG not supported natively — use a View-based mark
export const KPLogoMobile: React.FC<{ size?: number }> = ({ size = 40 }) => (
  <View style={{
    width:           size,
    height:          size,
    borderRadius:    size / 2,
    backgroundColor: 'rgba(91,163,217,0.12)',
    borderWidth:     1,
    borderColor:     'rgba(91,163,217,0.35)',
    alignItems:      'center',
    justifyContent:  'center',
  }}>
    <Text style={{
      fontSize:   size * 0.45,
      color:      '#5BA3D9',
      fontWeight: '800',
      lineHeight: size * 0.55,
    }}>
      KP
    </Text>
  </View>
);

// ── Screen Header ─────────────────────────────────────────────
export const ScreenHeader: React.FC<{
  showBack?:   boolean;
  showMenu?:   boolean;
}> = ({ showBack = false }) => {
  const nav = useNavigation<Nav>();

  return (
    <View style={styles.header}>
      {showBack ? (
        <TouchableOpacity
          onPress={() => nav.goBack()}
          style={styles.backBtn}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.logoRow}>
          <KPLogoMobile size={36} />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.brandName}>KnowingPath.ai</Text>
            <Text style={styles.brandTagline}>Clarity. Compassion. Elevation.</Text>
          </View>
        </View>
      )}

      {/* CTA mini button */}
      <TouchableOpacity
        onPress={() => nav.navigate('CTAScreen')}
        style={styles.beginBtn}
        activeOpacity={0.8}
      >
        <Text style={styles.beginBtnText}>Begin</Text>
      </TouchableOpacity>
    </View>
  );
};

// ── Screen Footer ─────────────────────────────────────────────
export const ScreenFooter: React.FC = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>© 2026 KnowingPath.ai — All Rights Reserved.</Text>
  </View>
);

// ── Screen Wrapper ────────────────────────────────────────────
interface ScreenWrapperProps {
  children:       React.ReactNode;
  scrollable?:    boolean;
  showBack?:      boolean;
  showFooter?:    boolean;
  contentPadding?:boolean;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  scrollable     = true,
  showBack       = false,
  showFooter     = true,
  contentPadding = true,
}) => {
  const Inner = (
    <>
      <ScreenHeader showBack={showBack} />
      <View style={contentPadding ? styles.content : styles.contentNoPad}>
        {children}
      </View>
      {showFooter && <ScreenFooter />}
    </>
  );

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <LinearGradient
        colors={['#050912', '#0A0F1E', '#0F1729']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        {/* Ambient glow overlay */}
        <View style={styles.ambientGlow} pointerEvents="none" />

        {scrollable ? (
          <ScrollView
            style={{ flex: 1 }}
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {Inner}
          </ScrollView>
        ) : (
          <View style={{ flex: 1 }}>
            {Inner}
          </View>
        )}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex:            1,
    backgroundColor: '#050912',
  },
  gradient: {
    flex:     1,
    position: 'relative',
  },
  ambientGlow: {
    position:        'absolute',
    top:             0,
    left:            0,
    right:           0,
    height:          300,
    backgroundColor: 'rgba(91,163,217,0.04)',
  },
  header: {
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical:   14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(91,163,217,0.10)',
    backgroundColor:   'rgba(10,15,30,0.80)',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems:    'center',
  },
  brandName: {
    fontFamily:    'Inter_700Bold',
    fontSize:      14,
    color:         '#E2E8F0',
    letterSpacing: -0.3,
    lineHeight:    18,
  },
  brandTagline: {
    fontFamily: 'Inter_400Regular',
    fontSize:   10,
    color:      '#5BA3D9',
    fontStyle:  'italic',
    lineHeight: 14,
  },
  backBtn: {
    width:           36,
    height:          36,
    borderRadius:    10,
    backgroundColor: 'rgba(91,163,217,0.10)',
    borderWidth:     1,
    borderColor:     'rgba(91,163,217,0.20)',
    alignItems:      'center',
    justifyContent:  'center',
  },
  backArrow: {
    fontFamily: 'Inter_600SemiBold',
    fontSize:   18,
    color:      '#82C0EE',
    lineHeight: 22,
  },
  beginBtn: {
    backgroundColor:  '#5BA3D9',
    paddingVertical:  7,
    paddingHorizontal:14,
    borderRadius:     8,
    shadowColor:      '#5BA3D9',
    shadowOffset:     { width: 0, height: 2 },
    shadowOpacity:    0.40,
    shadowRadius:     8,
    elevation:        4,
  },
  beginBtnText: {
    fontFamily: 'Inter_700Bold',
    fontSize:   12,
    color:      '#0A0F1E',
    fontWeight: '700',
  },
  content: {
    flex:    1,
    padding: 20,
  },
  contentNoPad: {
    flex: 1,
  },
  footer: {
    paddingVertical:   20,
    paddingHorizontal: 20,
    borderTopWidth:    1,
    borderTopColor:    'rgba(91,163,217,0.08)',
    alignItems:        'center',
  },
  footerText: {
    fontFamily: 'Inter_400Regular',
    fontSize:   11,
    color:      '#475569',
    textAlign:  'center',
  },
});

export default ScreenWrapper;
