import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SurvivalTipsPage: React.FC = () => {
  const navigation = useNavigation();

  // Sample data for survival tips
  const survivalTips = [
    { id: '1', title: 'Fire Starting', details: 'Carry a fire starter kit for emergencies and practice starting fires with natural materials.', icon: 'flame-outline' },
    { id: '2', title: 'Water Purification', details: 'Know how to purify water by boiling, using purification tablets, or portable filters.', icon: 'water-outline' },
    { id: '3', title: 'Shelter Building', details: 'Learn to build a shelter using materials found in the wild to protect yourself from the elements.', icon: 'home-outline' },
    { id: '4', title: 'First Aid', details: 'Carry a first aid kit and know basic first aid procedures for common outdoor injuries.', icon: 'medkit-outline' },
    { id: '5', title: 'Navigation', details: 'Use a map and compass for navigation, and always be aware of your surroundings.', icon: 'compass-outline' },
  ];

  // Render card for each survival tip
  const renderSurvivalTipCard = (item: any) => (
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
            source={{ uri: 'https://img.freepik.com/free-vector/flat-adventure-background_23-2149042744.jpg' }} // Replace with your image URL
            style={styles.topImage}
            resizeMode="cover"
          />
          <View style={styles.titleOverlay}>
            <Text style={styles.titleText}>Survival Tips</Text>
          </View>
        </View>

        {/* Survival Tips Cards */}
        <View style={styles.cardsContainer}>
          {survivalTips.map(renderSurvivalTipCard)}
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

export default SurvivalTipsPage;
