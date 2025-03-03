import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const MenuScreen = ({ navigation }: any) => {
  // Lista de restaurantes com links
  const restaurants = [
    { id: 1, name: 'Restaurante - Camarões', url: 'https://drive.google.com/file/d/1JeW2CBQT4WLNn9wlLv-ARYEVtnt_fbrO/view?usp=sharing' },
    { id: 2, name: 'Restaurante - Casa de Taipa', url: 'https://drive.google.com/file/d/1Vp5NdKudCti6XVwF4LfKOucr0H45gU-1/view?usp=sharing' },
    { id: 3, name: 'Restaurante - Casa do Matuto', url: 'https://drive.google.com/file/d/1RyWRbrJ-ec2r7yW9l4ewT5uBev56l2EF/view?usp=sharing' },
    { id: 4, name: 'Restaurante - Páprika', url: 'https://b2f.app/paprikasalao?fbclid=PAZXh0bgNhZW0CMTEAAabULk_huoiP_SGntOGwBkLHV3hr9bk5K_g_qXvluFKVKbOMnHUaA-xPvm4_aem_8AKJG60YGOb7RgPwFUbfuQ' },
    { id: 5, name: 'Barzinho - Curió Bar', url: 'https://drive.google.com/file/d/1MFqgXG0HMXG_cB6M9fgASL_Op7OnLfbg/view?usp=sharing' },
    { id: 6, name: 'Barzinho - Boteco Arrumadinho', url: 'https://drive.google.com/file/d/192ou5h3QyNDfddmNR_wvM5wnbA3883qa/view?usp=sharing' },
    { id: 7, name: 'Barzinho - Ô Fuxico Bar', url: 'https://drive.google.com/file/d/1V-oOvEiMd7X9vNoh4AOHUlsoZ7bSzYKo/view?usp=sharing' },
  ];

  // Função para abrir o link do restaurante
  const openRestaurantLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir o link:", err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha um Restaurante</Text>

      {restaurants.map((restaurant) => (
        <TouchableOpacity
          key={restaurant.id}
          style={styles.button}
          onPress={() => openRestaurantLink(restaurant.url)}
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
    padding: 18,
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
    padding: 15,
    marginVertical: 15,
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

export default MenuScreen;
