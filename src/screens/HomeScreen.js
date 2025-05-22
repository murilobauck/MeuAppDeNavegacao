import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Bem-vindo</Text>
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Details')}
                >
                    <Text style={styles.buttonText}>Ver Detalhes</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Text style={styles.buttonText}>Meu Perfil</Text>
                </TouchableOpacity>
            </View>
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
    card: {
        width: windowWidth * 0.8,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 25,
        elevation: 3,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        color: '#1e3a8a',
        marginBottom: 30,
        fontWeight: 'bold',
    },
    button: {
        width: windowWidth * 0.6,
        height: 50,
        backgroundColor: '#1e3a8a',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});