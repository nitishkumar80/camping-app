import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, FlatList, StyleSheet, ScrollView } from 'react-native';

// Dummy data for trip history
const tripHistory = [
  { id: '1', location: 'Yosemite National Park', date: '2024-10-10', activities: 'Hiking, Photography' },
  { id: '2', location: 'Grand Canyon', date: '2024-11-05', activities: 'Camping, Rafting' },
  { id: '3', location: 'Patratu Valley', date: '2024-09-15', activities: 'Boating, Trekking' },
];

// Dummy data for packing lists
const packingLists = [
  { id: '1', title: 'Weekend Camping' },
  { id: '2', title: 'Survival Trip' },
  { id: '3', title: 'Family Camping Trip' },
];

const ProfileScreen = () => {
  const [name, setName] = useState('Nitish');
  const [email, setEmail] = useState('nitish@gmail.com');
  const [profilePicture, setProfilePicture] = useState('https://via.placeholder.com/100'); // Placeholder image

  // Function to render trip history items
  const renderTripHistoryItem = ({ item }) => (
    <View style={styles.historyItem}>
      <Text style={styles.listTitle}>{item.location}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Activities: {item.activities}</Text>
    </View>
  );

  // Function to render saved packing lists
  const renderPackingListItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      {/* Top Background Image */}
      <View style={styles.topImageContainer}>
        <Image
          source={{ uri: 'https://img.freepik.com/fotos-premium/hombre-acampando_26791-3190.jpg?w=360' }} // Replace with your background image URL
          style={styles.topImage}
        />
        {/* Profile Picture */}
        <View style={styles.profilePictureContainer}>
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        </View>
      </View>

      {/* User Information Section */}
      <View style={styles.profileSection}>
        <Text style={styles.sectionTitle}>User Information</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Name" />
        <TextInput style={styles.input} value={email} onChangeText={setEmail} placeholder="Email" />
        <Button title="Change Profile Picture" onPress={() => alert('Change Picture')} />
      </View>

      {/* Trip History Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trip History</Text>
        <FlatList
          data={tripHistory}
          keyExtractor={(item) => item.id}
          renderItem={renderTripHistoryItem}
        />
      </View>

      {/* Saved Packing Lists Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Saved Packing Lists</Text>
        <FlatList
          data={packingLists}
          keyExtractor={(item) => item.id}
          renderItem={renderPackingListItem}
        />
        <Button title="Manage Packing Lists" onPress={() => alert('Manage Packing Lists')} />
      </View>

      {/* Settings Section */}
     

      {/* Feedback Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Feedback</Text>
        <Button title="Submit Feedback" onPress={() => alert('Submit Feedback')} />
        <Button title="Report an Issue" onPress={() => alert('Report an Issue')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AEC1BA',
  },
  topImageContainer: {
    position: 'relative',
  },
  topImage: {
    width: '100%',
    height: 200,
  },
  profilePictureContainer: {
    position: 'absolute',
    bottom: -50,
    left: '50%',
    transform: [{ translateX: -50 }],
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
    padding: 8,
    width: '100%',
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#59917C',
    marginBottom: 10,
    borderRadius: 8,
  },
  historyItem: {
    padding: 10,
    backgroundColor: '#59917C',
    marginBottom: 10,
    borderRadius: 8,
  },
  listTitle: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ProfileScreen;
