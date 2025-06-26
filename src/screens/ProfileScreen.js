import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { colors } from '../styles/theme';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={globalStyles.screenContainer}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Meu Perfil</Text>

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.replace('Home')}
        >
          <Text style={globalStyles.buttonText}>Voltar para Início</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[globalStyles.button, styles.detailsButton]}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={globalStyles.buttonText}>Ver Detalhes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsButton: {
    backgroundColor: colors.secondary,
  },
});
