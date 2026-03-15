// ============================================================
// AboutScreen — Mobile
// Site map: Story | Philosophy | Ethos
// ============================================================

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { CONTENT } from '../../shared/utils/sharedLogic';

type Nav = StackNavigationProp<RootStackParamList>;
const ap = CONTENT.aboutPage;

type Tab = 'story' | 'philosophy' | 'ethos';

export default function AboutScreen() {
  const nav = useNavigation<Nav>();
  const [tab, setTab] = useState<Tab>('story');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'story',      label: 'Your Story'  },
    { id: 'philosophy', label: 'Philosophy'  },
    { id: 'ethos',      label: 'Ethos'       },
  ];

  return (
    <ScreenWrapper showBack>
      <Text style={s.eyebrow}>WHO WE ARE</Text>
      <Text style={s.title}>{ap.title}</Text>
      <Text style={s.subtitle}>{ap.subtitle}</Text>

      {/* Tab switcher */}
      <View style={s.tabs}>
        {tabs.map((t) => (
          <TouchableOpacity
            key={t.id}
            style={[s.tab, tab === t.id && s.tabActive]}
            onPress={() => setTab(t.id)}
            activeOpacity={0.7}
          >
            <Text style={[s.tabText, tab === t.id && s.tabTextActive]}>
              {t.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Story tab */}
      {tab === 'story' && (
        <View style={s.tabContent}>
          <Text style={s.sectionTitle}>{ap.story.title}</Text>
          {ap.story.body.map((para, i) => (
            <Text key={i} style={[s.body, i === 3 && s.bodyAccent]}>
              {para}
            </Text>
          ))}
        </View>
      )}

      {/* Philosophy tab */}
      {tab === 'philosophy' && (
        <View style={s.tabContent}>
          <Text style={s.sectionTitle}>{ap.philosophy.title}</Text>
          <View style={s.pillarList}>
            {ap.philosophy.pillars.map((p, i) => (
              <View key={i} style={[s.pillarCard, {
                borderColor: i%2===0 ? 'rgba(91,163,217,0.20)' : 'rgba(212,168,67,0.18)',
              }]}>
                <View style={[s.pillarDot, {
                  backgroundColor: i%2===0 ? '#5BA3D9' : '#D4A843',
                }]}/>
                <Text style={[s.pillarTitle, { color: i%2===0 ? '#82C0EE' : '#D4A843' }]}>
                  {p.title}
                </Text>
                <Text style={s.pillarBody}>{p.body}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Ethos tab */}
      {tab === 'ethos' && (
        <View style={s.tabContent}>
          <Text style={s.sectionTitle}>{ap.ethos.title}</Text>
          <Text style={s.body}>{ap.ethos.body}</Text>
          <View style={s.quoteCard}>
            <Text style={s.quoteText}>{ap.ethos.quote}</Text>
          </View>
        </View>
      )}

      {/* Nav */}
      <TouchableOpacity
        style={s.btnContact}
        activeOpacity={0.85}
        onPress={() => nav.navigate('ContactScreen')}
      >
        <Text style={s.btnContactText}>Get in Touch →</Text>
      </TouchableOpacity>
    </ScreenWrapper>
  );
}

const s = StyleSheet.create({
  eyebrow: {
    fontFamily:'Inter_600SemiBold',fontSize:10,letterSpacing:1.8,
    color:'#5BA3D9',marginBottom:12,
  },
  title: {
    fontFamily:'Inter_800ExtraBold',fontSize:26,lineHeight:32,
    letterSpacing:-0.6,color:'#E2E8F0',marginBottom:8,
  },
  subtitle: {
    fontFamily:'Inter_400Regular',fontSize:14,lineHeight:22,
    color:'#94A3B8',marginBottom:24,
  },
  tabs: {
    flexDirection:'row',gap:8,marginBottom:24,
    backgroundColor:'rgba(15,23,41,0.60)',
    borderRadius:12,padding:4,
  },
  tab: {
    flex:1,paddingVertical:9,paddingHorizontal:10,
    borderRadius:9,alignItems:'center',
  },
  tabActive: {
    backgroundColor:'rgba(91,163,217,0.18)',
    borderWidth:1,borderColor:'rgba(91,163,217,0.30)',
  },
  tabText: {
    fontFamily:'Inter_500Medium',fontSize:12,color:'#64748B',
  },
  tabTextActive: {
    fontFamily:'Inter_600SemiBold',color:'#82C0EE',
  },
  tabContent: { marginBottom:24 },
  sectionTitle: {
    fontFamily:'Inter_700Bold',fontSize:18,lineHeight:24,
    color:'#E2E8F0',marginBottom:16,
  },
  body: {
    fontFamily:'Inter_400Regular',fontSize:15,lineHeight:24,
    color:'#94A3B8',marginBottom:12,
  },
  bodyAccent: {
    fontFamily:'Inter_500Medium',color:'#82C0EE',
  },
  pillarList: { gap:10 },
  pillarCard: {
    backgroundColor:'rgba(30,41,59,0.75)',borderWidth:1,
    borderRadius:12,padding:16,
  },
  pillarDot: {
    width:8,height:8,borderRadius:4,marginBottom:10,
  },
  pillarTitle: {
    fontFamily:'Inter_700Bold',fontSize:14,marginBottom:6,
  },
  pillarBody: {
    fontFamily:'Inter_400Regular',fontSize:13,lineHeight:20,color:'#94A3B8',
  },
  quoteCard: {
    backgroundColor:'rgba(212,168,67,0.08)',borderWidth:1,
    borderColor:'rgba(212,168,67,0.22)',borderRadius:12,padding:18,marginTop:16,
  },
  quoteText: {
    fontFamily:'Inter_500Medium',fontSize:15,lineHeight:24,
    color:'#D4A843',fontStyle:'italic',textAlign:'center',
  },
  btnContact: {
    backgroundColor:'#5BA3D9',borderRadius:12,paddingVertical:14,
    alignItems:'center',
    shadowColor:'#5BA3D9',shadowOffset:{width:0,height:4},shadowOpacity:0.40,shadowRadius:14,elevation:5,
  },
  btnContactText: {
    fontFamily:'Inter_700Bold',fontSize:15,color:'#0A0F1E',
  },
});
