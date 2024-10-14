import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

// Sample images for Patratu Valley
const images = [
  { id: '1', uri: 'https://expatstraveltogether.com/wp-content/uploads/2023/09/me44uq16f9o31-1290x540.png' },
  { id: '2', uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTxSV0-N77GvOc18JfWDdFUpJ3obsin4j_xw&s' },
  { id: '3', uri: 'https://preview.redd.it/is-patratu-valley-losing-its-beauty-v0-x2bewp9k44td1.jpeg?auto=webp&s=c0379dab43661c565879b7fc91d3b0eb55e0516f' },
];

const PatratuValleyPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Patratu Valley</Text>

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

      {/* About Patratu Valley */}
      <View style={styles.aboutContainer}>
        <Text style={styles.sectionTitle}>About Patratu Valley</Text>
        <Text style={styles.sectionDescription}>
          Patratu Valley is a picturesque valley located approximately 40 kilometers from Ranchi, Jharkhand. It is famous for its winding roads, lush greenery, and breathtaking views of the surrounding hills. The valley is a popular weekend getaway for locals and tourists alike, offering a refreshing escape from the hustle and bustle of city life.
        </Text>
        <Text style={styles.sectionDescription}>
          The Patratu Dam, located within the valley, adds to the scenic beauty of the area. The dam's reservoir stretches over a large area, providing stunning views, especially during sunrise and sunset. Boating is a popular activity here, allowing visitors to enjoy the tranquil waters while surrounded by natural beauty.
        </Text>
      </View>

      {/* Activities */}
      <View style={styles.activitiesContainer}>
        <Text style={styles.sectionTitle}>Activities at Patratu Valley</Text>
        <Text style={styles.sectionDescription}>
          - Scenic Drives: Enjoy a beautiful drive along the winding roads of the valley, offering panoramic views at every turn.
          {'\n'}- Boating: The Patratu Dam provides opportunities for boating and enjoying the serene waters.
          {'\n'}- Trekking: The hills surrounding the valley offer excellent trekking trails for adventure enthusiasts.
          {'\n'}- Photography: Patratu Valley is a photographer's paradise, with numerous spots to capture stunning landscapes.
          {'\n'}- Picnic: The area is perfect for a day picnic, with ample spots to relax and enjoy nature.
        </Text>
      </View>

      {/* Best Time to Visit */}
      <View style={styles.bestTimeContainer}>
        <Text style={styles.sectionTitle}>Best Time to Visit</Text>
        <Text style={styles.sectionDescription}>
          The best time to visit Patratu Valley is during the winter months (October to February), when the weather is cool and pleasant. The monsoon season (July to September) is also a great time, as the valley becomes lush green, but be cautious of slippery roads.
        </Text>
      </View>

      {/* Safety Tips */}
      <View style={styles.safetyContainer}>
        <Text style={styles.sectionTitle}>Safety Tips</Text>
        <Text style={styles.sectionDescription}>
          - Drive carefully along the winding roads, especially during the rainy season.
          {'\n'}- Wear comfortable trekking shoes if you plan to explore the trails.
          {'\n'}- Avoid swimming in the reservoir, as the water can be deep and currents unpredictable.
          {'\n'}- Keep your surroundings clean; do not litter in the valley.
        </Text>
      </View>

      {/* Nearby Attractions */}
      <View style={styles.attractionsContainer}>
        <Text style={styles.sectionTitle}>Nearby Attractions</Text>
        <Text style={styles.sectionDescription}>
          - Patratu Dam: Located within the valley, offering boating and scenic views.
          {'\n'}- Ranchi Hill: A popular viewpoint located around 40 kilometers away, providing panoramic views of Ranchi city.
          {'\n'}- Dassam Falls: A beautiful waterfall located approximately 60 kilometers from Patratu Valley.
          {'\n'}- Hundru Falls: Another waterfall located around 70 kilometers away, known for its natural beauty.
        </Text>
      </View>

      {/* Directions */}
      <View style={styles.directionsContainer}>
        <Text style={styles.sectionTitle}>How to Reach Patratu Valley</Text>
        <Text style={styles.directionsText}>
          Patratu Valley is located about 40 kilometers from Ranchi, Jharkhand. It is well connected by road and can be accessed by car or bus.
          {'\n\n'}
          By Bus: Regular buses and private vehicles are available from Ranchi to Patratu Valley. The ride is scenic with beautiful landscapes.
          {'\n\n'}
          By Car: You can drive to Patratu Valley directly via NH20. The road is smooth and offers a beautiful drive through the valley.
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
    width: 350,
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
  directionsContainer: {
    marginTop: 16,
  },
  directionsText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});

export default PatratuValleyPage;
