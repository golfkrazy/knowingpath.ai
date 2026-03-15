// ============================================================
// LearnScreen — Mobile
// Site map: Courses | Guides | Tools
// ============================================================

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { CONTENT } from '../../shared/utils/sharedLogic';

type Nav = StackNavigationProp<RootStackParamList>;
const lp = CONTENT.learnPage;
type Tab = 'courses' | 'guides' | 'tools';

export default function LearnScreen() {
  const nav = useNavigation<Nav>();
  const [tab, setTab] = useState<Tab>('courses');

  const tabs: { id: Tab; label: string }[] = [
    { id: 'courses', label: 'Courses' },
    { id: 'guides',  label: 'Guides'  },
    { id: 'tools',   label: 'Tools'   },
  ];

  return (
    <ScreenWrapper showBack>
      <Text style={s.eyebrow}>KNOWLEDGE IS THE PATH</Text>
      <Text style={s.title}>{lp.title}</Text>
      <Text style={s.subtitle}>{lp.subtitle}</Text>

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

      {/* ── Courses ── */}
      {tab === 'courses' && (
        <View style={s.tabContent}>
          <Text style={s.sectionTitle}>{lp.courses.title}</Text>
          {lp.courses.items.map((course) => (
            <View key={course.id} style={s.courseCard}>
              <View style={s.courseTopEdge} />
              <View style={s.courseHeader}>
                <View style={s.iconBox}>
                  <Text style={s.iconText}>{course.icon}</Text>
                </View>
                <View style={s.courseMeta}>
                  <View style={s.levelBadge}>
                    <Text style={s.levelText}>{course.level}</Text>
                  </View>
                  <Text style={s.lessonsText}>{course.lessons} lessons</Text>
                </View>
              </View>
              <Text style={s.courseTitle}>{course.title}</Text>
              <Text style={s.courseDesc}>{course.desc}</Text>
            </View>
          ))}
        </View>
      )}

      {/* ── Guides ── */}
      {tab === 'guides' && (
        <View style={s.tabContent}>
          <Text style={s.sectionTitle}>{lp.guides.title}</Text>
          {lp.guides.items.map((guide, i) => (
            <TouchableOpacity key={i} style={s.guideCard} activeOpacity={0.75}>
              <View style={s.guideLeft}>
                <Text style={s.guideArrow}>{guide.icon}</Text>
                <View style={{ flex: 1 }}>
                  <Text style={s.guideTitle}>{guide.title}</Text>
                  <Text style={s.guideDesc}>{guide.desc}</Text>
                </View>
              </View>
              <Text style={s.guideTime}>{guide.time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* ── Tools ── */}
      {tab === 'tools' && (
        <View style={s.tabContent}>
          <Text style={s.sectionTitle}>{lp.tools.title}</Text>
          {lp.tools.items.map((tool, i) => (
            <View key={i} style={s.toolCard}>
              <View style={s.toolTopEdge} />
              <Text style={s.toolName}>{tool.name}</Text>
              <Text style={s.toolDesc}>{tool.desc}</Text>
              <View style={s.toolTagWrap}>
                <Text style={s.toolTag}>{tool.tag}</Text>
              </View>
            </View>
          ))}
        </View>
      )}
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
    flexDirection:'row',gap:6,marginBottom:24,
    backgroundColor:'rgba(15,23,41,0.60)',borderRadius:12,padding:4,
  },
  tab: {
    flex:1,paddingVertical:9,borderRadius:9,alignItems:'center',
  },
  tabActive: {
    backgroundColor:'rgba(91,163,217,0.18)',
    borderWidth:1,borderColor:'rgba(91,163,217,0.30)',
  },
  tabText: { fontFamily:'Inter_500Medium',fontSize:12,color:'#64748B' },
  tabTextActive: { fontFamily:'Inter_600SemiBold',color:'#82C0EE' },
  tabContent: {},
  sectionTitle: {
    fontFamily:'Inter_700Bold',fontSize:17,color:'#E2E8F0',marginBottom:16,
  },

  // Courses
  courseCard: {
    backgroundColor:'rgba(30,41,59,0.80)',borderWidth:1,
    borderColor:'rgba(91,163,217,0.18)',borderRadius:14,
    padding:16,marginBottom:12,overflow:'hidden',position:'relative',
  },
  courseTopEdge: {
    position:'absolute',top:0,left:'10%' as any,right:'10%' as any,height:1,
    backgroundColor:'rgba(91,163,217,0.30)',
  },
  courseHeader: {
    flexDirection:'row',justifyContent:'space-between',
    alignItems:'flex-start',marginBottom:12,
  },
  iconBox: {
    width:40,height:40,borderRadius:10,
    backgroundColor:'rgba(91,163,217,0.14)',borderWidth:1,
    borderColor:'rgba(91,163,217,0.25)',alignItems:'center',justifyContent:'center',
  },
  iconText: { fontSize:18,color:'#5BA3D9' },
  courseMeta: { alignItems:'flex-end',gap:4 },
  levelBadge: {
    backgroundColor:'rgba(91,163,217,0.12)',borderWidth:1,
    borderColor:'rgba(91,163,217,0.22)',borderRadius:100,
    paddingVertical:3,paddingHorizontal:10,
  },
  levelText: { fontFamily:'Inter_600SemiBold',fontSize:10,color:'#5BA3D9',letterSpacing:0.5 },
  lessonsText: { fontFamily:'Inter_400Regular',fontSize:11,color:'#64748B' },
  courseTitle: {
    fontFamily:'Inter_700Bold',fontSize:15,color:'#CBD5E1',marginBottom:8,lineHeight:22,
  },
  courseDesc: {
    fontFamily:'Inter_400Regular',fontSize:13,lineHeight:20,color:'#94A3B8',
  },

  // Guides
  guideCard: {
    backgroundColor:'rgba(30,41,59,0.65)',borderWidth:1,
    borderColor:'rgba(255,255,255,0.07)',borderRadius:12,
    padding:14,marginBottom:10,
    flexDirection:'row',alignItems:'flex-start',
    justifyContent:'space-between',gap:10,
  },
  guideLeft: { flexDirection:'row',gap:10,flex:1 },
  guideArrow: { color:'#5BA3D9',fontSize:14,marginTop:2 },
  guideTitle: {
    fontFamily:'Inter_600SemiBold',fontSize:14,color:'#CBD5E1',marginBottom:4,lineHeight:20,
  },
  guideDesc: {
    fontFamily:'Inter_400Regular',fontSize:12,lineHeight:18,color:'#64748B',
  },
  guideTime: {
    fontFamily:'Inter_400Regular',fontSize:11,color:'#475569',
    fontStyle:'italic',flexShrink:0,paddingTop:2,
  },

  // Tools
  toolCard: {
    backgroundColor:'rgba(30,41,59,0.75)',borderWidth:1,
    borderColor:'rgba(212,168,67,0.18)',borderRadius:12,
    padding:16,marginBottom:10,overflow:'hidden',position:'relative',
  },
  toolTopEdge: {
    position:'absolute',top:0,left:'10%' as any,right:'10%' as any,height:1,
    backgroundColor:'rgba(212,168,67,0.30)',
  },
  toolName: {
    fontFamily:'Inter_700Bold',fontSize:15,color:'#D4A843',marginBottom:6,
  },
  toolDesc: {
    fontFamily:'Inter_400Regular',fontSize:13,lineHeight:20,
    color:'#94A3B8',marginBottom:10,
  },
  toolTagWrap: { alignSelf:'flex-start' },
  toolTag: {
    fontFamily:'Inter_600SemiBold',fontSize:10,color:'#A87E28',
    backgroundColor:'rgba(212,168,67,0.10)',borderWidth:1,
    borderColor:'rgba(212,168,67,0.22)',borderRadius:100,
    paddingVertical:3,paddingHorizontal:10,letterSpacing:0.3,
  },
});
