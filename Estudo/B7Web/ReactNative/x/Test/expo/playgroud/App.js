
import React from 'react';
import { View, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/home/Home';
import Conta from './src/screens/criarConta/Conta';
import Rsenha from './src/screens/recuperarSenha/Rsenha';
import Perfil from './src/screens/perfil/Perfil'

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{headerShown: false }}
        />
        <Stack.Screen
          name="Rsenha"
          component={Rsenha}
          options={{ title: 'Recuperar Senha' }}
        />
        <Stack.Screen
          name="Conta"
          component={Conta}
          options={{title: 'Criar Conta'}}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
   
  );
}

export default App;



