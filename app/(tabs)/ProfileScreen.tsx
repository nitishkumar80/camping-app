import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';

const LoginSignupScreen = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState(''); // For signup

  // Switch between login and signup forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
    clearForm();
  };

  // Clear form fields
  const clearForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://plus.unsplash.com/premium_photo-1673126683359-83a3c1481e7a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2VvbWV0cmljJTIwYWJzdHJhY3R8ZW58MHx8MHx8fDA%3D' }} // Replace with your background image URL
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView style={styles.container}>
        {/* Top Background Image with Text Overlay */}
        <View style={styles.topImageContainer}>
          <Image
            source={{ uri: 'https://t3.ftcdn.net/jpg/02/92/90/56/360_F_292905667_yFUJNJPngYeRNlrRL4hApHWxuYyRY4kN.jpg' }} // Replace with your secondary top image URL
            style={styles.topImage}
          />
          {/* Text Overlay */}
          <View style={styles.overlayTextContainer}>
            <Text style={styles.overlayText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          {/* Name Input for Signup */}
          {!isLogin && (
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Name"
            />
          )}

          {/* Email Input */}
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
          />

          {/* Password Input */}
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />

          {/* Confirm Password Input for Signup */}
          {!isLogin && (
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              secureTextEntry
            />
          )}

          {/* Login/Signup Button */}
          <Button
            title={isLogin ? 'Login' : 'Sign Up'}
            onPress={() => alert(isLogin ? 'Logging In...' : 'Signing Up...')}
          />

          {/* Toggle Between Login and Signup */}
          <TouchableOpacity onPress={toggleForm}>
            <Text style={styles.toggleText}>
              {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
            </Text>
          </TouchableOpacity>

          {/* Forgot Password Link */}
          {isLogin && (
            <TouchableOpacity>
              <Text style={styles.text}>Forgot Password?</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional to add a darker overlay over the background image
  },
  topImageContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  topImage: {
    width: '100%',
    height: 250,
  },
  overlayTextContainer: {
    position: 'absolute',
    top: 100, // Adjust positioning as needed
    left: '50%',
    transform: [{ translateX: -50 }],
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#25B6B0',
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: -40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 20,
    padding: 10,
    fontSize: 16,
    color: 'white',
  },
  toggleText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: 'underline !important', // No !important needed
  },
  text: {
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: 'underline !important', // No !important needed
  },
});


export default LoginSignupScreen;
