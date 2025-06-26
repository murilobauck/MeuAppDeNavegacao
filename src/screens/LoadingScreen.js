import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { checkLoginStatus } from '../utils/AuthService';
import { globalStyles } from '../styles/global';
import { colors, fonts, spacing } from '../styles/theme';

export default function LoadingScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const checkAuth = async () => {
      const isLoggedIn = await checkLoginStatus();
      setTimeout(() => {
        navigation.replace(isLoggedIn ? 'Home' : 'Login');
      }, 1000);
    };

    checkAuth();
  }, [navigation]);

  return (
    <View style={globalStyles.screenContainer}>
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={styles.text}>Carregando...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: spacing.medium,
    fontSize: fonts.size.large,
    color: colors.textSecondary,
  },
});
