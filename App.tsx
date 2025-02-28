import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedSplashScreen from './screens/AnimatedSplashScreen';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  const [isSplashFinished, setSplashFinished] = useState(false);

  useEffect(() => {
    // 🚀 Agora espera apenas 6 segundos antes de ir para a tela de login
    setTimeout(() => {
      setSplashFinished(true);
    }, 6000);
  }, []);

  return (
    <View style={styles.container}>
      {!isSplashFinished ? (
        <AnimatedSplashScreen onAnimationEnd={() => setSplashFinished(true)} />
      ) : (
        <AppNavigator />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#077DB8', // Evita tela branca na transição
  },
});
