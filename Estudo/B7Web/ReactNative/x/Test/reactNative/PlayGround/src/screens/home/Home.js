import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import Styles from './Styles';

const Home = ({navigation}) => {
  return(
    <ScrollView style = {Styles.container}>
      <View style = {Styles.viewContainer}>
        <View style={Styles.viewLogo}>
          <Image 
            style={Styles.logo}
            source={require('../../images/react-logo.jpg')}
          />
        </View>
        <View>
          <Text style = {Styles.toucEmailText}>E-mail</Text>
          <TextInput style = {Styles.inputBorder}
            placeholder="Informe o seu E-mail"
          />
        </View>
        <View style = {Styles.viewSenha}>
          <Text style = {Styles.toucSenhaText}>Senha</Text>
          <TextInput  style = {Styles.inputBorder}
            placeholder="Informe a senha"
          />
        </View>
        <View >
          <TouchableOpacity style = {Styles.toucEsqSenha} 
            onPress = {()=>navigation.navigate('Rsenha')}
          >
            <Text style = {Styles.toucEsqSenhaText}>Esqueci a senha</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style =  {Styles.toucEntrar}
            onPress = { ()=>navigation.navigate('Perfil')}
          >
            <Text style =  {Styles.toucEntrarText}>Entar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style = {Styles.toucFace} >
            <Text style = {Styles.toucFaceText}>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style = {Styles.toucConta}
            onPress = {()=>navigation.navigate('Conta')}
          >
            <Text style = {Styles.toucContaText}>Criar Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default Home;