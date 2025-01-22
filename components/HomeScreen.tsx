import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  const dates = [
    '23/08',
    '24/08',
    '25/08',
    '26/08',
    '27/08',
    '28/08',
    '29/08',
    '30/08',
  ];

  return (
    <View style={styles.container}>
      {dates.map((date, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.navigate('Detail', { date })}
        >
          <Text style={styles.buttonText}>{date}</Text>
        </TouchableOpacity>
      ))}
      {/* Botão de Logout */}
      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza os botões verticalmente
    alignItems: 'center', // Centraliza os botões horizontalmente
    padding: 20,
    backgroundColor: '#64748B',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    marginVertical: 10, // Espaçamento entre os botões
    borderRadius: 8,
    width: '80%', // Largura do botão
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF4D4D', // Cor de fundo do botão Logout
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
