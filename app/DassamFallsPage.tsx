import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

// Sample images for Dassam Falls
const images = [
  { id: '1', uri: 'https://i.ytimg.com/vi/Llso9zGNVeE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCbfWfrgegIT_qrqaVYlTaE6X7nXQ' },
  { id: '2', uri: 'https://i.ytimg.com/vi/Z4WRdPCwTg4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBFMRIL0-xJZ-3N2ao647E5aZsflA' },
  { id: '3', uri: 'https://www.mytourplans.com/storage/blogs/040523024521-rajrapa-1024x683-11zon.jpg' },
];

const DassamFallsPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Dassam Falls</Text>

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

      {/* About Dassam Falls */}
      <View style={styles.aboutContainer}>
        <Text style={styles.sectionTitle}>About Dassam Falls</Text>
        <Text style={styles.sectionDescription}>
          Dassam Falls is a beautiful waterfall located approximately 40 kilometers from Ranchi in Jharkhand, India. It is situated on the Kanchi River and is one of the most popular tourist destinations in the area. 
          The falls drop from a height of about 44 meters, creating a mesmerizing view surrounded by lush greenery.
        </Text>
      </View>

      {/* Activities */}
      <View style={styles.activitiesContainer}>
        <Text style={styles.sectionTitle}>Activities at Dassam Falls</Text>
        <Text style={styles.sectionDescription}>
          - Trekking: Enjoy scenic trails around the waterfall.
          {'\n'}- Photography: Capture the stunning beauty of the waterfall and surrounding landscapes.
          {'\n'}- Picnic: The area is great for family picnics, offering a peaceful and natural environment.
          {'\n'}- Exploring: Walk along the river and explore the diverse flora around the falls.
        </Text>
      </View>

      {/* Best Time to Visit */}
      <View style={styles.bestTimeContainer}>
        <Text style={styles.sectionTitle}>Best Time to Visit</Text>
        <Text style={styles.sectionDescription}>
          The best time to visit Dassam Falls is during the monsoon season (July to September) when the waterfall is at its full flow. 
          The post-monsoon and winter seasons (October to February) are also good for visiting, as the weather is pleasant for sightseeing and trekking.
        </Text>
      </View>

      {/* Safety Tips */}
      <View style={styles.safetyContainer}>
        <Text style={styles.sectionTitle}>Safety Tips</Text>
        <Text style={styles.sectionDescription}>
          - Exercise caution near the water, especially during the monsoon season, as the current may be strong.
          {'\n'}- Avoid swimming, as the flow can be unpredictable.
          {'\n'}- Wear comfortable shoes suitable for trekking and walking on rocky surfaces.
          {'\n'}- Carry water and snacks, as there are limited facilities near the falls.
        </Text>
      </View>

      {/* Local Attractions */}
      <View style={styles.attractionsContainer}>
        <Text style={styles.sectionTitle}>Nearby Attractions</Text>
        <Text style={styles.sectionDescription}>
          - Jonha Falls: Located around 30 kilometers from Dassam Falls, offering another scenic view.
          {'\n'}- Hundru Falls: About 45 kilometers away, it is one of the highest waterfalls in the region.
          {'\n'}- Patratu Valley: A popular picnic and sightseeing destination near Ranchi.
        </Text>
      </View>

      {/* Directions */}
      <View style={styles.directionsContainer}>
        <Text style={styles.sectionTitle}>How to Reach Dassam Falls</Text>
        <Text style={styles.directionsText}>
          Dassam Falls is located about 40 kilometers from Ranchi, Jharkhand. The falls are easily accessible by both private and public transport.
          {'\n\n'}
          By Bus: There are regular bus services from Ranchi to Dassam village. From the village, you can take a local ride to the falls.
          {'\n\n'}
          By Car: You can drive via NH20 and reach Dassam Falls in about 1 hour. Parking is available near the falls.
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
    marginTop:30,
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  },
  image: {
    width:350,
    height: 220,
    borderRadius: 10,
    marginRight: 16,
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

export default DassamFallsPage;
