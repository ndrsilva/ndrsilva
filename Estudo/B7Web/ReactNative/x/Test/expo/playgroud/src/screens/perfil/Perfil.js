import React from 'react';
import {View, Text, Flat, Image} from 'react-native';
import Styles from './Styles';

const Perfil = ({navigation}) => {
  return(
    <View style = {Styles.container}>
      <View style = {Styles.viewContainer}>
        <View style={Styles.viewLogo}>
          <Image 
            style={Styles.logo}
            source={require('../../images/Grupo@3x.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default Perfil;