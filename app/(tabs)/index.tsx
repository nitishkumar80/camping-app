import React, { useState, useEffect, useRef } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import icons from react-native-vector-icons

// Updated data with banner URLs
const dummyTrips = [
  {
    id: '4',
    location: 'Ranchi',
    title:'Patratu Valley',
    date: '2024-12-01',
    banner1:'https://i.pinimg.com/736x/02/0b/da/020bdaf82834af0bf347978822d97f79.jpg',
    banner: 'https://i.ibb.co/z6tkxGF/DALL-E-2024-10-07-00-56-05-A-captivating-landscape-banner-for-Patratu-Valley-Ranchi-The-image-should.webp',
  },
  {
    id: '2',
    location: ' Ranchi',
    date: '2024-09-12',
    title: 'Dassam Falls',
    banner1:'https://static.vecteezy.com/system/resources/thumbnails/049/386/590/small_2x/mountain-landscape-in-morning-vector.jpg',
    banner: 'https://i.ibb.co/CVTmjXS/DALL-E-2024-10-07-01-03-26-A-captivating-landscape-thumbnail-banner-for-Dassam-Falls-Ranchi-The-imag.webp',
  },
  {
    id: '1',
    location: ' Ranchi',
    title: 'Jonha Falls',
    date: '2024-11-05',
    banner1:'https://img.freepik.com/premium-photo/flat-vector-illustration-beautiful-natural-landscape-with-mountains-cartoon-style-with-simple-design_711472-380.jpg',
    banner: 'https://i.ibb.co/n8B7Y22/DALL-E-2024-10-07-00-41-05-A-detailed-and-captivating-landscape-banner-for-Jonha-Falls-Ranchi-It-sho.webp',
  },

  {
    id: '3',
    location: 'Ranchi',
    title: 'Hundru Falls',
    date: '2024-10-10',
    banner: 'https://i.ibb.co/YB3Gf80/DALL-E-2024-10-07-00-34-12-A-detailed-and-captivating-landscape-banner-for-Hundru-Falls-Ranchi-It-sh.webp',
    banner1:'https://img.freepik.com/premium-photo/flat-vector-illustration-beautiful-natural-landscape-with-mountains-cartoon-style-with-simple-design_711472-380.jpg',
  },
];

const recentCampsites = [
  {
    id: '3',
    name: 'Hundru Falls, Ranchi',
    banner: 'https://i.ibb.co/YB3Gf80/DALL-E-2024-10-07-00-34-12-A-detailed-and-captivating-landscape-banner-for-Hundru-Falls-Ranchi-It-sh.webp',
  },
  {
    id: '1',
    name: 'Jonha Falls, Ranchi',
    banner: 'https://i.ibb.co/n8B7Y22/DALL-E-2024-10-07-00-41-05-A-detailed-and-captivating-landscape-banner-for-Jonha-Falls-Ranchi-It-sho.webp',
  },
  {
    id: '2',
    name: 'Dassam Falls, Ranchi',
    banner: 'https://i.ibb.co/CVTmjXS/DALL-E-2024-10-07-01-03-26-A-captivating-landscape-thumbnail-banner-for-Dassam-Falls-Ranchi-The-imag.webp',
  },
];

const HomeScreen: React.FC = () => {
  const [featuredTip, setFeaturedTip] = useState<string>('Essential Gear for Winter Camping');
  const navigation = useNavigation(); // Access navigation prop
  const flatListRef = useRef<FlatList<any>>(null); // Ref for the FlatList
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (flatListRef.current) {
        // Move to the next index, or go back to the start if we're at the end
        const nextIndex = (currentIndex + 1) % dummyTrips.length;
        setCurrentIndex(nextIndex);
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [currentIndex]);

  const handleQuickAction = (action: string) => {
    if (action === 'LocationsScreen') {
      navigation.navigate('DetailLocation'); // Navigate to LocationsScreen
    } else if (action === 'PackingList') {
      navigation.navigate('PackingList'); // Navigate to PackingListScreen
    } else if (action === 'PlanTripScreen') {
      navigation.navigate('PlanTripScreen'); // Navigate to PlanTripScreen
    } else {
      console.log(`Navigating to ${action}`);
    }
  };

  const handleBannerClick = (trip: { id: string; location: string; date: string; description: string }) => {
    // Navigate to the Details screen and pass the trip data
    navigation.navigate('DetailsScreen', { trip });
  };

  const handleCampsiteClick = (campsite: { id: string; name: string; banner: string }) => {
    switch (campsite.id) {
      case '1':
        navigation.navigate('JonhaFallsPage');
        break;
      case '2':
        navigation.navigate('DassamFallsPage');
        break;
      case '3':
        navigation.navigate('HundruFallsPage');
        break;
      default:
        console.log('Campsite not found');
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://png.pngtree.com/thumb_back/fh260/back_our/20190614/ourmid/pngtree-fresh-and-simple-h5-background-app-guide-page-design-background-download-image_121781.jpg' }} // Add your background image here
      style={styles.background}
      resizeMode="cover"
      blurRadius={4}
    >
    <View style={styles.container}>
      {/* Popular Trips */}
      <Text style={styles.sectionTitle}>Popular</Text>
      <FlatList
        horizontal
        ref={flatListRef}
        data={dummyTrips}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleBannerClick(item)}>
            <View style={styles.tripItem}>
              <Image source={{ uri: item.banner }} style={styles.bannerImage} />
            </View>
          </TouchableOpacity>
        )}
        style={styles.list}
        showsHorizontalScrollIndicator={false}
      />

      {/* Recent Campsites */}
      <Text style={styles.sectionTitle}>Recommended</Text>
      <FlatList
        horizontal
        data={recentCampsites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCampsiteClick(item)}>
            <View style={styles.campsiteItem}>
              <Image source={{ uri: item.banner }} style={styles.bannerImage} />
              <Text style={styles.campsiteName}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        )}
        style={styles.list}
        showsHorizontalScrollIndicator={false}
      />

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions</Text>
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleQuickAction('PlanTripScreen')}>
          <Icon name="calendar-outline" size={20} color="#FFF" style={styles.icon} />
          <Text style={styles.actionText}>Plan a Trip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleQuickAction('PackingList')}>
          <Icon name="bag-outline" size={20} color="#FFF" style={styles.icon} />
          <Text style={styles.actionText}>View Packing List</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleQuickAction('LocationsScreen')}>
          <Icon name="map-outline" size={20} color="#FFF" style={styles.icon} />
          <Text style={styles.actionText}>Explore Locations</Text>
        </TouchableOpacity>
      </View>

      {/* Featured Tip */}
     {/* Featured Tip */}
<Text style={styles.sectionTitle}>Featured Survival Tip</Text>
<TouchableOpacity onPress={() => navigation.navigate('WinterCampingPage')}>
  <View style={styles.tipContainer}>
    <Text style={styles.tipText}>{featuredTip}</Text>
  </View>
</TouchableOpacity>

    
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  
  container: {
    flex: 1,
    padding: 6,
 color:'white',
    marginTop: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A4A4A',
    marginBottom: 12,
  },
  list: {
    marginBottom: 20,
  },
  tripItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    marginRight: 10,
    width: 250,
    height: 250,
    alignItems: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  campsiteItem: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 12,
    marginRight: 10,
    width: 200,
    height: 290,
  },
  campsiteName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginTop: 10,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'row',
    backgroundColor: '#25B6B0',
    padding: 15,
    borderRadius: 12,
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  actionText: {
    color: '#FFF',
    fontWeight: '600',
    marginLeft: 5,
  },
  icon: {
    marginRight: 5,
  },
  tipContainer: {
    padding: 12,
    backgroundColor: '#FFD54F',
    borderRadius: 12,
  },
  tipText: {
    fontSize: 16,
    color: '#4A4A4A',
  },
});

export default HomeScreen;
