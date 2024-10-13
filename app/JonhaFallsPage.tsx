import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

// Sample images for Jonha Falls
const images = [
  { id: '1', uri: 'https://i.ytimg.com/vi/adqbuBiDLbM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCOOb5HBSlOJh0MSOYEdL1JqnrmvA' },
  { id: '2', uri: 'https://media-cdn.tripadvisor.com/media/photo-s/19/fc/3b/e2/jonha-falls.jpg' },
  { id: '3', uri: 'https://www.jharkhand.me/images/Jonha-Falls-Ranchi-08.jpg' },
];

const JonhaFallsPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Jonha Falls</Text>

      {/* Image Gallery */}
      <View style={styles.imageGalleryContainer}>
        <Text style={styles.sectionTitle}>Gallery</Text>
        <FlatList
          horizontal
          data={images}
          renderItem={({ item }) => (
            <Image source={{ uri: item.uri }} style={styles.image} />
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* About Jonha Falls */}
      <View style={styles.aboutContainer}>
        <Text style={styles.sectionTitle}>About Jonha Falls</Text>
        <Text style={styles.sectionDescription}>
          Jonha Falls, also known as Gautamdhara Falls, is a picturesque waterfall located about 40 kilometers from Ranchi, Jharkhand.
          It is surrounded by lush greenery, making it a popular spot for nature lovers and adventure enthusiasts.
          The falls drop from a height of approximately 45 meters and are a part of the Raru River.
        </Text>
      </View>

      {/* Activities */}
      <View style={styles.activitiesContainer}>
        <Text style={styles.sectionTitle}>Activities at Jonha Falls</Text>
        <Text style={styles.sectionDescription}>
          - Trekking: Enjoy the scenic trekking paths around the falls.
          {'\n'}- Swimming: The natural pool at the base of the falls is suitable for swimming.
          {'\n'}- Photography: Capture stunning views of the waterfall and the surrounding landscapes.
          {'\n'}- Picnic: The area is perfect for a family picnic with its serene and calm environment.
        </Text>
      </View>

      {/* Best Time to Visit */}
      <View style={styles.bestTimeContainer}>
        <Text style={styles.sectionTitle}>Best Time to Visit</Text>
        <Text style={styles.sectionDescription}>
          The best time to visit Jonha Falls is during the monsoon season (July to September), when the waterfall is at its most majestic.
          However, it is accessible throughout the year, with the winter season (October to February) being ideal for sightseeing and trekking.
        </Text>
      </View>

      {/* Safety Tips */}
      <View style={styles.safetyContainer}>
        <Text style={styles.sectionTitle}>Safety Tips</Text>
        <Text style={styles.sectionDescription}>
          - Be cautious while trekking, as the paths can be slippery during the monsoon season.
          {'\n'}- Avoid swimming during heavy rainfall, as the water flow may be strong.
          {'\n'}- Carry sufficient water and snacks, as there are limited facilities near the falls.
          {'\n'}- Wear appropriate footwear for trekking and exploring the area.
        </Text>
      </View>

      {/* Local Attractions */}
      <View style={styles.attractionsContainer}>
        <Text style={styles.sectionTitle}>Nearby Attractions</Text>
        <Text style={styles.sectionDescription}>
          - Hundru Falls: Another beautiful waterfall located approximately 50 kilometers from Jonha Falls.
          {'\n'}- Dassam Falls: A popular waterfall around 40 kilometers from Ranchi, known for its natural beauty.
          {'\n'}- Rock Garden and Kanke Dam: A popular recreational spot near Ranchi, offering scenic views and boating.
        </Text>
      </View>

      {/* Directions */}
      <View style={styles.directionsContainer}>
        <Text style={styles.sectionTitle}>How to Reach Jonha Falls</Text>
        <Text style={styles.directionsText}>
          Jonha Falls is located about 40 kilometers from Ranchi, Jharkhand. It is accessible by both public and private transport.
          {'\n\n'}
          By Bus: Buses run regularly from Ranchi to Jonha village. After reaching the village, it's a short walk to the falls.
          {'\n\n'}
          By Car: You can drive via NH20 and reach Jonha Falls in about 1 hour. Parking is available near the falls.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 40,
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
    color: '#333',
    textAlign: 'center',
    marginVertical: 16,
  },
  imageGalleryContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    marginTop: 40,
  },
  image: {
    width:350,
    height: 220,
    borderRadius: 10,
    marginRight: 16,
  },
  aboutContainer: {
    marginBottom: 24,
  },
  activitiesContainer: {
    marginBottom: 24,
  },
  bestTimeContainer: {
    marginBottom: 24,
  },
  safetyContainer: {
    marginBottom: 24,
  },
  attractionsContainer: {
    marginBottom: 24,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
  directionsContainer: {
    marginTop: 16,
  },
  directionsText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});

export default JonhaFallsPage;
