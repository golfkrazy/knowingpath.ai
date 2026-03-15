// ============================================================
// EthosScreen — Mobile
// Five pillars of The Ascending Bridge
// ============================================================

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { CONTENT } from '../../shared/utils/sharedLogic';

type Nav = StackNavigationProp<RootStackParamList>;

const ICONS  = ['◈', '◎', '◉', '◇', '◆'];

export default function EthosScreen() {
  const nav = useNavigation<Nav>();

  return (
    <ScreenWrapper showBack>
      <Text style={s.eyebrow}>OUR ETHOS</Text>
      <Text style={s.title}>{CONTENT.ethos.title}</Text>

      <View style={s.pillarsContainer}>
        {CONTENT.ethos.pillars.map((pillar, i) => {
          const isBlue = i % 2 === 0;
          return (
            <View
              key={i}
              style={[s.card, {
                borderColor: isBlue ? 'rgba(91,163,217,0.20)' : 'rgba(212,168,67,0.18)',
              }]}
            >
              <View style={s.cardTopEdge} />
              <View style={[s.iconBox, {
                backgroundColor: isBlue ? 'rgba(91,163,217,0.14)' : 'rgba(212,168,67,0.14)',
              }]}>
                <Text style={[s.iconText, { color: isBlue ? '#5BA3D9' : '#D4A843' }]}>
                  {ICONS[i]}
                </Text>
              </View>
              <Text style={[s.pillarTitle, { color: isBlue ? '#82C0EE' : '#D4A843' }]}>
                {pillar.title}
              </Text>
              <Text style={s.pillarBody}>{pillar.body}</Text>
            </View>
          );
        })}
      </View>

      <View style={s.navRow}>
        <TouchableOpacity
          style={s.btnNext}
          activeOpacity={0.85}
          onPress={() => nav.navigate('MottoScreen')}
        >
          <Text style={s.btnNextText}>Your Motto →</Text>
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
    fontSize:      24,
    lineHeight:    30,
    letterSpacing: -0.5,
    color:         '#E2E8F0',
    marginBottom:  24,
  },
  pillarsContainer: { gap: 12, marginBottom: 24 },
  card: {
    backgroundColor: 'rgba(30,41,59,0.80)',
    borderWidth:     1,
    borderRadius:    14,
    padding:         18,
    overflow:        'hidden',
    position:        'relative',
    shadowColor:     '#000',
    shadowOffset:    { width: 0, height: 4 },
    shadowOpacity:   0.30,
    shadowRadius:    12,
    elevation:       4,
  },
  cardTopEdge: {
    position:        'absolute',
    top:             0,
    left:            '15%' as any,
    right:           '15%' as any,
    height:          1,
    backgroundColor: 'rgba(91,163,217,0.30)',
  },
  iconBox: {
    width:          40,
    height:         40,
    borderRadius:   10,
    alignItems:     'center',
    justifyContent: 'center',
    marginBottom:   12,
  },
  iconText: {
    fontSize: 18,
  },
  pillarTitle: {
    fontFamily:   'Inter_700Bold',
    fontSize:     15,
    lineHeight:   20,
    marginBottom: 6,
  },
  pillarBody: {
    fontFamily: 'Inter_400Regular',
    fontSize:   14,
    lineHeight: 22,
    color:      '#94A3B8',
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
