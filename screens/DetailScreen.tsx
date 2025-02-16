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
      <Image source={itinerary.image} style={styles.image} />
    </View>
  );
};

// Objeto de itinerários
const itineraries: { [key: string]: {image: any } } = {
  '23/08': {
    image: require('../assets/images/dia-01.png'),
  },
  '24/08': {
    image: require('../assets/images/dia-02.png'),
  },
  '25/08': {
    image: require('../assets/images/dia-03.png'),
  },
  '26/08': {
    image: require('../assets/images/dia-04.png'),
  },
  '27/08': {
    image: require('../assets/images/dia-05.png'),
  },
  '28/08': {
    image: require('../assets/images/dia-06.png'),
  },
  '29/08': {
    image: require('../assets/images/dia-07.png'),
  },
  '30/08': {
    image: require('../assets/images/dia-08.png'),
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#077DB8',
  },
  image: {
    width: 378,
    height: 672,
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
