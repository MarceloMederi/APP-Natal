import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Image } from 'react-native';

const LoginScreen = ({ navigation }: any) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const fadeAnim = useRef(new Animated.Value(1)).current; // Inicializa a opacidade em 1

  const handleLogin = () => {
    const validUsername = 'partiu';
    const validPassword = 'natal';

    if (username === validUsername && password === validPassword) {
      setErrorMessage('');
      
      // 🚀 Inicia o efeito de fade-out
      Animated.timing(fadeAnim, {
        toValue: 0, // Reduz a opacidade para 0 (fade-out)
        duration: 500, // Duração de meio segundo
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate('Selecao'); // Navega para a próxima tela após a animação
      });

    } else {
      setErrorMessage('Usuário ou senha inválidos!');
    }
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Image source={require('../assets/images/capa.png')} style={styles.image} />
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      <TextInput
        placeholder="Usuário"
        placeholderTextColor="#999"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Senha"
        placeholderTextColor="#999"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#077DB8',
    padding: 20,
  },
  image: {
    width: 200, // 🔥 Ajuste conforme necessário
    height: 200,
    marginBottom: 20, // 🔥 Adiciona espaçamento abaixo da imagem
    resizeMode: 'contain',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 18,
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#F8BB3B',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#FF0000',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
