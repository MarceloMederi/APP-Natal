import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

const locations: { [key: string]: string } = {
  'Aeroporto': 'https://www.google.com/maps?q=-5.768689653184387,-35.366061277387644',
  'Hotel': 'https://www.google.com/maps?q=-5.872718694362415,-35.18036230082013',
};

const LocationScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha uma localização:</Text>

      {Object.keys(locations).map((place, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => Linking.openURL(locations[place])}
        >
          <Text style={styles.buttonText}>{place}</Text>
        </TouchableOpacity>
      ))}

      {/* Botão para voltar */}
      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Voltar</Text>
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
    backgroundColor: '#077DB8', // Azul escuro
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF', // Texto branco
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#F8BB3B', // Amarelo
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
  backButton: {
    backgroundColor: '#FF7F50', // Laranja para botão de voltar
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LocationScreen;
