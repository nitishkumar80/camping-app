import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

// Sample transport data (for demonstration purposes)
const transportOptions = [
  { id: '1', mode: 'Driving', estimatedTime: '1h 30m', details: 'Via NH43, toll road' },
  { id: '2', mode: 'Public Transport', estimatedTime: '2h 15m', details: 'Bus from Ranchi, then local transport' },
  { id: '3', mode: 'Walking', estimatedTime: '5h 30m', details: 'Scenic route via forest path' },
];

const availability = [
  { id: '1', time: '9:00 AM', availability: 'Available' },
  { id: '2', time: '12:00 PM', availability: 'Limited Seats' },
  { id: '3', time: '4:00 PM', availability: 'Unavailable' },
];

const TransportDetails: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Transport Options Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Transport Options</Text>
        <FlatList
          data={transportOptions}
          renderItem={({ item }) => (
            <View style={styles.optionCard}>
              <Ionicons name={item.mode === 'Driving' ? 'car' : item.mode === 'Public Transport' ? 'bus' : 'walk'} size={40} color="#4A90E2" />
              <View style={styles.optionDetails}>
                <Text style={styles.mode}>{item.mode}</Text>
                <Text style={styles.estimatedTime}>Estimated Time: {item.estimatedTime}</Text>
                <Text style={styles.routeDetails}>{item.details}</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      {/* Transport Availability Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitl}>Transport Availability</Text>
        <FlatList
          data={availability}
          renderItem={({ item }) => (
            <View style={styles.availabilityCard}>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={[styles.availabilityStatus, { color: item.availability === 'Unavailable' ? '#D9534F' : item.availability === 'Limited Seats' ? '#F0AD4E' : '#5CB85C' }]}>
                {item.availability}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
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
  section: {
    marginTop: 80,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  sectionTitl: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop:-70,
    color: '#333',
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  optionDetails: {
    marginLeft: 16,
  },
  mode: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  estimatedTime: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  routeDetails: {
    fontSize: 12,
    color: '#888',
  },
  availabilityCard: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  availabilityStatus: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default TransportDetails;
