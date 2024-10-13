import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const EmergencyInfoPage: React.FC = () => {
  const navigation = useNavigation();

  // Sample data for emergency information
  const emergencyData = [
    { id: '1', title: 'Yellowstone National Park', contact: 'Ranger Station: (406) 344-7381', icon: 'call-outline' },
    { id: '2', title: 'Yosemite National Park', contact: 'Ranger Station: (209) 372-0200', icon: 'call-outline' },
    { id: '3', title: 'Grand Canyon National Park', contact: 'Medical Services: (928) 638-2551', icon: 'medkit-outline' },
  ];

  // Render card for each emergency item
  const renderEmergencyCard = (item: any) => (
    <View key={item.id} style={styles.card}>
      <Ionicons name={item.icon} size={30} color="#2C4A60" style={styles.icon} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.contact}</Text>
    </View>
  );

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
            source={{ uri: 'https://media.istockphoto.com/id/1270959535/vector/abstract-health-care-emergency-paramedic-concept-design-background.jpg?s=612x612&w=0&k=20&c=ZTdjYSuVhV3rh6f1zsWMZeYTLIbOfEZRCR5CxSMjbLg=' }} // Replace with your image URL
            style={styles.topImage}
            resizeMode="cover"
          />
          <View style={styles.titleOverlay}>
            <Text style={styles.titleText}>Emergency Information</Text>
          </View>
        </View>

        {/* Emergency Cards */}
        <View style={styles.cardsContainer}>
          {emergencyData.map(renderEmergencyCard)}
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
  cardsContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  icon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C4A60',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
});

export default EmergencyInfoPage;
