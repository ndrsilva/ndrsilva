import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Styles from './Styles'

const CriarConta = () => {
  return(
    <View style={Styles.container}>
      <ScrollView>
        <View style={Styles.containerView}>
          <View style={Styles.container35}></View>
          <View style={Styles.containerBottom}>
            <Text style={Styles.nomeText}>Nome</Text>
            <TextInput style={Styles.inputBorder}
              placeholder="Informe seu nome"
            />
          </View>
          <View style={Styles.containerBottom}>
            <Text style={Styles.nomeText}>Sobrenome</Text>
            <TextInput style={Styles.inputBorder}
              placeholder="Informe seu sobrenome"
            />
          </View>
          <View style={Styles.containerBottom}>
            <Text style={Styles.nomeText}>E-mail</Text>
            <TextInput style={Styles.inputBorder}
              placeholder="Informe seu e-mail"
            />
          </View>
          <View style={Styles.containerBottom}>
            <Text style={Styles.nomeText}>Senha</Text>
            <TextInput style={Styles.inputBorder}
              placeholder="Informe sua senha"
            />
          </View>
          <View style={Styles.containerBottom}>
            <Text style={Styles.nomeText}>Digite a senha novamente</Text>
            <TextInput style={Styles.inputBorder}
              placeholder="Repita a senha"
            />
          </View>
          <View>
            <TouchableOpacity style={Styles.toucCadastrar}>
              <Text style={Styles.textCadastrar}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom:10}}></View>
        </View>
      </ScrollView>
    </View>
  );
}

export default CriarConta;