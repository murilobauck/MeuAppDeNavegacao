import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { colors } from '../styles/theme';
import { loadLogin } from '../utils/AuthService';

export default function ProfileScreen({ navigation }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await loadLogin();
      setUserInfo(data);
    };
    fetchUserInfo();
  }, []);

  return (
    <View style={globalStyles.screenContainer}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Meu Perfil</Text>

        {userInfo && (
          <Text style={globalStyles.userText}>
            Logado como: <Text style={globalStyles.userName}>{userInfo.usuario}</Text>
          </Text>
        )}

        <TouchableOpacity
          style={globalStyles.button}
          onPress={() => navigation.navigate('Home')}
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
