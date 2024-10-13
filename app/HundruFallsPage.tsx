import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const HundruFallsPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#FFF" />
        </TouchableOpacity>

        {/* Top Image with Title Overlay */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://i.ibb.co/YB3Gf80/DALL-E-2024-10-07-00-34-12-A-detailed-and-captivating-landscape-banner-for-Hundru-Falls-Ranchi-It-sh.webp' }}
            style={styles.topImage}
            resizeMode="cover"
          />
          <View style={styles.titleOverlay}>
            <Text style={styles.titleText}>Hundru Falls</Text>
          </View>
        </View>

        {/* Information about Hundru Falls */}
        <View style={styles.infoContainer}>
          <Text style={styles.sectionTitle}>About Hundru Falls</Text>
          <Text style={styles.sectionDescription}>
            Hundru Falls is a beautiful waterfall located in Ranchi, Jharkhand. It is one of the most popular tourist destinations in the region, known for its scenic beauty and the dramatic fall of water from a height of 98 meters. The falls are a part of the Subarnarekha River and are surrounded by lush green forests, making it a perfect spot for nature lovers and adventure enthusiasts.
          </Text>

          <Text style={styles.sectionTitle}>Activities</Text>
          <Text style={styles.sectionDescription}>
            - Trekking: The area around Hundru Falls offers excellent trekking opportunities.
            {'\n'}- Swimming: Visitors can swim in the natural pool formed at the base of the falls.
            {'\n'}- Photography: The picturesque landscape is perfect for photography enthusiasts.
          </Text>

          <Text style={styles.sectionTitle}>Best Time to Visit</Text>
          <Text style={styles.sectionDescription}>
            The best time to visit Hundru Falls is during the monsoon season (July to September) when the waterfall is in its full glory. However, it is accessible throughout the year, with different experiences in different seasons.
          </Text>

          <Text style={styles.sectionTitle}>How to Reach</Text>
          <Text style={styles.sectionDescription}>
            Hundru Falls is located about 45 kilometers from Ranchi city. It is accessible by car or local transport. There is parking available near the entrance, and visitors will need to trek a short distance to reach the falls.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF3F8',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 8,
    borderRadius: 20,
  },
  imageContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  topImage: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  titleOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 5,
  },
  titleText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C4A60',
    marginBottom: 10,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
    lineHeight: 22,
  },
});

export default HundruFallsPage;
