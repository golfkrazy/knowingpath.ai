// ============================================================
// MottoScreen — Mobile
// "You Are Not Dumb — You Just Don't Know."
// ============================================================

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { CONTENT } from '../../shared/utils/sharedLogic';

type Nav = StackNavigationProp<RootStackParamList>;

export default function MottoScreen() {
  const nav = useNavigation<Nav>();

  return (
    <ScreenWrapper showBack>
      {/* Gold eyebrow */}
      <View style={s.eyebrowWrap}>
        <View style={s.eyebrowPill}>
          <Text style={s.eyebrowText}>YOUR MOTTO</Text>
        </View>
      </View>

      {/* Motto title */}
      <Text style={s.title}>{CONTENT.motto.title}</Text>

      {/* Body */}
      {CONTENT.motto.body.map((para, i) => (
        <Text key={i} style={s.body}>{para}</Text>
      ))}

      {/* Quote card */}
      <View style={s.quoteCard}>
        <Text style={s.quoteText}>
          "You're not behind. You're not lost.{'\n'}You're simply on the path."
        </Text>
      </View>

      {/* Signature phrases */}
      <View style={s.phrasesContainer}>
        {[
          "You already have the intelligence.",
          "I'll help with the structure.",
          "Let's walk this path together.",
        ].map((phrase, i) => (
          <View key={i} style={s.phraseRow}>
            <View style={s.phraseDot} />
            <Text style={s.phraseText}>{phrase}</Text>
          </View>
        ))}
      </View>

      {/* Nav */}
      <View style={s.navRow}>
        <TouchableOpacity
          style={s.btnNext}
          activeOpacity={0.85}
          onPress={() => nav.navigate('LearnScreen')}
        >
          <Text style={s.btnNextText}>What You'll Learn →</Text>
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
  eyebrowWrap: { marginBottom: 16 },
  eyebrowPill: {
    alignSelf:        'flex-start',
    backgroundColor:  'rgba(212,168,67,0.12)',
    borderWidth:      1,
    borderColor:      'rgba(212,168,67,0.28)',
    borderRadius:     100,
    paddingVertical:  5,
    paddingHorizontal:12,
  },
  eyebrowText: {
    fontFamily:    'Inter_600SemiBold',
    fontSize:      10,
    letterSpacing: 1.5,
    color:         '#D4A843',
  },
  title: {
    fontFamily:    'Inter_800ExtraBold',
    fontSize:      24,
    lineHeight:    30,
    letterSpacing: -0.5,
    color:         '#E8C56A',
    marginBottom:  20,
  },
  body: {
    fontFamily:   'Inter_400Regular',
    fontSize:     16,
    lineHeight:   26,
    color:        '#94A3B8',
    marginBottom: 10,
  },
  quoteCard: {
    backgroundColor: 'rgba(212,168,67,0.08)',
    borderWidth:     1,
    borderColor:     'rgba(212,168,67,0.22)',
    borderRadius:    14,
    padding:         20,
    marginVertical:  24,
  },
  quoteText: {
    fontFamily: 'Inter_500Medium',
    fontSize:   15,
    lineHeight: 24,
    color:      '#D4A843',
    fontStyle:  'italic',
  },
  phrasesContainer: {
    gap:          10,
    marginBottom: 28,
  },
  phraseRow: {
    flexDirection: 'row',
    alignItems:    'center',
    gap:           10,
  },
  phraseDot: {
    width:           6,
    height:          6,
    borderRadius:    3,
    backgroundColor: '#5BA3D9',
    opacity:         0.7,
  },
  phraseText: {
    fontFamily: 'Inter_400Regular',
    fontSize:   14,
    color:      '#64748B',
    lineHeight: 20,
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
