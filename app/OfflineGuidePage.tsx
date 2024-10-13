import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const OfflineGuidePage: React.FC = () => {
  const navigation = useNavigation();

  // Sample data for YouTube videos and guide details
  const guideData = [
    { id: '1', title: 'Fire Starting Techniques', videoUrl: 'https://youtu.be/BKnMB-T5VFI?si=hhYVtkflMbXuiqHf', description: 'Learn how to start a fire with different techniques using natural materials.' },
    { id: '2', title: 'Building a Shelter', videoUrl: 'https://www.youtube.com/watch?v=example2', description: 'Discover ways to construct a stable shelter in various environments.' },
    { id: '3', title: 'Water Purification', videoUrl: 'https://www.youtube.com/watch?v=example3', description: 'Understand the methods for filtering and purifying water in the wild.' },
  ];

  // Render card for each guide item
  const renderGuideCard = (item: any) => (
    <View key={item.id} style={styles.card}>
      <Ionicons name="play-circle-outline" size={30} color="#2C4A60" style={styles.icon} />
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.videoButton} onPress={() => alert(`Open video: ${item.videoUrl}`)}>
        <Text style={styles.videoButtonText}>Watch Video</Text>
      </TouchableOpacity>
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
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrmQsvfaomJ7UMtxeCDTAGLDfWLzOuObQ5mZL6j-TYSBsykCtzSKQ7Jn9dUeDTywCNYQY&usqp=CAU' }} // Replace with your image URL
            style={styles.topImage}
            resizeMode="cover"
          />
          <View style={styles.titleOverlay}>
            <Text style={styles.titleText}>Offline Guide</Text>
          </View>
        </View>

        {/* Guide Cards */}
        <View style={styles.cardsContainer}>
          {guideData.map(renderGuideCard)}
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
  videoButton: {
    backgroundColor: '#2C4A60',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  videoButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default OfflineGuidePage;
