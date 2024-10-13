import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from 'expo-router';

const MainScreen = () => {
  const navigation = useNavigation();

  const handleExplorePress = () => {
    // Navigate to the TabLayout
    navigation.navigate('(tabs)');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://yourimageurl.com/image.jpg' }} // Replace with your image URL
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Aspen</Text>
        <View style={styles.textContainer}>
          <Text style={styles.planText}>Plan your</Text>
          <Text style={styles.luxuriousText}>Luxurious</Text>
          <Text style={styles.vacationText}>Vacation</Text>
        </View>
        <TouchableOpacity style={styles.exploreButton} onPress={handleExplorePress}>
          <Text style={styles.exploreButtonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    top: 50,
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  textContainer: {
    position: 'absolute',
    left: 20,
    bottom: 150,
  },
  planText: {
    fontSize: 24,
    color: 'white',
  },
  luxuriousText: {
    fontSize: 24,
    color: 'white',
  },
  vacationText: {
    fontSize: 24,
    color: 'white',
  },
  exploreButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  exploreButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default MainScreen;
