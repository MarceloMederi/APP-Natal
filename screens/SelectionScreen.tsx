import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SelectionScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma opção</Text>

      {/* Botão 1 - Ir para a tela de datas */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Inicio')}
      >
        <Text style={styles.buttonText}>Ver Roteiro Completo</Text>
      </TouchableOpacity>

      {/* Botão 2 - Ir para a tela de restaurantes (MenuScreen) */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Cardapio')}
      >
        <Text style={styles.buttonText}>Bares e Restaurantes</Text>
      </TouchableOpacity>

      {/* Botão de Logout */}
      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.logoutText}>Sair do App</Text>
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
    backgroundColor: '#077DB8',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F8BB3B',
    padding: 18,
    marginVertical: 20,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF7F50',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SelectionScreen;
