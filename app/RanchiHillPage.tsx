import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

// Sample images for Ranchi Hill
const images = [
  { id: '1', uri: 'https://i.ytimg.com/vi/7p_-8fMwbzM/sddefault.jpg' },
  { id: '2', uri: 'https://media.tripinvites.com/places/ranchi/tagore-hill/tagore-hill-featured.jpg' },
  { id: '3', uri: 'https://content.jdmagicbox.com/comp/ranchi/s8/0651px651.x651.170602221140.a3s8/catalogue/tagore-hill-morabadi-ranchi-tourist-attraction-cbu9oqi5rw.jpg' },
];

const RanchiHillPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Ranchi Hill</Text>

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

      {/* About Ranchi Hill */}
      <View style={styles.aboutContainer}>
        <Text style={styles.sectionTitle}>About Ranchi Hill</Text>
        <Text style={styles.sectionDescription}>
          Ranchi Hill is a popular tourist destination located in the heart of Ranchi, Jharkhand. It offers a panoramic view of the entire city, making it a favored spot for both locals and tourists. The hill stands at an elevation of about 2,140 feet above sea level and is considered one of the best viewpoints in the city.
        </Text>
        <Text style={styles.sectionDescription}>
          The hill is also known for the temple located at the top, dedicated to Lord Shiva. The temple attracts many devotees, especially during festivals. The hill provides a perfect blend of natural beauty and spiritual significance, making it an ideal place for relaxation and meditation.
        </Text>
      </View>

      {/* Activities */}
      <View style={styles.activitiesContainer}>
        <Text style={styles.sectionTitle}>Activities at Ranchi Hill</Text>
        <Text style={styles.sectionDescription}>
          - Trekking: Enjoy a trek up the hill to reach the temple and experience the beautiful views along the way.
          {'\n'}- Photography: Capture the stunning cityscape and natural surroundings.
          {'\n'}- Meditation: The peaceful environment is perfect for meditation and yoga.
          {'\n'}- Sightseeing: Explore the temple and learn about the local culture and traditions.
        </Text>
      </View>

      {/* Best Time to Visit */}
      <View style={styles.bestTimeContainer}>
        <Text style={styles.sectionTitle}>Best Time to Visit</Text>
        <Text style={styles.sectionDescription}>
          The best time to visit Ranchi Hill is during the winter months (October to February) when the weather is cool and pleasant. Avoid visiting during the monsoon season as the trails may be slippery.
        </Text>
      </View>

      {/* Safety Tips */}
      <View style={styles.safetyContainer}>
        <Text style={styles.sectionTitle}>Safety Tips</Text>
        <Text style={styles.sectionDescription}>
          - Wear comfortable shoes suitable for trekking.
          {'\n'}- Carry water and light snacks, especially if you plan to trek up the hill.
          {'\n'}- Avoid visiting after dark, as the paths may not be well-lit.
          {'\n'}- Be cautious around the temple area, as it can get crowded during festivals.
        </Text>
      </View>

      {/* Nearby Attractions */}
      <View style={styles.attractionsContainer}>
        <Text style={styles.sectionTitle}>Nearby Attractions</Text>
        <Text style={styles.sectionDescription}>
          - Tagore Hill: A historical hill located a few kilometers away, named after the famous poet Rabindranath Tagore.
          {'\n'}- Rock Garden: A beautiful garden built around a hill, offering scenic views and artistic structures.
          {'\n'}- Kanke Dam: A popular spot for boating and picnics, located near the Rock Garden.
        </Text>
      </View>

      {/* Directions */}
      <View style={styles.directionsContainer}>
        <Text style={styles.sectionTitle}>How to Reach Ranchi Hill</Text>
        <Text style={styles.directionsText}>
          Ranchi Hill is located in the heart of Ranchi, Jharkhand. It is easily accessible from all parts of the city.
          {'\n\n'}
          By Bus: Regular buses and local auto-rickshaws run to Ranchi Hill from various parts of the city. The hill is a popular spot for both locals and tourists.
          {'\n\n'}
          By Car: You can drive to Ranchi Hill directly. There is parking available at the base of the hill, and you can hike or drive up to the temple at the top.
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
  sectionDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
  image: {
    width: 200,
    height: 120,
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
  directionsContainer: {
    marginTop: 16,
  },
  directionsText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});

export default RanchiHillPage;
