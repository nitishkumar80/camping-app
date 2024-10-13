import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import an icon library like Ionicons

const PlanTripScreen: React.FC = () => {
  const [tripLocation, setTripLocation] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const navigation = useNavigation(); // Get the navigation object

  const handlePlanTrip = () => {
    // Handle trip planning logic here, e.g., saving the trip details.
    console.log('Trip Location:', tripLocation);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>

      <Text style={styles.title}>Plan a New Trip</Text>

      {/* Trip Location */}
      <Text style={styles.label}>Trip Location:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Trip Location"
        value={tripLocation}
        onChangeText={setTripLocation}
      />

      {/* Trip Start Date */}
      <Text style={styles.label}>Start Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Start Date (YYYY-MM-DD)"
        value={startDate}
        onChangeText={setStartDate}
      />

      {/* Trip End Date */}
      <Text style={styles.label}>End Date:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter End Date (YYYY-MM-DD)"
        value={endDate}
        onChangeText={setEndDate}
      />

      {/* Plan Trip Button */}
      <Button title="Plan Trip" onPress={handlePlanTrip} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#AEC1BA',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#4A4A4A',
    marginTop: 60,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A4A4A',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 15,
  },
});

export default PlanTripScreen;
