import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SelectionScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma opção:</Text>

      {/* Botão 1 - Ir para a tela de datas */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Inicio')}
      >
        <Text style={styles.buttonText}>Ver Itinerário</Text>
      </TouchableOpacity>

      {/* Botão 2 - Ir para a tela de localizações */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Localizacao')}
      >
        <Text style={styles.buttonText}>Ver Localizações</Text>
      </TouchableOpacity>

      {/* Botão de Logout */}
      <TouchableOpacity
        style={styles.logoutButton}
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
    backgroundColor: '#EDF7EF',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#059669',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#34D399',
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
    padding: 15,
    marginTop: 20,
    borderRadius: 8,
    width: '50%',
    alignItems: 'center',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SelectionScreen;
