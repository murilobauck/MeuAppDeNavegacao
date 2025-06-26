import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Meu Perfil</Text>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={styles.buttonText}>Voltar para Início</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={[styles.button, styles.detailsButton]}
                    onPress={() => navigation.navigate('Details')}
                >
                    <Text style={styles.buttonText}>Ver Detalhes</Text>
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
        width: windowWidth * 0.85,
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
        width: windowWidth * 0.7,
        height: 50,
        backgroundColor: '#1e3a8a',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    detailsButton: {
        backgroundColor: '#3b82f6',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});