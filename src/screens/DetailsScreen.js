import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { colors } from '../styles/theme';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={globalStyles.screenContainer}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Detalhes</Text>

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.replace('Home')}
        >
          <Text style={globalStyles.buttonText}>Voltar para Início</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[globalStyles.button, styles.profileButton]}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={globalStyles.buttonText}>Ver Perfil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileButton: {
    backgroundColor: colors.secondary,
  },
});
