// ============================================================
// KnowingPath.ai — Mobile App Entry (App.tsx)
// Expo + React Navigation stack
// ============================================================

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from '@expo-google-fonts/inter';
import { View, Text, StyleSheet } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashText}>KnowingPath.ai</Text>
        <Text style={styles.splashSub}>Loading your path...</Text>
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="light" backgroundColor="#050912" />
        <AppNavigator />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex:            1,
    backgroundColor: '#050912',
    alignItems:      'center',
    justifyContent:  'center',
    gap:             8,
  },
  splashText: {
    fontFamily:  'System',
    fontSize:    22,
    fontWeight:  '800',
    color:       '#E2E8F0',
    letterSpacing: -0.5,
  },
  splashSub: {
    fontFamily:  'System',
    fontSize:    13,
    color:       '#5BA3D9',
    fontStyle:   'italic',
  },
});
