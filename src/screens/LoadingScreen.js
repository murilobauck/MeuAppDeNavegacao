// src/screens/LoadingScreen.js
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { checkLoginStatus } from '../utils/AuthService';

export default function LoadingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuth = async () => {
      const isLoggedIn = await checkLoginStatus();
      setTimeout(() => {
        if (isLoggedIn) {
          navigation.replace('Home');
        } else {
          navigation.replace('Login');
        }
      }, 1000);
    };

    checkAuth();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#007bff" />
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    color: '#333',
  },
});