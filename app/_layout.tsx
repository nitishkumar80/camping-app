import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback } from 'react';
import 'react-native-reanimated';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();


  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="LocationsScreen" options={{ headerShown: false }} />
        <Stack.Screen name="WeatherDetails" options={{ headerShown: false }} />
        <Stack.Screen name="PackingList" options={{ headerShown: false }} />
        <Stack.Screen name="DetailsScreen" options={{ headerShown: false }} />
        <Stack.Screen name="PlanTripScreen" options={{ headerShown: false }} />
        <Stack.Screen name="DetailLocation" options={{ headerShown: false }} />
        <Stack.Screen name="TransportDetails" options={{ headerShown: false }} />
        <Stack.Screen name="JonhaFallsPage" options={{ headerShown: false }} />
        <Stack.Screen name="DassamFallsPage" options={{ headerShown: false }} />
        <Stack.Screen name="RanchiHillPage" options={{ headerShown: false }} />
        <Stack.Screen name="PatratuValleyPage" options={{ headerShown: false }} />
        <Stack.Screen name="OfflineGuidePage" options={{ headerShown: false }} />
        <Stack.Screen name="EmergencyPage" options={{ headerShown: false }} />
        <Stack.Screen name="WildlifePage" options={{ headerShown: false }} />
        <Stack.Screen name="SurvivalTipsPage" options={{ headerShown: false }} />
        <Stack.Screen name="CampingGearPage" options={{ headerShown: false }} />
        <Stack.Screen name="HundruFallsPage" options={{ headerShown: false }} />
         {/* Add PlanTripScreen */}
      </Stack>
    </ThemeProvider>
  );
}