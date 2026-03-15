// ============================================================
// CTAScreen — Mobile
// "Ready to Begin Your Path?" — full-screen CTA
// ============================================================

import React, { useEffect, useRef } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  Animated, Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { CONTENT } from '../../shared/utils/sharedLogic';
import { ScreenHeader, ScreenFooter } from '../components/ScreenWrapper';

type Nav = StackNavigationProp<RootStackParamList>;
const { height } = Dimensions.get('window');

export default function CTAScreen() {
  const nav = useNavigation<Nav>();

  const fadeAll  = useRef(new Animated.Value(0)).current;
  const slideAll = useRef(new Animated.Value(32)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAll,  { toValue: 1, duration: 900, useNativeDriver: true }),
      Animated.spring(slideAll, { toValue: 0, tension: 70, friction: 10, useNativeDriver: true }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={s.safe} edges={['top', 'left', 'right', 'bottom']}>
      <LinearGradient
        colors={['#050912', '#0A0F1E', '#050912']}
        style={s.gradient}
      >
        {/* Ambient glow */}
        <View style={s.glow} pointerEvents="none" />

        <ScreenHeader showBack />

        {/* Main CTA content */}
        <View style={s.centerContainer}>
          <Animated.View style={[s.card, { opacity: fadeAll, transform: [{ translateY: slideAll }] }]}>
            {/* Top edge */}
            <View style={s.cardTopEdge} />
            {/* Ambient inner glow */}
            <View style={s.innerGlow} pointerEvents="none" />

            {/* Badge */}
            <View style={s.badge}>
              <Text style={s.badgeDot}>◆</Text>
              <Text style={s.badgeText}>BEGIN YOUR JOURNEY</Text>
            </View>

            {/* Title */}
            <Text style={s.title}>{CONTENT.cta.title}</Text>

            {/* Subtitle */}
            <Text style={s.subtitle}>{CONTENT.cta.subtitle}</Text>

            {/* Primary CTA */}
            <TouchableOpacity
              style={s.btnWrap}
              activeOpacity={0.85}
              onPress={() => nav.navigate('HomeScreen')}
            >
              <LinearGradient
                colors={['#5BA3D9', '#3A7FAD']}
                style={s.btnGrad}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={s.btnText}>{CONTENT.cta.button}</Text>
                <Text style={s.btnArrow}>→</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Quote */}
            <Text style={s.quote}>"Clarity begins with a single step."</Text>
          </Animated.View>
        </View>

        <ScreenFooter />
      </LinearGradient>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: {
    flex:            1,
    backgroundColor: '#050912',
  },
  gradient: { flex: 1 },
  glow: {
    position:        'absolute',
    top:             '20%' as any,
    left:            '10%' as any,
    right:           '10%' as any,
    height:          300,
    backgroundColor: 'rgba(91,163,217,0.08)',
    borderRadius:    150,
  },
  centerContainer: {
    flex:           1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical:   24,
  },
  card: {
    backgroundColor: 'rgba(30,41,59,0.82)',
    borderWidth:     1,
    borderColor:     'rgba(91,163,217,0.22)',
    borderRadius:    20,
    padding:         28,
    alignItems:      'center',
    overflow:        'hidden',
    position:        'relative',
    shadowColor:     '#5BA3D9',
    shadowOffset:    { width: 0, height: 12 },
    shadowOpacity:   0.14,
    shadowRadius:    30,
    elevation:       10,
  },
  cardTopEdge: {
    position:        'absolute',
    top:             0,
    left:            '10%' as any,
    right:           '10%' as any,
    height:          1,
    backgroundColor: 'rgba(91,163,217,0.45)',
  },
  innerGlow: {
    position:        'absolute',
    top:             -60,
    left:            '20%' as any,
    right:           '20%' as any,
    height:          200,
    backgroundColor: 'rgba(91,163,217,0.08)',
    borderRadius:    100,
  },
  badge: {
    flexDirection:    'row',
    alignItems:       'center',
    gap:              6,
    backgroundColor:  'rgba(91,163,217,0.10)',
    borderWidth:      1,
    borderColor:      'rgba(91,163,217,0.25)',
    borderRadius:     100,
    paddingVertical:  5,
    paddingHorizontal:14,
    marginBottom:     22,
  },
  badgeDot: { color: '#5BA3D9', fontSize: 7 },
  badgeText: {
    fontFamily:    'Inter_600SemiBold',
    fontSize:      9,
    letterSpacing: 1.5,
    color:         '#82C0EE',
  },
  title: {
    fontFamily:    'Inter_800ExtraBold',
    fontSize:      26,
    lineHeight:    32,
    letterSpacing: -0.6,
    color:         '#E2E8F0',
    textAlign:     'center',
    marginBottom:  14,
  },
  subtitle: {
    fontFamily:   'Inter_400Regular',
    fontSize:     16,
    lineHeight:   26,
    color:        '#94A3B8',
    textAlign:    'center',
    marginBottom: 28,
  },
  btnWrap: {
    width:        '100%',
    borderRadius: 14,
    overflow:     'hidden',
    shadowColor:  '#5BA3D9',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity:0.50,
    shadowRadius: 18,
    elevation:    8,
    marginBottom: 16,
  },
  btnGrad: {
    flexDirection:    'row',
    alignItems:       'center',
    justifyContent:   'center',
    gap:              10,
    paddingVertical:  17,
    paddingHorizontal:28,
  },
  btnText: {
    fontFamily: 'Inter_800ExtraBold',
    fontSize:   17,
    color:      '#0A0F1E',
    fontWeight: '800',
  },
  btnArrow: {
    fontSize: 20,
    color:    '#0A0F1E',
  },
  quote: {
    fontFamily: 'Inter_400Regular',
    fontSize:   12,
    color:      '#475569',
    fontStyle:  'italic',
    textAlign:  'center',
  },
});
