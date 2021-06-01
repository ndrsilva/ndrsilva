import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import Styles from './Styles'

const CriarConta = () => {
  return(
      <ScrollView style={Styles.container}>
        <View style={Styles.containerView}>
          <View>
            <Text style={Styles.nomeText}>Nome</Text>
            <TextInput style={Styles.inputBorder}
              placeholder="Informe seu nome"
            />
          </View>
          <View>
            <Text style={Styles.nomeText}>Sobrenome</Text>
            <TextInput style={Styles.inputBorder}
              placeholder="Informe seu sobrenome"
            />
          </View>
          <View>
            <Text style={Styles.nomeText}>E-mail</Text>
            <TextInput style={Styles.inputBorder}
              placeholder="Informe seu e-mail"
            />
          </View>
          <View>
            <Text style={Styles.nomeText}>Senha</Text>
            <TextInput style={Styles.inputBorder}
              placeholder="Informe sua senha"
            />
          </View>
          <View>
            <Text style={Styles.nomeText}>Digite a senha novamente</Text>
            <TextInput style={Styles.inputBorder}
              placeholder="Repita a senha"
            />
          </View>
          <View>
            <TouchableOpacity style={Styles.toucCadastrar}>
              <Text style={Styles.textCadastrarText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom:10}}></View>
        </View>
      </ScrollView> 
  );
}

export default CriarConta;