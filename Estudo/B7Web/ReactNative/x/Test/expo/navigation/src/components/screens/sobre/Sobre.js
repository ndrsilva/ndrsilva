import React from 'react';
import {Text, View, ScrollView, TextInput, Image} from 'react-native';
import Styles from './Styles';

const Sobre = ({ route }) => {

  return(
    <>
      <View>
        <Text>Sou a Tela Sobre...</Text>
        <Text>Meu nome é: {route.params?.name}</Text>
      </View>
    </>

  );
}
export default Sobre;