// ============================================================
// KnowingPath.ai — App Navigator
// React Navigation Stack — mirrors site map
//
// Site map:
//   Home  →  Learn  →  About  →  Contact
//   (+ detail screens accessible from Home)
// ============================================================

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';

// ── Main site-map screens ─────────────────────────────────────
import HomeScreen    from '../screens/HomeScreen';
import LearnScreen   from '../screens/LearnScreen';
import AboutScreen   from '../screens/AboutScreen';
import ContactScreen from '../screens/ContactScreen';

// ── Deep-link / detail screens (reachable from HomeScreen) ────
import MissionScreen from '../screens/MissionScreen';
import EthosScreen   from '../screens/EthosScreen';
import MottoScreen   from '../screens/MottoScreen';
import PathScreen    from '../screens/PathScreen';
import CTAScreen     from '../screens/CTAScreen';

export type RootStackParamList = {
  // Primary nav (matches site map)
  HomeScreen:    undefined;
  LearnScreen:   undefined;
  AboutScreen:   undefined;
  ContactScreen: undefined;
  // Detail / anchor screens
  MissionScreen: undefined;
  EthosScreen:   undefined;
  MottoScreen:   undefined;
  PathScreen:    undefined;
  CTAScreen:     undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerShown:          false,
  gestureEnabled:       true,
  gestureDirection:     'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  transitionSpec: {
    open: {
      animation: 'spring',
      config: { stiffness: 180, damping: 26, mass: 1, overshootClamping: false },
    },
    close: {
      animation: 'spring',
      config: { stiffness: 180, damping: 26, mass: 1, overshootClamping: false },
    },
  },
};

const theme = {
  dark: true,
  colors: {
    primary:      '#5BA3D9',
    background:   '#0A0F1E',
    card:         '#0A0F1E',
    text:         '#E2E8F0',
    border:       'rgba(91,163,217,0.12)',
    notification: '#5BA3D9',
  },
};

export default function AppNavigator() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={screenOptions}
      >
        {/* ── Primary site-map screens ── */}
        <Stack.Screen name="HomeScreen"    component={HomeScreen}    />
        <Stack.Screen name="LearnScreen"   component={LearnScreen}   />
        <Stack.Screen name="AboutScreen"   component={AboutScreen}   />
        <Stack.Screen name="ContactScreen" component={ContactScreen} />

        {/* ── Detail screens (anchor-equivalent) ── */}
        <Stack.Screen name="MissionScreen" component={MissionScreen} />
        <Stack.Screen name="EthosScreen"   component={EthosScreen}   />
        <Stack.Screen name="MottoScreen"   component={MottoScreen}   />
        <Stack.Screen name="PathScreen"    component={PathScreen}    />
        <Stack.Screen name="CTAScreen"     component={CTAScreen}     />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
