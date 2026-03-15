// ============================================================
// PathScreen — Mobile
// The Path Forward — 3-step ascending journey
// ============================================================

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { CONTENT } from '../../shared/utils/sharedLogic';

type Nav = StackNavigationProp<RootStackParamList>;

export default function PathScreen() {
  const nav = useNavigation<Nav>();

  return (
    <ScreenWrapper showBack>
      <Text style={s.eyebrow}>YOUR JOURNEY</Text>
      <Text style={s.title}>{CONTENT.path.title}</Text>

      {/* Steps */}
      <View style={s.stepsContainer}>
        {CONTENT.path.steps.map((step, i) => (
          <View key={i} style={s.stepWrap}>
            {/* Connector line */}
            {i < CONTENT.path.steps.length - 1 && (
              <View style={s.connector} />
            )}
            <View style={s.stepCard}>
              {/* Step number */}
              <View style={s.numBox}>
                <Text style={s.numText}>{step.number}</Text>
              </View>
              <View style={s.stepContent}>
                <Text style={s.stepTitle}>{step.title}</Text>
                <Text style={s.stepBody}>{step.body}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Signature phrase */}
      <View style={s.signatureCard}>
        <Text style={s.signatureText}>
          Knowledge becomes empowerment.{'\n'}
          Empowerment becomes safety.{'\n'}
          Safety becomes freedom.
        </Text>
      </View>

      {/* Nav */}
      <View style={s.navRow}>
        <TouchableOpacity
          style={s.btnNext}
          activeOpacity={0.85}
          onPress={() => nav.navigate('CTAScreen')}
        >
          <Text style={s.btnNextText}>Begin Your Path →</Text>
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
    marginBottom:  28,
  },
  stepsContainer: {
    gap:          0,
    marginBottom: 24,
  },
  stepWrap: {
    position: 'relative',
    marginBottom: 12,
  },
  connector: {
    position:        'absolute',
    left:            25,
    bottom:          -12,
    width:           2,
    height:          12,
    backgroundColor: 'rgba(91,163,217,0.35)',
    zIndex:          1,
  },
  stepCard: {
    flexDirection:   'row',
    alignItems:      'flex-start',
    gap:             14,
    backgroundColor: 'rgba(30,41,59,0.75)',
    borderWidth:     1,
    borderColor:     'rgba(91,163,217,0.14)',
    borderRadius:    14,
    padding:         16,
    shadowColor:     '#5BA3D9',
    shadowOffset:    { width: 0, height: 4 },
    shadowOpacity:   0.08,
    shadowRadius:    12,
    elevation:       3,
  },
  numBox: {
    width:          50,
    height:         50,
    borderRadius:   12,
    backgroundColor:'rgba(91,163,217,0.12)',
    borderWidth:    1,
    borderColor:    'rgba(91,163,217,0.25)',
    alignItems:     'center',
    justifyContent: 'center',
    flexShrink:     0,
    shadowColor:    '#5BA3D9',
    shadowOffset:   { width: 0, height: 0 },
    shadowOpacity:  0.20,
    shadowRadius:   8,
  },
  numText: {
    fontFamily: 'Inter_800ExtraBold',
    fontSize:   20,
    color:      '#5BA3D9',
    lineHeight: 24,
  },
  stepContent: { flex: 1 },
  stepTitle: {
    fontFamily:   'Inter_700Bold',
    fontSize:     16,
    color:        '#82C0EE',
    marginBottom: 6,
    lineHeight:   22,
  },
  stepBody: {
    fontFamily: 'Inter_400Regular',
    fontSize:   14,
    lineHeight: 22,
    color:      '#94A3B8',
  },
  signatureCard: {
    backgroundColor: 'rgba(212,168,67,0.07)',
    borderWidth:     1,
    borderColor:     'rgba(212,168,67,0.18)',
    borderRadius:    12,
    padding:         18,
    marginBottom:    24,
  },
  signatureText: {
    fontFamily:  'Inter_400Regular',
    fontSize:    14,
    lineHeight:  24,
    color:       '#D4A843',
    fontStyle:   'italic',
    textAlign:   'center',
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
