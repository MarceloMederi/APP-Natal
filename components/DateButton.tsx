import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const DateButton = ({ date, onPress }: { date: string; onPress: () => void }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{date}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF', // Cor de fundo azul
    paddingVertical: 15, // Espaçamento vertical interno
    paddingHorizontal: 20, // Espaçamento horizontal interno
    marginVertical: 10, // Espaçamento entre os botões
    borderRadius: 8, // Bordas arredondadas
    alignItems: 'center', // Centralizar o texto no botão
  },
  buttonText: {
    color: '#FFFFFF', // Cor do texto branco
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
  },
});

export default DateButton;
