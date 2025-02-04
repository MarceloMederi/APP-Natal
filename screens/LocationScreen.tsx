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
