import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  const dates = [
    '23/08',
    '24/08',
    '25/08',
    '26/08',
    '27/08',
    '28/08',
    '29/08',
    '30/08',
  ];

  return (
    <View style={styles.container}>
      {dates.map((date, index) => (
        <View key={index} style={styles.buttonContainer}>
          <Button
            title={date}
            onPress={() => navigation.navigate('Detail', { date })}
          />
        </View>
      ))}
      <View style={styles.buttonContainer}>
        <Button title="Logout" onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10, // Espaçamento vertical entre os botões
    width: '20%', // Define largura dos botões para melhorar a estética
  },
});

export default HomeScreen;
