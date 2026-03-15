// ============================================================
// MissionScreen — Mobile
// ============================================================

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { CONTENT } from '../../shared/utils/sharedLogic';

type Nav = StackNavigationProp<RootStackParamList>;

export default function MissionScreen() {
  const nav = useNavigation<Nav>();

  return (
    <ScreenWrapper showBack>
      {/* Eyebrow */}
      <Text style={s.eyebrow}>OUR MISSION</Text>

      {/* Title */}
      <Text style={s.title}>{CONTENT.mission.title}</Text>

      {/* Glass card */}
      <View style={s.card}>
        {/* Top edge */}
        <View style={s.cardTopEdge} />
        {CONTENT.mission.body.map((para, i) => (
          <Text
            key={i}
            style={[s.body, i === 1 && s.bodyAccent, i < CONTENT.mission.body.length - 1 && { marginBottom: 16 }]}
          >
            {para}
          </Text>
        ))}
      </View>

      {/* Nav */}
      <View style={s.navRow}>
        <TouchableOpacity
          style={s.btnNext}
          activeOpacity={0.85}
          onPress={() => nav.navigate('EthosScreen')}
        >
          <Text style={s.btnNextText}>Our Ethos →</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={s.btnBack}
          activeOpacity={0.80}
          onPress={() => nav.goBack()}
        >
          <Text style={s.btnBackText}>← Back</Text>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
}

const s = StyleSheet.create({
  eyebrow: {
    fontFamily:    'Inter_600SemiBold',
    fontSize:      10,
    letterSpacing: 1.8,
    color:         '#5BA3D9',
    marginBottom:  12,
  },
  title: {
    fontFamily:    'Inter_800ExtraBold',
    fontSize:      26,
    lineHeight:    32,
    letterSpacing: -0.6,
    color:         '#E2E8F0',
    marginBottom:  24,
  },
  card: {
    backgroundColor: 'rgba(30,41,59,0.80)',
    borderWidth:     1,
    borderColor:     'rgba(91,163,217,0.18)',
    borderRadius:    16,
    padding:         22,
    marginBottom:    24,
    overflow:        'hidden',
    position:        'relative',
    shadowColor:     '#5BA3D9',
    shadowOffset:    { width: 0, height: 8 },
    shadowOpacity:   0.10,
    shadowRadius:    20,
    elevation:       5,
  },
  cardTopEdge: {
    position:        'absolute',
    top:             0,
    left:            '20%' as any,
    right:           '20%' as any,
    height:          1,
    backgroundColor: 'rgba(91,163,217,0.35)',
  },
  body: {
    fontFamily: 'Inter_400Regular',
    fontSize:   16,
    lineHeight: 26,
    color:      '#94A3B8',
  },
  bodyAccent: {
    fontFamily: 'Inter_600SemiBold',
    color:      '#82C0EE',
  },
  navRow: { gap: 12 },
  btnNext: {
    backgroundColor: '#5BA3D9',
    borderRadius:    12,
    paddingVertical: 14,
    alignItems:      'center',
    shadowColor:     '#5BA3D9',
    shadowOffset:    { width: 0, height: 4 },
    shadowOpacity:   0.40,
    shadowRadius:    14,
    elevation:       5,
  },
  btnNextText: {
    fontFamily: 'Inter_700Bold',
    fontSize:   15,
    color:      '#0A0F1E',
    fontWeight: '700',
  },
  btnBack: {
    backgroundColor: 'rgba(91,163,217,0.08)',
    borderWidth:     1,
    borderColor:     'rgba(91,163,217,0.22)',
    borderRadius:    12,
    paddingVertical: 13,
    alignItems:      'center',
  },
  btnBackText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize:   14,
    color:      '#82C0EE',
  },
});
