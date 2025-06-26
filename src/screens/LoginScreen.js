import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { saveLogin } from '../utils/AuthService';
import { globalStyles } from '../styles/global';
import { colors, spacing } from '../styles/theme';

const validateCredentials = [
  { usuario: 'user1', senha: 'senha1' },
  { usuario: 'user2', senha: 'senha2' },
  { usuario: 'user3', senha: 'senha3' },
];

const windowWidth = Dimensions.get('window').width;

export default function LoginScreen({ navigation }) {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async () => {
      if (usuario.length === 0 || senha.length === 0) {
          Alert.alert('Erro', 'Por favor, preencha todos os campos.');
          return;
      }

      const isValidCredential = validateCredentials.some(
        (credencial) => credencial.usuario === usuario && credencial.senha === senha
      );

      if (isValidCredential) {
          const success = await saveLogin(usuario, senha);
        if (success) {
          Alert.alert('Sucesso', 'Login realizado!');
          navigation.replace('Home');
        } else {
          Alert.alert('Erro', 'Não foi possível salvar o login localmente.');
        }
      } else {
        Alert.alert('Erro de Login', 'Usuário ou senha inválidos.');
      }
    }

    return (
        <View style={globalStyles.screenContainer}>
            <View style={styles.loginArea}>
                <Text style={[globalStyles.title, styles.title]}>Login</Text>
                
                <TextInput
                    style={globalStyles.input}
                    placeholder="Nome de usuário"
                    placeholderTextColor={colors.placeholder}
                    value={usuario}
                    onChangeText={setUsuario}
                />
                
                <TextInput
                    style={globalStyles.input}
                    placeholder="Senha"
                    placeholderTextColor={colors.placeholder}
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
                
                <TouchableOpacity
                    style={globalStyles.button}
                    onPress={handleLogin}
                >
                    <Text style={globalStyles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  loginArea: {
    width: windowWidth * 0.85,
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: spacing.large,
    elevation: 3,
  },
  title: {
    textAlign: 'center',
    marginBottom: spacing.xlarge,
  },
});
