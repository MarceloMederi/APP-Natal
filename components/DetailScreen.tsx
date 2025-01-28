import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailScreen = ({ route }: any) => {
  const { date } = route.params;

  // Recupera o conteúdo correspondente à data
  const itinerary = itineraries[date];

  if (!itinerary) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Nenhum itinerário definido para {date}.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{date}</Text>
      <Text style={styles.description}>{itinerary.text}</Text>
      <Image source={itinerary.image} style={styles.image} />
    </View>
  );
};

// Objeto de itinerários
const itineraries: { [key: string]: { text: string; image: any } } = {
  '23/08': {
    text: 'Passeio pela Praia do Forte.',
    image: require('../assets/images/download.jpg'),
  },
  '24/08': {
    text: 'Visita ao Centro Histórico.',
    image: require('../assets/images/download.jpg'),
  },
  '25/08': {
    text: 'Dia de mergulho e aventura.',
    image: require('../assets/images/download.jpg'),
  },
  '26/08': {
    text: 'Exploração de trilhas e cachoeiras.',
    image: require('../assets/images/download.jpg'),
  },
  '27/08': {
    text: 'Exploração de trilhas e cachoeiras.',
    image: require('../assets/images/download.jpg'),
  },
  '28/08': {
    text: 'Exploração de trilhas e cachoeiras.',
    image: require('../assets/images/download.jpg'),
  },
  '29/08': {
    text: 'Exploração de trilhas e cachoeiras.',
    image: require('../assets/images/download.jpg'),
  },
  '30/08': {
    text: 'Exploração de trilhas e cachoeiras.',
    image: require('../assets/images/download.jpg'),
  },
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10, // Bordas arredondadas
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  errorText: {
    fontSize: 18,
    color: '#FF0000',
    textAlign: 'center',
  },
});

export default DetailScreen;
