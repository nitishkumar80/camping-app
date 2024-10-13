import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const CampingGearPage: React.FC = () => {
  const navigation = useNavigation();

  // Sample data for camping gear
  const campingGear = [
    { id: '1', title: 'Tent', details: 'A high-quality waterproof tent to keep you dry and safe.', icon: 'bed-outline' },
    { id: '2', title: 'Sleeping Bag', details: 'Warm and comfortable sleeping bag suitable for cold temperatures.', icon: 'snow-outline' },
    { id: '3', title: 'Backpack', details: 'Durable backpack with plenty of space for all your essentials.', icon: 'bag-outline' },
    { id: '4', title: 'Cooking Stove', details: 'Portable camping stove for cooking meals in the wilderness.', icon: 'flame-outline' },
    { id: '5', title: 'First Aid Kit', details: 'Essential medical supplies for treating minor injuries.', icon: 'medkit-outline' },
  ];

  // Render card for each camping gear item
  const renderCampingGearCard = (item: any) => (
    <View key={item.id} style={styles.card}>
      <Ionicons name={item.icon} size={30} color="#2C4A60" style={styles.icon} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.details}</Text>
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
            source={{ uri: 'https://img.freepik.com/premium-photo/travel-background-with-camping-equipment-forest_974629-37786.jpg' }} // Replace with your image URL
            style={styles.topImage}
            resizeMode="cover"
          />
          <View style={styles.titleOverlay}>
            <Text style={styles.titleText}>Camping Gear</Text>
          </View>
        </View>

        {/* Camping Gear Cards */}
        <View style={styles.cardsContainer}>
          {campingGear.map(renderCampingGearCard)}
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

export default CampingGearPage;
