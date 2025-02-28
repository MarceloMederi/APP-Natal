import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen'; 
import SelectionScreen from '../screens/SelectionScreen';
import MenuScreen from '../screens/MenuScreen'; 


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Selecao" component={SelectionScreen} options={{ title: 'Escolha uma Opção' }} />
        <Stack.Screen name="Cardapio" component={MenuScreen} />
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Detalhes" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
