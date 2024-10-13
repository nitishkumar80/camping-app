import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, ImageBackground, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font'; // Import font loading utility
import CardGrid from './CardGrid';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons for the back icon

const DetailsScreen: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();
  const { trip } = route.params as { trip: { location: string; date: string; description: string, banner1: string, title: string } };

  // Load the Google Font (e.g., Poppins)
  const loadFonts = async () => {
    await Font.loadAsync({
      'Poppins-Bold': require('../assets/fonts/Poppins-ExtraBold.ttf'), // Load font from local assets
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    ); // Show a loading indicator until fonts are loaded
  }

  return (
    <ImageBackground
      source={{ uri: 'https://your-background-image-url.com' }}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Back Icon */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <Image source={{ uri: trip.banner1 }} style={styles.bannerImage} />
        <Text style={styles.title}>{trip.title}</Text>
        <Text style={styles.titl}>{trip.location}</Text>
        <Text style={styles.date}>{trip.date}</Text>
        <Text style={styles.description}>{trip.description}</Text>

        <View>
          <CardGrid />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Low-opacity white background
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    zIndex: 10,
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Poppins-Bold', // Use the loaded Poppins font
    marginLeft: 32,
    color: '#2C4A60',
  },
  titl: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 32,
    color: '#2C4A60',
  },
  date: {
    fontSize: 22,
    color: '#666',
    marginBottom: 2,
    marginLeft: 210,
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: 280,
  },
});

export default DetailsScreen;
