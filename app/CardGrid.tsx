import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importing icons from react-native-vector-icons
import { useNavigation } from '@react-navigation/native';
const CardGrid: React.FC = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Location Card */}
        <TouchableOpacity onPress={() => navigation.navigate('DetailLocation')}>
  <View style={styles.card}>
    <Icon name="location-outline" size={80} color="#4A90E2" />
    <Text style={styles.cardTitle}>Location</Text>
  </View>
</TouchableOpacity>


        {/* Weather Card */}
        <TouchableOpacity onPress={() => navigation.navigate('WeatherDetails')} style={styles.card}>
          <Icon name="cloud-outline" size={80} color="#4A90E2" />
          <Text style={styles.cardTitle}>Weather</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {/* Packing List Card */}
        <TouchableOpacity onPress={() => navigation.navigate('PackingList')} style={styles.card}>
          <Icon name="bag-outline" size={80} color="#4A90E2" />
          <Text style={styles.cardTitle}>Packing List</Text>
        </TouchableOpacity>

        {/* Transport Card */}
        <TouchableOpacity onPress={() => navigation.navigate('TransportDetails')} style={styles.card}>
          <Icon name="car-outline" size={80} color="#4A90E2" />
          <Text style={styles.cardTitle}>Transport</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 155,
    borderRadius:10,
    backgroundColor: '#f5f5f5',
   
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 170,
    gap:30,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 12,
    padding: 20,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
   
  },
  cardTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#2C4A60',
  },
});

export default CardGrid;
