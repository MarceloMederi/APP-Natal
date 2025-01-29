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
    'Localização'
  ];

  const handlePress = (date: string) => {
    if (date === 'Localização') {
      navigation.navigate('Localizacao'); // Navega para a tela de Localização
    } else {
      navigation.navigate('Detalhes', { date }); // Navega para Detalhes normalmente
    }
  };

  return (
    <View style={styles.container}>
      {dates.map((date, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => handlePress(date)}
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#EDF7EF',
  },
  button: {
    backgroundColor: '#059669',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF4D4D',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
