import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SurvivalPage: React.FC = () => {
  const navigation = useNavigation();

  // Function to handle navigation to different pages
  const navigateToPage = (page: string) => {
    navigation.navigate(page);
  };

  // Card data for the five sections
  const cardData = [
    { id: '1', name: 'Offline Guide', icon: 'book-outline', page: 'OfflineGuidePage' },
    { id: '2', name: 'Emergency Info', icon: 'alert-circle-outline', page: 'EmergencyPage' },
    { id: '3', name: 'Wildlife Guide', icon: 'paw-outline', page: 'WildlifePage' },
    { id: '4', name: 'Survival Tips', icon: 'compass-outline', page: 'SurvivalTipsPage' },
    { id: '5', name: 'Camping Gear', icon: 'bonfire-outline', page: 'CampingGearPage' },
  ];

  // Render individual card
  const renderCard = (item: any) => (
    <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigateToPage(item.page)}>
      <Ionicons name={item.icon} size={30} color="#2C4A60" />
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D' }} // Replace with your background image URL
      style={styles.background}
      resizeMode="cover"
      blurRadius={7}
    >
      <SafeAreaView style={styles.container}>
        {/* Top Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://img.freepik.com/premium-vector/ultimate-adventure-equipment-camping-climbing-illustration-guide_1273024-682.jpg' }} // Replace with your image URL
            style={styles.topImage}
            resizeMode="cover"
          />
          <View style={styles.overlayTextContainer}>
            <Text style={styles.overlayText}>Survival Tips</Text>
          </View>
        </View>

        {/* Cards Section */}
        <View style={styles.cardsContainer}>
          {cardData.map(renderCard)}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    marginTop: 40,
  },
  imageContainer: {
    position: 'relative',
  },
  topImage: {
    width: '100%',
    height: 220,
    resizeMode: 'cover',
    marginBottom: 20,
 
   
  },
  overlayTextContainer: {
    position: 'absolute',
    bottom: 10, // Position near the bottom of the image
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    padding: 10,
    borderRadius: 5,
  },
  overlayText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    width: '45%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Slightly transparent background
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SurvivalPage;
