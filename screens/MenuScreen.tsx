import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuScreen = ({ navigation }: any) => {
  // Lista de restaurantes fictícios
  const restaurants = [
    { id: 1, name: 'Sabor Tropical' },
    { id: 2, name: 'Mar & Sol Restaurante' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um Restaurante</Text>

      {restaurants.map((restaurant) => (
        <TouchableOpacity
          key={restaurant.id}
          style={styles.button}
          onPress={() => alert(`Você escolheu: ${restaurant.name}`)}
        >
          <Text style={styles.buttonText}>{restaurant.name}</Text>
        </TouchableOpacity>
      ))}

      {/* Botão para voltar */}
      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.logoutText}>Voltar</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#F8BB3B',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF7F50',
  },
  logoutText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MenuScreen;
