import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, ImageBackground, Linking, Modal } from 'react-native';

const LoginSignupScreen = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    clearForm();
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setName('');
  };

  const handleFormSubmit = () => {
    if (isLogin) {
      alert('Logging In...');
    } else {
      if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      alert('Signing Up...');
    }
  };

  const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error("Failed to open URL:", err));
  };

  const handleFeedbackSubmit = () => {
    const feedbackUrl = `https://www.w3forms.com/form-url?message=${encodeURIComponent(feedbackMessage)}`;
    openURL(feedbackUrl);
    setFeedbackVisible(false); // Close the modal after submitting
  };

  return (
    <ImageBackground
      source={{ uri: 'https://plus.unsplash.com/premium_photo-1673126683359-83a3c1481e7a?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2VvbWV0cmljJTIwYWJzdHJhY3R8ZW58MHx8MHx8fDA%3D' }}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView style={styles.container}>
        <View style={styles.topImageContainer}>
          <Image
            source={{ uri: 'https://t3.ftcdn.net/jpg/02/92/90/56/360_F_292905667_yFUJNJPngYeRNlrRL4hApHWxuYyRY4kN.jpg' }}
            style={styles.topImage}
          />
          {/* Social Media Icons */}
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => openURL('https://www.linkedin.com/in/nitish-mehta-ab9287220/')}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' }}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openURL('https://www.instagram.com/__nitishmehta__/')}>
              <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png' }}
                style={styles.socialIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openURL('mailto:nitishmehta2023@outlook.com')}>
  <Image
    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaP23uZPuHw9bcX1H0n8FxTD_EU3O3rRNhYg&s' }}
    style={styles.socialIcon}
  />
</TouchableOpacity>


          </View>

          <View style={styles.overlayTextContainer}>
            <Text style={styles.overlayText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          {!isLogin && (
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Name"
              placeholderTextColor="#ddd"
            />
          )}
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#ddd"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#ddd"
          />
          {!isLogin && (
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              secureTextEntry
              placeholderTextColor="#ddd"
            />
          )}
          <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
            <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Sign Up'}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleForm}>
            <Text style={styles.toggleText}>
              {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
            </Text>
          </TouchableOpacity>

          {isLogin && (
            <TouchableOpacity>
              <Text style={styles.text}>Forgot Password?</Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Feedback Button */}
        <TouchableOpacity style={styles.feedbackButton} onPress={() => setFeedbackVisible(true)}>
          <Text style={styles.buttonText}>Send Feedback</Text>
        </TouchableOpacity>

        {/* Feedback Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={feedbackVisible}
          onRequestClose={() => setFeedbackVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.overlayText}>Feedback</Text>
              <TextInput
                style={styles.input}
                value={feedbackMessage}
                onChangeText={setFeedbackMessage}
                placeholder="Write your feedback here"
                placeholderTextColor="#ddd"
                multiline
              />
              <TouchableOpacity style={styles.button} onPress={handleFeedbackSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setFeedbackVisible(false)}>
                <Text style={styles.toggleText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Text style={styles.Text}>Designed by Nitish Mehta</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  iconContainer: {
    position: 'relative',
   top: -50,
   left:90,
    flexDirection: 'row',
  },
  socialIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
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
    top: 100,
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
    textDecorationLine: 'underline',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  Text: {
    fontSize: 15,
    color: 'white',
    margin: 'auto',
    position: 'relative',
    top: 160,
  },
  button: {
    backgroundColor: '#025E73',
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  feedbackButton: {
    backgroundColor: '#FF6347',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#25B6B0',
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default LoginSignupScreen;
