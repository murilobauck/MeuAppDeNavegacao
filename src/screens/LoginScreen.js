import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity, Alert } from 'react-native';
import { saveLogin } from '../utils/AuthService';

const windowWidth = Dimensions.get('window').width;

const validateCredentials = [
  { usuario: 'user1', senha: 'senha1' },
  { usuario: 'user2', senha: 'senha2' },
  { usuario: 'user3', senha: 'senha3' },
];

export default function TelaLogin({ navigation }) {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async () => {
      if (usuario.lenghth === 0 || senha.length === 0) {
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
        <View style={estilos.container}>
            <View style={estilos.areaLogin}>
                <Text style={estilos.titulo}>Login</Text>
                
                <TextInput
                    style={estilos.input}
                    placeholder="Nome de usuário"
                    placeholderTextColor="#999"
                    value={usuario}
                    onChangeText={setUsuario}
                />
                
                <TextInput
                    style={estilos.input}
                    placeholder="Senha"
                    placeholderTextColor="#999"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />
                
                <TouchableOpacity
                    style={estilos.botao}
                    onPress={handleLogin}
                >
                    <Text style={estilos.textoBotao}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    areaLogin: {
        width: windowWidth * 0.8,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        elevation: 3,
    },
    titulo: {
        fontSize: 24,
        color: '#1e3a8a',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    botao: {
        height: 50,
        backgroundColor: '#1e3a8a',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});