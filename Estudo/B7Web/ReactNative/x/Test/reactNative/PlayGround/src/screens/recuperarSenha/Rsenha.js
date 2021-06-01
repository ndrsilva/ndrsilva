import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, navigation } from 'react-native';
import Styles from './Styles';
import ModalInfomacao from '../ModalInformacao';

const Rsenha = ({navigation}) => {
  const [name, SetName] = useState('');
  const [showAlertErro, SetShowAlertErro] = useState(false);
  const [showAlertCerto, SetShowAlertCerto] = useState(false);

  const showAlert = () => {
    if (name.length > 3) {
      SetShowAlertCerto(true);
    }else {
      SetShowAlertErro(true);
    }
  }

  return(
    <View style={Styles.container}>
      <View>
        <ModalInfomacao 
          visible = {showAlertErro}
          onRequestClose = {()=>SetShowAlertErro(false)}
          title = {'ERRO!'}
          subTitle = {'Erro ao enviar!'}
          onPress = {()=>SetShowAlertErro(false)}
          ok = {'OK!'}
          color = {'red'}
          backgroundColor = {'red'}
        />
        <ModalInfomacao 
          visible = {showAlertCerto}
          onRequestClose = {()=>SetShowAlertCerto(false)}
          title = {'SUCESSO!'}
          subTitle = {'Verifique seu e-mail!'}
          onPress = {()=>navigation.navigate('Home')}
          ok = {'OK!'}
          color = {'green'}
          backgroundColor = {'green'}
        />

        <View style = {Styles.viewContainer}>
          <View>
            <Text style = {Styles.toucEmailText}>E-mail</Text>
            <TextInput style = {Styles.inputBorder}
              placeholder="Informe o seu E-mail"
              onChangeText={SetName}
            />
          </View>
          <View>
            <TouchableOpacity style = {Styles.toucEmail}
              onPress={showAlert}
            >
              <Text style = {Styles.toucEmailTextEnviar}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Rsenha;