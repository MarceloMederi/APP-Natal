import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const DetailScreen = ({ route }: any) => {
  const { date } = route.params;

  // Recupera o conteúdo correspondente à data
  const itinerary = itineraries[date];

  if (!itinerary) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Nenhum itinerário definido para {date}.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{itinerary.text}</Text>
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
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default DetailScreen;
