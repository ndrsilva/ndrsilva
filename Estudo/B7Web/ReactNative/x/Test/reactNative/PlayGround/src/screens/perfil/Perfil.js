import React, {useEffect, useState}from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import axios from 'axios';
import Styles from './Styles';

const Perfil = ({navigation}) => {
  
  return(
    <View style = {Styles.container}>
      <View style = {Styles.viewContainer}>
        <View style={Styles.viewLogo}>
          <Image 
            style={Styles.logo}
            source={require('../../images/react-logo.jpg')}
          />
        </View>
      </View>
    </View>
  );
};

export default Perfil; 