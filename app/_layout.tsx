import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isSplashVisible, setSplashVisible] = useState(true);

  // Effect to hide the splash screen after a brief delay (3 seconds in this case)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 3000); // Show the splash for 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  if (isSplashVisible) {
    return <SplashScreenComponent />;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
       
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
        <Stack.Screen name="WinterCampingPage" options={{ headerShown: false }} />
        {/* Add PlanTripScreen */}
      </Stack>
    </ThemeProvider>
  );
}

// Simple SplashScreen component with an image background
const SplashScreenComponent = () => {
  return (
    <ImageBackground
      source={{ uri: 'https://media.istockphoto.com/id/1128973207/vector/time-to-adventure-concept.jpg?s=612x612&w=0&k=20&c=OtdXlGejRL1ZWbVQt3jW8vZSXOUv8eOBbletqtXqQX4=' }} // Replace with your own image URL
      style={styles.splashContainer}
    >
      <Text style={styles.splashText}>Welcome to Aspan</Text>
     
    </ImageBackground>
  );
};

// SplashScreen styles
const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 100,
  },
 
});