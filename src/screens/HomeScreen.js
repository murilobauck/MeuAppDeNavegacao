import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { loadLogin, clearLogin } from '../utils/AuthService';
import { globalStyles } from '../styles/global';
import { colors } from '../styles/theme';

export default function HomeScreen({ navigation }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await loadLogin();
      setUserInfo(data);
    };
    fetchUserInfo();
  }, []);

  const handleLogout = async () => {
    Alert.alert(
      "Sair",
      "Tem certeza que deseja sair?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sair",
          onPress: async () => {
            const success = await clearLogin();
            if (success) {
              Alert.alert('Logout', 'Você foi desconectado.');
              navigation.replace('Login');
            } else {
              Alert.alert('Erro', 'Não foi possível fazer logout.');
            }
          }
        }
      ]
    );
  };

  return (
    <View style={globalStyles.screenContainer}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Bem-vindo</Text>
        
        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.navigate('Details')}
        >
          <Text style={globalStyles.buttonText}>Ver Detalhes</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={globalStyles.button}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={globalStyles.buttonText}>Meu Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[globalStyles.button, styles.buttonExit]}
          onPress={handleLogout}
        >
          <Text style={globalStyles.buttonText}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonExit: {
    backgroundColor: colors.danger,
  },
});
