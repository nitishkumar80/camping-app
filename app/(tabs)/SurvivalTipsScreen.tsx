import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SurvivalPage: React.FC = () => {
  const navigation = useNavigation();

  // Function to handle navigation to different pages
  const navigateToPage = (page: string) => {
    navigation.navigate(page);
  };

  // Card data for the five sections
  const cardData = [
    { id: '1', name: 'Offline Guide', icon: 'book-outline', page: 'OfflineGuidePage' },
    { id: '2', name: 'Emergency Info', icon: 'alert-circle-outline', page: 'EmergencyPage' },
    { id: '3', name: 'Wildlife Guide', icon: 'paw-outline', page: 'WildlifePage' },
    { id: '4', name: 'Survival Tips', icon: 'compass-outline', page: 'SurvivalTipsPage' },
    { id: '5', name: 'Camping Gear', icon: 'bonfire-outline', page: 'CampingGearPage' },
  ];

  // Render individual card
  const renderCard = (item: any) => (
    <TouchableOpacity key={item.id} style={styles.card} onPress={() => navigateToPage(item.page)}>
      <Ionicons name={item.icon} size={30} color="#2C4A60" />
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Image */}
      <Image
        source={{ uri: 'https://www.shutterstock.com/image-vector/sunset-vector-background-beautiful-landscape-260nw-2004648149.jpg' }} // Replace with your image URL
        style={styles.topImage}
        resizeMode="cover"
      />

      {/* Cards Section */}
      <View style={styles.cardsContainer}>
        {cardData.map(renderCard)}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF3F8',
    padding: 20,
  },
  topImage: {
    width: '100%',
    height: 200,
   resizeMode: 'cover',
    marginBottom: 20,
  },
  cardsContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  card: {
    width: '45%',
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  cardText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SurvivalPage;
