import React, {useEffect, useState, StyleSheet} from 'react'; 
import {View, Text, Button, } from 'react-native'
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  background-color:white;
  align-items:center;
`;

const styles = StyleSheet.create({
  header:{
    fontSize:25,
  }
});

const Input = styled.TextInput`
  color:#000;
  width:90%;
  height: 50px;
  font-size:18px;
  background-color: #EEE
  margin-top:20px;
  border-radius:10px;
  padding:10px;
`;

const CalcButton = styled.Button`
  margin-top:10px;
`;

const ResultArea = styled.View`
  width:100%; 
  margin-top:30px;
  background-color:#EEE;
  padding:20px;
  justify-content:center;
  align-items:center;
`;

const ResultItemTitle = styled.Text`
font-size:18px;
font-weight:bold;
`;

const ResultItem = styled.Text`
font-size:15px;
margin-bottom:30px
`;

const PctArea = styled.View`
  flex-direction:row;
  margin:20px;
`;

const PctItem = styled.Button`

`;



export default () => {

  const [bill, setBill] = useState('');
  const [tip, setTip] = useState(0);
  const [ptc, setPtc] = useState(10);

  const calc = () => {
    let nBill = parseFloat(bill);

    if(nBill) {
      setTip( (ptc/100) * nBill );
    } 
    
  }

  useEffect(()=>{
    calc();
  }, [ptc, bill]);

  return (
    <Page>
      <Text style={styles.header}>Calculadora de Gorjeta</Text>
      <Input 
        placeholder="Quando deu a conta?" 
        placeholderTextColor="#000"
        //default-numeric-email-address
        keyboardType="numeric"
        value={bill}
        onChangeText={n=>setBill(n)}
      />

      <PctArea>
        <PctItem title="5%" onPress={()=>setPtc(5)}/>
        <PctItem title="10%" onPress={()=>setPtc(10)}/>
        <PctItem title="15%" onPress={()=>setPtc(15)}/>
        <PctItem title="20%" onPress={()=>setPtc(20)}/>
      </PctArea>

      <CalcButton title={`Calcular ${ptc}%`}   onPress={calc}/>
      { tip > 0 &&
        <ResultArea>
          <ResultItemTitle>Valor da Conta</ResultItemTitle>
          <ResultItem>R$ {parseFloat(bill).toFixed(2)}</ResultItem>
          
          <ResultItemTitle>Valor da Gorjeta</ResultItemTitle>
          <ResultItem>R$ {tip.toFixed(2)} ({ptc})%</ResultItem>
          
          <ResultItemTitle>Valor Total</ResultItemTitle>
          <ResultItem>R$ {(parseFloat(bill) + tip).toFixed(2)}</ResultItem>
          
        </ResultArea> 
      }
    </Page>
  );
}