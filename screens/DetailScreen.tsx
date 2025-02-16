import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const DetailScreen = ({ route }: any) => {
  const { date } = route.params;

  // Recupera o conteúdo correspondente à data
  const itinerary = itineraries[date];

  if (!itinerary) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Nenhum itinerário definido para {date}.</Text>
      </View>
    );
  }

  // Função para abrir o link correspondente ao botão clicado
  const openLink = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Erro ao abrir o link:', err));
  };

  return (
    <View style={styles.container}>
      <Image source={itinerary.image} style={styles.image} />
      
      {/* Renderiza os botões específicos da data */}
      <View style={styles.buttonContainer}>
        {itinerary.buttons.map((button, index) => (
          <TouchableOpacity key={index} style={styles.button} onPress={() => openLink(button.link)}>
            <Text style={styles.buttonText}>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

// Objeto de itinerários com imagens e botões específicos para cada data
const itineraries: { [key: string]: { image: any; buttons: { text: string; link: string }[] } } = {
  '23/08': {
    image: require('../assets/images/dia-01.png'),
    buttons: [
      { text: 'PEDIR O UBER', link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://play.google.com/store/apps/details%3Fid%3Dcom.ubercab%26hl%3Dpt_BR%26referrer%3Dutm_source%253Dgoogle%2526utm_medium%253Dorganic%2526utm_term%253Duber%26pcampaignid%3DAPPU_1_SZmwZ-LJF9rc1sQPteSQQA&ved=2ahUKEwiikuD35sWLAxVarpUCHTUyBAgQ8oQBegQIWxAB&usg=AOvVaw2HfffQ9CbAQ6VKRwmwzk88' },
      { text: 'ENDEREÇO HOTEL', link: 'https://maps.app.goo.gl/S2L8NVfK4bt5rQvT8' },
    ],
  },
  '24/08': {
    image: require('../assets/images/dia-02.png'),
    buttons : [
      { text: 'MAIS DETALHES', link: 'https://drive.google.com/file/d/1QIVGwVu_SMENk5P83fY_Jgw1Z9KmTUgh/view?usp=sharing' },
      { text: 'VÍDEO DO PASSEIO', link: 'https://youtu.be/cCYyYMzCwXo?si=iWovY5OQQ0GJznOs' },
    ],
  },
  '25/08': {
    image: require('../assets/images/dia-03.png'),
    buttons: [
      { text: ' PRAIA PONTA NEGRA', link: 'https://youtu.be/XJivDVYoe3s?si=JMlF32EvVJejaGPf' },
      { text: 'BEACH CLUB', link: 'https://youtube.com/shorts/WgM4xwBofHA?si=yk1aHNa2mS18s6rq' },
    ],
  },
  '26/08': {
    image: require('../assets/images/dia-04.png'),
    buttons: [
      { text: 'MAIS DETALHES', link: 'https://drive.google.com/file/d/1NJ8t1qJHSJ7wI4o-CFKiN-jZdjbyq5bI/view?usp=sharing' },
      { text: 'VÍDEO DO PASSEIO', link: 'https://youtu.be/JU_gRjo_b3g?si=TtRCbeNyehXNHqSg' }
    ],
  },
  '27/08': {
    image: require('../assets/images/dia-05.png'),
    buttons: [
      { text: 'MAIS DETALHES', link: 'https://drive.google.com/file/d/1oQVYEMeflWnahaddhGVD-y6BgSIPuPce/view?usp=sharing' },
      { text: 'VÍDEO DO PASSEIO', link: 'https://youtu.be/zdAbklQ-his?si=zCoagkAJtp2bnLTh' },
    ],
  },
  '28/08': {
    image: require('../assets/images/dia-06.png'),
    buttons: [
      { text: 'ARTESANATO', link: 'https://youtu.be/CUZWoEoy95g?si=55O9SJQO6YqJQXRx' },
      { text: 'PRAIA SHOPPING', link: 'https://youtu.be/LmJxD9pQEZ4?si=ymbB4w_dGHmX9MhX' },
    ],
  },
  '29/08': {
    image: require('../assets/images/dia-07.png'),
    buttons: [
      { text: 'MAIS DETALHES', link: 'https://drive.google.com/file/d/1w0IEOYwSLt_cFQZz_rQPifV6k1EBeKOZ/view?usp=sharing' },
      { text: 'VÍDEO DO PASSEIO', link: 'https://youtu.be/rAaOmj7ZAsM?si=4Cwyfos-tT3s1JI-' },
    ],
  },
  '30/08': {
    image: require('../assets/images/dia-08.png'),
    buttons: [
      { text: 'PEDIR O UBER', link: 'https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://play.google.com/store/apps/details%3Fid%3Dcom.ubercab%26hl%3Dpt_BR%26referrer%3Dutm_source%253Dgoogle%2526utm_medium%253Dorganic%2526utm_term%253Duber%26pcampaignid%3DAPPU_1_SZmwZ-LJF9rc1sQPteSQQA&ved=2ahUKEwiikuD35sWLAxVarpUCHTUyBAgQ8oQBegQIWxAB&usg=AOvVaw2HfffQ9CbAQ6VKRwmwzk88' },
      { text: 'END. AEROPORTO', link: 'https://maps.app.goo.gl/4QPaC1BMAbRh89WE8' },
    ],
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
    borderRadius: 10,
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
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 60,
    width: '80%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF7F50',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default DetailScreen;
