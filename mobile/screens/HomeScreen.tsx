// ============================================================
// HomeScreen — Mobile
// Layout: centered onboarding (hero illustration → headline → CTA)
// Brand: KnowingPath.ai midnight + cyan glowmorphism
// ============================================================

import React, { useEffect, useRef } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { CONTENT, NAV_ITEMS } from '../../shared/utils/sharedLogic';
import { ScreenHeader, ScreenFooter } from '../components/ScreenWrapper';

type Nav = StackNavigationProp<RootStackParamList>;

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const nav = useNavigation<Nav>();

  // Staggered fade-in animations
  const fadeEyebrow  = useRef(new Animated.Value(0)).current;
  const slideEyebrow = useRef(new Animated.Value(20)).current;
  const fadeTitle    = useRef(new Animated.Value(0)).current;
  const slideTitle   = useRef(new Animated.Value(28)).current;
  const fadeSub      = useRef(new Animated.Value(0)).current;
  const slideSub     = useRef(new Animated.Value(20)).current;
  const fadeCTA      = useRef(new Animated.Value(0)).current;
  const slideCTA     = useRef(new Animated.Value(16)).current;
  const fadeIllus    = useRef(new Animated.Value(0)).current;
  const slideIllus   = useRef(new Animated.Value(24)).current;

  const animate = (fade: Animated.Value, slide: Animated.Value, delay: number) =>
    Animated.parallel([
      Animated.timing(fade, { toValue: 1, duration: 800, delay, useNativeDriver: true }),
      Animated.spring(slide, { toValue: 0, delay, useNativeDriver: true, tension: 80, friction: 12 }),
    ]);

  useEffect(() => {
    Animated.stagger(120, [
      animate(fadeIllus, slideIllus, 0),
      animate(fadeEyebrow, slideEyebrow, 0),
      animate(fadeTitle, slideTitle, 0),
      animate(fadeSub, slideSub, 0),
      animate(fadeCTA, slideCTA, 0),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={s.safe} edges={['top', 'left', 'right']}>
      <LinearGradient
        colors={['#050912', '#0A0F1E', '#0F1729']}
        style={s.gradient}
      >
        {/* Ambient background glows */}
        <View style={s.bgGlow1} pointerEvents="none" />
        <View style={s.bgGlow2} pointerEvents="none" />

        <ScreenHeader showBack={false} />

        {/* Hero content — centered layout */}
        <View style={s.hero}>

          {/* ── Illustration ─────────────────────────── */}
          <Animated.View style={[s.illustrationWrap, { opacity: fadeIllus, transform: [{ translateY: slideIllus }] }]}>
            {/* Outer glow halo */}
            <View style={s.haloOuter} />
            <View style={s.haloMid} />

            {/* Glass card surface */}
            <View style={s.glassOrb}>
              {/* Inner ambient fill */}
              <View style={s.orbGlowFill} />

              {/* Ascending rings */}
              <View style={s.ring3} />
              <View style={s.ring2} />
              <View style={s.ring1} />

              {/* Center dot */}
              <View style={s.orbCenter}>
                <View style={s.orbCenterDot} />
              </View>

              {/* Gold ascent arc — top-left to top-right curve suggestion */}
              <View style={s.arcLeft} />
              <View style={s.arcRight} />

              {/* Top-edge highlight */}
              <View style={s.orbTopEdge} />
            </View>

            {/* Gold accent dot below */}
            <View style={s.goldAccent} />
          </Animated.View>

          {/* ── Eyebrow pill ─────────────────────────── */}
          <Animated.View style={[s.eyebrowWrap, { opacity: fadeEyebrow, transform: [{ translateY: slideEyebrow }] }]}>
            <View style={s.eyebrowPill}>
              <Text style={s.eyebrowDot}>◆</Text>
              <Text style={s.eyebrowText}>THE ASCENDING BRIDGE</Text>
            </View>
          </Animated.View>

          {/* ── Headline ─────────────────────────────── */}
          <Animated.Text style={[s.headline, { opacity: fadeTitle, transform: [{ translateY: slideTitle }] }]}>
            {CONTENT.hero.headline}
          </Animated.Text>

          {/* ── Sub-headline ─────────────────────────── */}
          <Animated.View style={[s.subWrap, { opacity: fadeSub, transform: [{ translateY: slideSub }] }]}>
            {CONTENT.hero.subheadline.map((line, i) => (
              <Text key={i} style={[s.subline, i === 2 && s.sublineAccent]}>
                {line}
              </Text>
            ))}
          </Animated.View>

          {/* ── CTA ──────────────────────────────────── */}
          <Animated.View style={[s.ctaWrap, { opacity: fadeCTA, transform: [{ translateY: slideCTA }] }]}>
            {/* Primary button */}
            <TouchableOpacity
              style={s.btnPrimary}
              activeOpacity={0.85}
              onPress={() => nav.navigate('CTAScreen')}
            >
              <LinearGradient
                colors={['#5BA3D9', '#3A7FAD']}
                style={s.btnPrimaryGrad}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <Text style={s.btnPrimaryText}>{CONTENT.hero.cta}</Text>
                <Text style={s.btnPrimaryArrow}>→</Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Secondary option */}
            <TouchableOpacity
              style={s.btnSecondary}
              activeOpacity={0.75}
              onPress={() => nav.navigate('MissionScreen')}
            >
              <Text style={s.btnSecondaryText}>Learn more</Text>
            </TouchableOpacity>

            {/* Quiet reassurance line */}
            <Text style={s.reassurance}>You're not behind. You're simply on the path.</Text>
          </Animated.View>
        </View>

        {/* ── Bottom nav pills ─────────────────────── */}
        <View style={s.navPills}>
          <Text style={s.navPillsLabel}>EXPLORE</Text>
          <View style={s.navPillsRow}>
            {NAV_ITEMS.slice(1).map((item) => (
              <TouchableOpacity
                key={item.id}
                style={s.pill}
                activeOpacity={0.7}
                onPress={() => nav.navigate(item.screen as keyof RootStackParamList)}
              >
                <Text style={s.pillText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <ScreenFooter />
      </LinearGradient>
    </SafeAreaView>
  );
}

const ORB = 180;

const s = StyleSheet.create({
  safe: {
    flex:            1,
    backgroundColor: '#050912',
  },
  gradient: { flex: 1 },

  // ── Background ambient ──────────────────────────
  bgGlow1: {
    position: 'absolute', top: 60, left: -80,
    width: 320, height: 320, borderRadius: 160,
    backgroundColor: 'rgba(91,163,217,0.07)',
  },
  bgGlow2: {
    position: 'absolute', bottom: 100, right: -60,
    width: 240, height: 240, borderRadius: 120,
    backgroundColor: 'rgba(212,168,67,0.05)',
  },

  // ── Hero container ──────────────────────────────
  hero: {
    flex:           1,
    alignItems:     'center',
    justifyContent: 'center',
    paddingHorizontal: 28,
    paddingBottom:  16,
    gap:            0,
  },

  // ── Illustration ────────────────────────────────
  illustrationWrap: {
    alignItems:    'center',
    justifyContent:'center',
    marginBottom:  36,
    width:         ORB + 60,
    height:        ORB + 60,
  },
  haloOuter: {
    position:        'absolute',
    width:           ORB + 56,
    height:          ORB + 56,
    borderRadius:    (ORB + 56) / 2,
    backgroundColor: 'rgba(91,163,217,0.06)',
  },
  haloMid: {
    position:        'absolute',
    width:           ORB + 24,
    height:          ORB + 24,
    borderRadius:    (ORB + 24) / 2,
    backgroundColor: 'rgba(91,163,217,0.10)',
  },
  glassOrb: {
    width:           ORB,
    height:          ORB,
    borderRadius:    ORB / 2,
    backgroundColor: 'rgba(30,41,59,0.72)',
    borderWidth:     1,
    borderColor:     'rgba(91,163,217,0.30)',
    alignItems:      'center',
    justifyContent:  'center',
    overflow:        'hidden',
    // Elevation glow (Android)
    elevation:       12,
    // iOS shadow
    shadowColor:     '#5BA3D9',
    shadowOffset:    { width: 0, height: 8 },
    shadowOpacity:   0.40,
    shadowRadius:    24,
  },
  orbGlowFill: {
    position:        'absolute',
    width:           ORB * 0.9,
    height:          ORB * 0.9,
    borderRadius:    ORB * 0.45,
    backgroundColor: 'rgba(91,163,217,0.06)',
  },
  ring3: {
    position:    'absolute',
    width:       120, height: 120, borderRadius: 60,
    borderWidth: 1,
    borderColor: 'rgba(91,163,217,0.12)',
  },
  ring2: {
    position:    'absolute',
    width:       88, height: 88, borderRadius: 44,
    borderWidth: 1,
    borderColor: 'rgba(91,163,217,0.20)',
  },
  ring1: {
    position:    'absolute',
    width:       56, height: 56, borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(91,163,217,0.32)',
  },
  orbCenter: {
    width:           28, height: 28, borderRadius: 14,
    backgroundColor: 'rgba(91,163,217,0.20)',
    alignItems:      'center',
    justifyContent:  'center',
  },
  orbCenterDot: {
    width:           10, height: 10, borderRadius: 5,
    backgroundColor: '#5BA3D9',
    shadowColor:     '#5BA3D9',
    shadowOffset:    { width: 0, height: 0 },
    shadowOpacity:   1,
    shadowRadius:    8,
    elevation:       4,
  },
  // Gold ascent accent lines
  arcLeft: {
    position:    'absolute',
    width:       40, height: 2,
    borderRadius:1,
    backgroundColor: 'rgba(212,168,67,0.50)',
    top:         ORB * 0.28,
    left:        ORB * 0.15,
    transform:   [{ rotate: '-35deg' }],
  },
  arcRight: {
    position:    'absolute',
    width:       40, height: 2,
    borderRadius:1,
    backgroundColor: 'rgba(212,168,67,0.50)',
    top:         ORB * 0.28,
    right:       ORB * 0.15,
    transform:   [{ rotate: '35deg' }],
  },
  orbTopEdge: {
    position:        'absolute',
    top:             0,
    left:            '15%',
    right:           '15%',
    height:          1,
    backgroundColor: 'rgba(91,163,217,0.50)',
  },
  goldAccent: {
    position:        'absolute',
    bottom:          4,
    width:           6, height: 6, borderRadius: 3,
    backgroundColor: '#D4A843',
    shadowColor:     '#D4A843',
    shadowOffset:    { width: 0, height: 0 },
    shadowOpacity:   0.80,
    shadowRadius:    6,
    elevation:       3,
  },

  // ── Eyebrow ─────────────────────────────────────
  eyebrowWrap:  { marginBottom: 18, alignItems: 'center' },
  eyebrowPill: {
    flexDirection:     'row',
    alignItems:        'center',
    gap:               6,
    backgroundColor:   'rgba(91,163,217,0.10)',
    borderWidth:       1,
    borderColor:       'rgba(91,163,217,0.25)',
    borderRadius:      100,
    paddingVertical:   5,
    paddingHorizontal: 14,
  },
  eyebrowDot:  { color: '#5BA3D9', fontSize: 7 },
  eyebrowText: {
    fontFamily:    'Inter_600SemiBold',
    fontSize:      10,
    color:         '#82C0EE',
    letterSpacing: 1.5,
  },

  // ── Headline ────────────────────────────────────
  headline: {
    fontFamily:    'Inter_800ExtraBold',
    fontSize:      30,
    lineHeight:    37,
    letterSpacing: -0.8,
    color:         '#E2E8F0',
    textAlign:     'center',
    marginBottom:  16,
    paddingHorizontal: 8,
  },

  // ── Sub-headline ────────────────────────────────
  subWrap:  { alignItems: 'center', marginBottom: 0 },
  subline: {
    fontFamily:  'Inter_400Regular',
    fontSize:    15,
    lineHeight:  24,
    color:       '#94A3B8',
    textAlign:   'center',
    marginBottom:2,
  },
  sublineAccent: {
    fontFamily: 'Inter_600SemiBold',
    color:      '#B3D9F5',
    marginTop:  8,
  },

  // ── CTA area ────────────────────────────────────
  ctaWrap: {
    marginTop:  32,
    width:      '100%',
    alignItems: 'center',
    gap:        12,
  },
  btnPrimary: {
    width:        '100%',
    borderRadius: 14,
    overflow:     'hidden',
    shadowColor:  '#5BA3D9',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity:0.50,
    shadowRadius: 20,
    elevation:    8,
  },
  btnPrimaryGrad: {
    flexDirection:    'row',
    alignItems:       'center',
    justifyContent:   'center',
    gap:              10,
    paddingVertical:  18,
    paddingHorizontal:28,
  },
  btnPrimaryText: {
    fontFamily: 'Inter_700Bold',
    fontSize:   17,
    color:      '#0A0F1E',
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  btnPrimaryArrow: {
    fontSize: 19,
    color:    '#0A0F1E',
  },
  btnSecondary: {
    paddingVertical:   12,
    paddingHorizontal: 24,
  },
  btnSecondaryText: {
    fontFamily:    'Inter_600SemiBold',
    fontSize:      15,
    color:         '#5BA3D9',
    textAlign:     'center',
    letterSpacing: 0.1,
  },
  reassurance: {
    fontFamily:  'Inter_400Regular',
    fontSize:    12,
    color:       '#334155',
    textAlign:   'center',
    fontStyle:   'italic',
    marginTop:   4,
    paddingHorizontal: 16,
  },

  // ── Bottom nav pills ────────────────────────────
  navPills: {
    paddingHorizontal: 24,
    paddingBottom:     16,
    gap:               10,
  },
  navPillsLabel: {
    fontFamily:    'Inter_600SemiBold',
    fontSize:      10,
    letterSpacing: 1.5,
    color:         '#334155',
    textAlign:     'center',
  },
  navPillsRow: {
    flexDirection:  'row',
    flexWrap:       'wrap',
    gap:            8,
    justifyContent: 'center',
  },
  pill: {
    backgroundColor:   'rgba(30,41,59,0.70)',
    borderWidth:       1,
    borderColor:       'rgba(91,163,217,0.12)',
    borderRadius:      100,
    paddingVertical:   7,
    paddingHorizontal: 16,
  },
  pillText: {
    fontFamily: 'Inter_500Medium',
    fontSize:   13,
    color:      '#64748B',
  },
});
