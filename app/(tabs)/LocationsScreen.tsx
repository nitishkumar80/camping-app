import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons'; // For icons
import { FontAwesome } from 'react-native-vector-icons'; // For rating stars
import { useNavigation } from '@react-navigation/native'; // For navigation

// Types for Campsites
interface Campsite {
  id: string;
  name: string;
  location: string;
  amenities: string;
  activities: string[];
  latitude: number;
  longitude: number;
  rating: number;
}

// Dummy data for campsites
const recommendedCampsites: Campsite[] = [
  {
    id: '1',
    name: 'Jonha Falls',
    location: 'Ranchi, Jharkhand',
    amenities: 'Restroom, Picnic Area',
    activities: ['Trekking', 'Swimming'],
    latitude: 23.2654,
    longitude: 85.4641,
    rating: 4.7,
  },
  {
    id: '2',
    name: 'Patratu Valley',
    location: 'Ranchi, Jharkhand',
    amenities: 'Restroom, Picnic Area, Water',
    activities: ['Trekking', 'Boating', 'Photography'],
    latitude: 23.6207,
    longitude: 85.2775,
    rating: 4.8,
  },
  {
    id: '3',
    name: 'Ranchi Hill',
    location: 'Ranchi, Jharkhand',
    amenities: 'Restroom, Picnic Area',
    activities: ['Hiking', 'Photography'],
    latitude: 23.3441,
    longitude: 85.3095,
    rating: 4.5,
  },
];

const LocationsScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredCampsites, setFilteredCampsites] = useState<Campsite[]>(recommendedCampsites);
  const navigation = useNavigation(); // Hook to get navigation object

  // Search function to filter campsites by name or location
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = recommendedCampsites.filter((campsite) =>
      campsite.name.toLowerCase().includes(query.toLowerCase()) ||
      campsite.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCampsites(filtered);
  };

  // Function to navigate to the correct fall page based on the campsite ID
  const navigateToFallPage = (id: string) => {
    switch (id) {
      case '3': // Ranchi Hill
        navigation.navigate('RanchiHillPage');
        break;
      case '1': // Jonha Falls
        navigation.navigate('JonhaFallsPage');
        break;
      case '2': // Patratu Valley
        navigation.navigate('PatratuValleyPage');
        break;
      default:
        alert('Page not found');
    }
  };

  // Function to render stars based on the rating
  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesome
          key={i}
          name={i <= rating ? 'star' : 'star-o'} // Filled star for rating, empty star otherwise
          size={16}
          color="#FFD700" // Gold color for stars
        />
      );
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      {/* Back Icon */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      {/* Search Bar */}
      <TextInput
        placeholder="Search campsites or trails..."
        style={styles.searchBar}
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {/* Map View */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 23.3441, // Centered around Ranchi
          longitude: 85.3096,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {filteredCampsites.map((campsite) => (
          <Marker
            key={campsite.id}
            coordinate={{ latitude: campsite.latitude, longitude: campsite.longitude }}
            title={campsite.name}
            description={campsite.location}
          />
        ))}
      </MapView>

      {/* Recommended Campsites */}
      <Text style={styles.sectionTitle}>Recommended Campsites</Text>
      <FlatList
        data={filteredCampsites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToFallPage(item.id)}>
            <View style={styles.campsiteItem}>
              {/* Icon and Name */}
              <View style={styles.campsiteHeader}>
                <Ionicons name="location-outline" size={24} color="#2C4A60" />
                <Text style={styles.campsiteName}>{item.name}</Text>
              </View>

              {/* Amenities and Location */}
              <Text style={styles.campsiteInfo}>Amenities: {item.amenities}</Text>
              <Text style={styles.campsiteInfo}>Location: {item.location}</Text>

              {/* Rating with stars */}
              <View style={styles.ratingContainer}>
                {renderRatingStars(item.rating)}
                <Text style={styles.ratingText}>{item.rating}/5</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#AEC1BA',
    marginTop: 40,
  },
  backButton: {
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  searchBar: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
    padding: 10,
  },
  map: {
    width: '100%',
    height: 250,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  campsiteItem: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  campsiteHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  campsiteName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  campsiteInfo: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 5,
  },
});

export default LocationsScreen;
