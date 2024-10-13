import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

// Define types for weather data
interface CurrentWeather {
  temperature: number;
  humidity: number;
  windSpeed: number;
  condition: string;
}

interface ForecastItem {
  day: string;
  temperature: number;
  condition: string;
}

interface WeatherData {
  current: CurrentWeather;
  forecast: ForecastItem[];
  warnings: string;
}

// Sample weather data (for demonstration purposes)
const sampleWeather: WeatherData = {
  current: {
    temperature: 25,
    humidity: 65,
    windSpeed: 10,
    condition: 'Sunny',
  },
  forecast: [
    { day: 'Monday', temperature: 28, condition: 'Cloudy' },
    { day: 'Tuesday', temperature: 30, condition: 'Sunny' },
    { day: 'Wednesday', temperature: 26, condition: 'Rainy' },
    { day: 'Thursday', temperature: 27, condition: 'Sunny' },
    { day: 'Friday', temperature: 25, condition: 'Cloudy' },
    { day: 'Saturday', temperature: 24, condition: 'Rainy' },
    { day: 'Sunday', temperature: 23, condition: 'Sunny' },
  ],
  warnings: 'No weather warnings at the moment.',
};

const WeatherDetails: React.FC = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData>(sampleWeather);

  // Function to simulate refreshing weather data
  const refreshWeather = () => {
    setLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setWeatherData({
        ...sampleWeather,
        current: {
          ...sampleWeather.current,
          temperature: sampleWeather.current.temperature + 1, // Just simulating a data change
        },
      });
      setLoading(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Current Weather Section */}
      <View style={styles.currentWeatherContainer}>
        <Text style={styles.currentTitle}>Current Weather</Text>
        <Text style={styles.condition}>{weatherData.current.condition}</Text>
        <Text style={styles.temperature}>{weatherData.current.temperature}°C</Text>
        <Text style={styles.details}>Humidity: {weatherData.current.humidity}%</Text>
        <Text style={styles.details}>Wind Speed: {weatherData.current.windSpeed} km/h</Text>
      </View>

      {/* 7-Day Forecast Section */}
      <View style={styles.forecastContainer}>
        <Text style={styles.forecastTitle}>7-Day Forecast</Text>
        <FlatList
          data={weatherData.forecast}
          renderItem={({ item }) => (
            <View style={styles.forecastCard}>
              <Text style={styles.day}>{item.day}</Text>
              <Text style={styles.forecastDetails}>{item.temperature}°C - {item.condition}</Text>
            </View>
          )}
          keyExtractor={(item) => item.day}
        />
      </View>

      {/* Weather Warnings Section */}
      <View style={styles.warningsContainer}>
        <Text style={styles.warningsTitle}>Weather Warnings</Text>
        <Text style={styles.warningText}>{weatherData.warnings}</Text>
      </View>

      {/* Refresh Button */}
      {loading ? (
        <ActivityIndicator size="large" color="#4A90E2" />
      ) : (
        <Button title="Refresh Weather" onPress={refreshWeather} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:50,
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
  currentWeatherContainer: {
    padding: 16,
    backgroundColor: '#E6F7FF',
    borderRadius: 10,
    marginBottom: 16,
    alignItems: 'center',
  },
  currentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  condition: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginVertical: 8,
  },
  details: {
    fontSize: 16,
    color: '#666',
  },
  forecastContainer: {
    marginBottom: 16,
  },
  forecastTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  forecastCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  day: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  forecastDetails: {
    fontSize: 14,
    color: '#666',
  },
  warningsContainer: {
    backgroundColor: '#FFEFD5',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  warningsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  warningText: {
    fontSize: 14,
    color: '#D9534F',
  },
});

export default WeatherDetails;
