// ============================================================
// ContactScreen — Mobile
// Site map: Email | Social | Support
// ============================================================

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { ScreenWrapper } from '../components/ScreenWrapper';
import { CONTENT } from '../../shared/utils/sharedLogic';

type Nav = StackNavigationProp<RootStackParamList>;
const cp = CONTENT.contactPage;
type Tab = 'email' | 'social' | 'support';

export default function ContactScreen() {
  const nav = useNavigation<Nav>();
  const [tab, setTab] = useState<Tab>('email');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const tabs: { id: Tab; label: string }[] = [
    { id: 'email',   label: 'Email'   },
    { id: 'social',  label: 'Social'  },
    { id: 'support', label: 'Support' },
  ];

  const inputStyle = {
    backgroundColor: 'rgba(15,23,41,0.70)',
    borderWidth:     1,
    borderColor:     'rgba(91,163,217,0.15)' as const,
    borderRadius:    10,
    padding:         14,
    fontFamily:      'Inter_400Regular',
    fontSize:        15,
    color:           '#E2E8F0',
    marginBottom:    12,
  };

  return (
    <ScreenWrapper showBack>
      <Text style={s.eyebrow}>REACH OUT</Text>
      <Text style={s.title}>{cp.title}</Text>
      <Text style={s.subtitle}>{cp.subtitle}</Text>

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

      {/* Email tab */}
      {tab === 'email' && (
        <View style={s.tabContent}>
          {sent ? (
            <View style={s.sentCard}>
              <Text style={s.sentIcon}>✓</Text>
              <Text style={s.sentTitle}>Message received.</Text>
              <Text style={s.sentBody}>We'll respond with care — usually within 1–2 business days.</Text>
            </View>
          ) : (
            <>
              <TouchableOpacity
                style={s.emailAddressRow}
                onPress={() => Linking.openURL(`mailto:${cp.email.address}`)}
              >
                <Text style={s.emailAddressIcon}>✉</Text>
                <Text style={s.emailAddress}>{cp.email.address}</Text>
              </TouchableOpacity>
              <Text style={[s.body, { marginBottom: 16 }]}>{cp.email.desc}</Text>

              <TextInput
                style={inputStyle}
                placeholder="Your name"
                placeholderTextColor="#475569"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={inputStyle}
                placeholder="your@email.com"
                placeholderTextColor="#475569"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <TextInput
                style={[inputStyle, { height: 100, textAlignVertical: 'top' }]}
                placeholder="What's on your mind?"
                placeholderTextColor="#475569"
                value={message}
                onChangeText={setMessage}
                multiline
              />
              <TouchableOpacity
                style={s.sendBtn}
                activeOpacity={0.85}
                onPress={() => { if (name && email && message) setSent(true); }}
              >
                <Text style={s.sendBtnText}>Send Message →</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      )}

      {/* Social tab */}
      {tab === 'social' && (
        <View style={s.tabContent}>
          <Text style={s.sectionTitle}>{cp.social.title}</Text>
          {cp.social.platforms.map((p, i) => (
            <TouchableOpacity
              key={i}
              style={s.socialCard}
              activeOpacity={0.75}
            >
              <View style={s.socialIcon}>
                <Text style={s.socialIconText}>{p.icon}</Text>
              </View>
              <View>
                <Text style={s.socialPlatform}>{p.name}</Text>
                <Text style={s.socialHandle}>{p.handle}</Text>
              </View>
              <Text style={s.socialArrow}>→</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Support tab */}
      {tab === 'support' && (
        <View style={s.tabContent}>
          <Text style={s.sectionTitle}>{cp.support.title}</Text>
          {cp.support.options.map((opt, i) => (
            <View key={i} style={s.supportCard}>
              <Text style={s.supportTitle}>{opt.title}</Text>
              <Text style={s.supportDesc}>{opt.desc}</Text>
              <TouchableOpacity style={s.supportBtn} activeOpacity={0.8}>
                <Text style={s.supportBtnText}>{opt.cta} →</Text>
              </TouchableOpacity>
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
    flex:1,paddingVertical:9,paddingHorizontal:6,
    borderRadius:9,alignItems:'center',
  },
  tabActive: {
    backgroundColor:'rgba(91,163,217,0.18)',
    borderWidth:1,borderColor:'rgba(91,163,217,0.30)',
  },
  tabText: { fontFamily:'Inter_500Medium',fontSize:12,color:'#64748B' },
  tabTextActive: { fontFamily:'Inter_600SemiBold',color:'#82C0EE' },
  tabContent: { marginBottom:8 },

  // Email
  emailAddressRow: {
    flexDirection:'row',alignItems:'center',gap:10,
    backgroundColor:'rgba(91,163,217,0.08)',
    borderWidth:1,borderColor:'rgba(91,163,217,0.20)',
    borderRadius:10,padding:14,marginBottom:16,
  },
  emailAddressIcon: { fontSize:18,color:'#5BA3D9' },
  emailAddress: { fontFamily:'Inter_600SemiBold',fontSize:15,color:'#82C0EE' },
  body: { fontFamily:'Inter_400Regular',fontSize:15,lineHeight:24,color:'#94A3B8' },
  sendBtn: {
    backgroundColor:'#5BA3D9',borderRadius:10,paddingVertical:14,
    alignItems:'center',
    shadowColor:'#5BA3D9',shadowOffset:{width:0,height:4},shadowOpacity:0.40,shadowRadius:14,elevation:5,
  },
  sendBtnText: { fontFamily:'Inter_700Bold',fontSize:15,color:'#0A0F1E' },

  // Sent
  sentCard: {
    backgroundColor:'rgba(30,41,59,0.75)',borderWidth:1,
    borderColor:'rgba(91,163,217,0.20)',borderRadius:16,
    padding:28,alignItems:'center',gap:10,
  },
  sentIcon: { fontSize:28,color:'#5BA3D9' },
  sentTitle: { fontFamily:'Inter_700Bold',fontSize:17,color:'#82C0EE' },
  sentBody: { fontFamily:'Inter_400Regular',fontSize:14,lineHeight:22,color:'#94A3B8',textAlign:'center' },

  // Social
  sectionTitle: {
    fontFamily:'Inter_700Bold',fontSize:17,lineHeight:24,
    color:'#E2E8F0',marginBottom:16,
  },
  socialCard: {
    flexDirection:'row',alignItems:'center',gap:14,
    backgroundColor:'rgba(30,41,59,0.70)',borderWidth:1,
    borderColor:'rgba(91,163,217,0.16)',borderRadius:12,
    padding:16,marginBottom:10,
  },
  socialIcon: {
    width:42,height:42,borderRadius:10,
    backgroundColor:'rgba(91,163,217,0.12)',borderWidth:1,
    borderColor:'rgba(91,163,217,0.22)',alignItems:'center',justifyContent:'center',
  },
  socialIconText: { fontSize:18,color:'#5BA3D9' },
  socialPlatform: { fontFamily:'Inter_400Regular',fontSize:11,color:'#64748B',marginBottom:2 },
  socialHandle: { fontFamily:'Inter_600SemiBold',fontSize:14,color:'#82C0EE' },
  socialArrow: { fontSize:18,color:'#475569',marginLeft:'auto' as any },

  // Support
  supportCard: {
    backgroundColor:'rgba(30,41,59,0.70)',borderWidth:1,
    borderColor:'rgba(91,163,217,0.14)',borderRadius:14,
    padding:18,marginBottom:12,
  },
  supportTitle: {
    fontFamily:'Inter_700Bold',fontSize:15,color:'#82C0EE',marginBottom:6,
  },
  supportDesc: {
    fontFamily:'Inter_400Regular',fontSize:13,lineHeight:20,
    color:'#94A3B8',marginBottom:14,
  },
  supportBtn: {
    backgroundColor:'rgba(91,163,217,0.10)',borderWidth:1,
    borderColor:'rgba(91,163,217,0.25)',borderRadius:8,
    paddingVertical:9,paddingHorizontal:16,alignSelf:'flex-start',
  },
  supportBtnText: { fontFamily:'Inter_600SemiBold',fontSize:13,color:'#82C0EE' },
});
