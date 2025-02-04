import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

const locations: { [key: string]: string } = {
  'Hotel': 'https://www.google.com/maps?q=-12.9794,-38.4581',
  'Praia do Forte': 'https://www.google.com/maps?q=-12.5663,-37.9985',
  'Centro Histórico': 'https://www.google.com/maps?q=-12.9714,-38.5124',
  'Mergulho e Aventura': 'https://www.google.com/maps?q=-12.574,-37.995',
  'Trilhas e Cachoeiras': 'https://www.google.com/maps?q=-12.4000,-37.2000',
  'Restaurante': 'https://www.google.com/maps?q=-12.9766,-38.5016',
  'Parque Natural': 'https://www.google.com/maps?q=-12.5000,-37.5000',
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
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
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
    backgroundColor: '#EDF7EF',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
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
  backButton: {
    marginTop: 20,
    backgroundColor: '#059669',
    padding: 12,
    borderRadius: 8,
    width: '50%',
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LocationScreen;
