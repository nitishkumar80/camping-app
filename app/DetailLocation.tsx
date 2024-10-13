import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Sample banners for each location
const landmarks = [
  {
    id: '1',
    name: 'Jonha Falls',
    description: 'A popular nearby waterfall.',
    banner: 'https://i.ytimg.com/vi/adqbuBiDLbM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCOOb5HBSlOJh0MSOYEdL1JqnrmvA',
    page: 'JonhaFallsPage', // Navigation target for this landmark
    latitude: 23.2895,
    longitude: 85.3284,
    backgroundColor: '#FFEBEE',
  },
  {
    id: '2',
    name: 'Dassam Falls',
    description: 'Another scenic waterfall close by.',
    banner: 'https://i.ytimg.com/vi/Llso9zGNVeE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCbfWfrgegIT_qrqaVYlTaE6X7nXQ',
    page: 'DassamFallsPage',
    latitude: 23.2346,
    longitude: 85.5163,
    backgroundColor: '#E8F5E9',
  },
  {
    id: '3',
    name: 'Ranchi Hill',
    description: 'Beautiful hill with a temple on top.',
    banner: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1l6F5f_3wENIN2M2s8mWsT1Gz_idUnfxSw&s',
    page: 'RanchiHillPage',
    latitude: 23.3441,
    longitude: 85.3095,
    backgroundColor: '#E3F2FD',
  },
];

const DetailLocation: React.FC = () => {
  const navigation = useNavigation();

  // Coordinates for Hundru Falls
  const location = {
    latitude: 23.3803,
    longitude: 85.3306,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Map View */}
      <MapView
        style={styles.map}
        initialRegion={location}
      >
        <Marker coordinate={location} title="Hundru Falls" description="Scenic waterfall in Ranchi." />
      </MapView>

      {/* Coordinates */}
      <View style={styles.coordinatesContainer}>
        <Text style={styles.coordinatesTitle}>Coordinates:</Text>
        <View style={styles.coordinatesRow}>
          {/* Latitude Card */}
          <View style={styles.coordinateCard}>
            <Ionicons name="location-outline" size={24} color="#FF5722" />
            <Text style={styles.coordinateText}>Lat: {location.latitude}° N</Text>
          </View>
          {/* Longitude Card */}
          <View style={styles.coordinateCard}>
            <Ionicons name="navigate-outline" size={24} color="#3F51B5" />
            <Text style={styles.coordinateText}>Long: {location.longitude}° E</Text>
          </View>
        </View>
      </View>

      {/* Nearby Landmarks */}
      <View style={styles.landmarksContainer}>
        <Text style={styles.landmarksTitle}>Nearby Landmarks</Text>
        <FlatList
          horizontal
          data={landmarks}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.landmarkCard, { backgroundColor: item.backgroundColor }]}
              onPress={() => navigation.navigate(item.page)} // Navigate to respective landmark page
            >
              <Image source={{ uri: item.banner }} style={styles.bannerImage} />
              <View style={styles.cardContent}>
                <Text style={styles.landmarkName}>{item.name}</Text>
                <Text style={styles.landmarkDescription}>{item.description}</Text>

                {/* Latitude and Longitude */}
                <View style={styles.coordinatesRow}>
                  <Ionicons name="location-outline" size={16} color="#FF5722" />
                  <Text style={styles.coordinateText}>Lat: {item.latitude}</Text>
                  <Ionicons name="navigate-outline" size={16} color="#3F51B5" />
                  <Text style={styles.coordinateText}>Long: {item.longitude}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginTop: 30,
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
  map: {
    width: '100%',
    height: 300,
    marginBottom: 16,
  },
  coordinatesContainer: {
    marginBottom: 16,
  },
  coordinatesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  coordinatesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  coordinateCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    padding: 10,
    borderRadius: 10,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  coordinateText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#333',
  },
  landmarksContainer: {
    marginBottom: 16,
  },
  landmarksTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  landmarkCard: {
    borderRadius: 10,
    marginRight: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    width: 250,
  },
  bannerImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 12,
  },
  landmarkName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  landmarkDescription: {
    fontSize: 14,
    color: '#666',
  },
  coordinateText: {
    fontSize: 12,
    color: '#555',
    marginLeft: 4,
    marginRight: 12,
  },
});

export default DetailLocation;
