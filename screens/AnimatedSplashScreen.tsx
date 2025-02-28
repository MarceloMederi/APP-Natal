import React, { useEffect } from 'react';
import { View, Animated, StyleSheet, Easing } from 'react-native';

const AnimatedSplashScreen = ({ onAnimationEnd }: { onAnimationEnd: () => void }) => {
  const scaleAnim = new Animated.Value(1); // Escala inicial
  const fadeAnim = new Animated.Value(1); // Opacidade inicial

  useEffect(() => {
    // 🚀 Inicia a animação de zoom (4s)
    Animated.timing(scaleAnim, {
      toValue: 1.5, // Aumenta o tamanho gradualmente
      duration: 4000, // Duração reduzida para 4 segundos
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();

    // 🔥 Inicia o efeito de fade-out nos últimos 2 segundos
    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0, // Some suavemente
        duration: 2000, // Duração do fade-out (2s)
        useNativeDriver: true,
      }).start(() => {
        onAnimationEnd(); // Só chama a tela de login depois do fade-out
      });
    }, 4000); // Começa o fade-out após 4s da Splash ativa
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <Animated.Image
        source={require('../assets/images/capa.png')}
        style={[styles.image, { transform: [{ scale: scaleAnim }] }]}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#077DB8',
  },
  image: {
    width: 500,
    height: 500,
    resizeMode: 'contain',
  },
});

export default AnimatedSplashScreen;
