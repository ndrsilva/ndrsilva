import React from 'react';
import {Text, View, Button } from 'react-native';
import Styles from './Styles';

const Tela = ({ navigation }) => {

  return(
    <>
      <View>
        <Text>Sou a Tela Home...</Text>
        <Button 
          title="Ir para o Perfil"
          onPress={ () => navigation.navigate('Perfil')}
        />
      </View>
    </>

  );
}
export default Tela;