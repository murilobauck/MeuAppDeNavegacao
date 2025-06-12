import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { loginVerification, saveLogin } from '../LoginVerify';

const windowWidth = Dimensions.get('window').width;

export default function TelaLogin({ navigation }) {
    const [login, setlogin] = useState("");
    const [senha, setSenha] = useState("");

    useEffect(() => {
      verificarLogin(navigation);
    }, []);

    const verificarLogin = () => {
      if (login === "admin" && senha === "123") {
      saveLogin(login, senha);
      navigation.navigate('Home');
      } else {
        alert("Usuário ou senha incorretos");
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
                    value={login}
                    onChangeText={setlogin}
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
                    onPress={() => verificarLogin() && navigation.navigate('Home')}
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