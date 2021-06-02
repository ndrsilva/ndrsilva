import React from 'react';
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import Styles from './Styles';

const ModalInformacao = (props) => {

  return(
    <Modal
      visible={props.visible}
      onRequestClose={props.onRequestClose}
      >
        
      <View style={Styles.showAlert_modalContainer}>
        <View style={Styles.showAlert_modal}>
          <Text style={[Styles.showAlert_modalTitleErro, {color:props.color}]}>{props.title}</Text>
          <Text style={[Styles.showAlert_modalMsgErro, {color:props.color}]}>{props.subTitle}</Text>
          <TouchableOpacity style={[Styles.showAlert_modalToucErro, {backgroundColor:props.backgroundColor}]}
          onPress = {props.onPress}
        >
        <Text style={Styles.showAlert_modalToucTextErro}>
          {props.ok}
        </Text>
        </TouchableOpacity>
        </View>
        </View>
    </Modal>
  );
}
 export default ModalInformacao;
