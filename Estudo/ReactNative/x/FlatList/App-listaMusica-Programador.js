import React, { useState } from 'react'; 
import {Text, StyleSheet, View, FlatList} from 'react-native'
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  background-color:white;
  flex:1;
  align-items:center;
`;

const Titulo = styled.Text`
  font-size:22px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.3);  
  width:100%;
  margin-top:20px;
`;

const Input = styled.TextInput`
  border: 1px solid #000;
  border-color:#6da1c8;
  width: 100%;
  margin-top: 20px;
  margin-Bottom:10px;
  padding:10px;
  color:#000;

`;



const PesqButton = styled.Button`

`;


export default () => {
  const users = [
    {id:'1', name: 'ndr', age: '20'},
    {id:'2', name: 'a93', age: '22'},  
    {id:'3', name: 'notte', age: '18'},
    {id:'4', name: 'ndr', age: '20'},
    {id:'5', name: 'a93', age: '22'},
    {id:'6', name: 'notte', age: '18'},
    {id:'7', name: 'ndr', age: '20'},
    {id:'8', name: 'a93', age: '22'},
    {id:'9', name: 'notte', age: '18'},
  
  ]

  function User ({username}) {
    return (
      <View>
        <Text>{username}        </Text>
      </View>
    )
  }
  
  
  return (
    <Page>
      <Titulo>Enter the name of a singer</Titulo>
      
      <Input 
        placeholder="Informe o Cantor"
        placeholderTextColor="#000"
      />
      <PesqButton title={'Pesquisar'} />

      <FlatList 
        keyExtractor = {item => item.id}
        data={users}
        renderItem={ ({item}) => < User username={item.name} />}
      />

      
    </Page>

  );
}

