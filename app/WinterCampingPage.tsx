import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For icons
import { useNavigation } from '@react-navigation/native';

const WinterCampingPage: React.FC = () => {
  const navigation = useNavigation();

  const tips = [
    'Choose a winter-rated sleeping bag for Ranchi’s cold nights.',
    'Layer up with thermals to stay warm and dry in Ranchi’s forests.',
    'Pack an insulated tent to protect against moisture.',
    'Bring high-energy snacks to maintain your stamina during treks.',
    'Start your campfire early as the temperature drops quickly in the evening.',
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Header Image */}
      <View style={styles.headerContainer}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-vector/winter-camping-concept-illustration_114360-18610.jpg',
          }}
          style={styles.headerImage}
        />
        <View style={styles.headerOverlay}>
          <Text style={styles.headerTitle}>Winter Camping in Ranchi</Text>
        </View>
      </View>

      {/* Winter Camping Details */}
      <View style={styles.contentContainer}>
        <Text style={styles.sectionTitle}>Why Winter Camping in Ranchi?</Text>
        <Text style={styles.sectionText}>
          Ranchi is an ideal spot for winter camping enthusiasts. Surrounded by lush forests, waterfalls, and rolling hills, Ranchi's winter
          season offers a peaceful and chilly camping experience, perfect for adventurers looking to escape the hustle of the city.
        </Text>

        {/* Tips Section */}
        <Text style={styles.sectionTitle}>Essential Winter Camping Tips</Text>
        {tips.map((tip, index) => (
          <View key={index} style={styles.tipContainer}>
            <Ionicons name="snow-outline" size={20} color="#2C4A60" />
            <Text style={styles.tipText}>{tip}</Text>
          </View>
        ))}

        {/* Safety Precautions */}
        <Text style={styles.sectionTitle}>Safety Precautions</Text>
        <Text style={styles.sectionText}>
          - Avoid camping near waterfalls like Hundru and Dassam Falls in case of slippery ground.{'\n'}
          - Make sure to carry plenty of water as some natural sources might freeze.{'\n'}
          - Carry a satellite phone or GPS as some areas in Ranchi may have limited signal.
        </Text>

        {/* Best Camping Locations */}
        <Text style={styles.sectionTitle}>Best Winter Camping Locations in Ranchi</Text>
        <View style={styles.locationContainer}>
          <Image
            source={{
              uri: 'https://kdpalace.com/wp-content/uploads/2021/04/Johna-Falls-And-Hundru-Falls-pic-2-640x256.jpeg',
            }}
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>Hundru Falls</Text>
        </View>
        <View style={styles.locationContainer}>
          <Image
            source={{
              uri: 'https://www.seawatersports.com/images/places/dasham-falls.jpg',
            }}
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>Dassam Falls</Text>
        </View>
        <View style={styles.locationContainer}>
          <Image
            source={{
              uri: 'https://www.jharkhand.me/images/Patratu-Valley-Ranchi-09.jpg',
            }}
            style={styles.locationImage}
          />
          <Text style={styles.locationName}>Patratu Valley</Text>
        </View>

        {/* Packing Essentials */}
        <Text style={styles.sectionTitle}>Packing Essentials for Ranchi</Text>
        <Text style={styles.sectionText}>
          - Insulated sleeping bags and thermal clothing.{'\n'}
          - A portable stove and enough firewood to last the cold nights.{'\n'}
          - Flashlights, headlamps, and backup batteries.
        </Text>
      </View>
    </ScrollView>
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
    left: 16,
    zIndex: 10,
    backgroundColor: '#000',
    borderRadius: 20,
    padding: 8,
  },
  headerContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 10,
    borderRadius: 5,
  },
  headerTitle: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2C4A60',
  },
  sectionText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 22,
    marginBottom: 20,
  },
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tipText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  locationContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  locationImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  locationName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
});

export default WinterCampingPage;
