
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tela from './src/components/screens/home/Tela';
import Sobre from './src/components/screens/sobre/Sobre';
import Perfil from './src/components/screens/perfil/Perfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return(
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Tela}/>
      <Tab.Screen name="Sobre" component={Sobre}/>
    </Tab.Navigator>
  );

}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator /*initialRouteName="Sobre"*/>
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ title: 'Perfil' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
