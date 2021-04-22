import React, {useState} from 'react'; 
import {View, Text, Button} from 'react-native'
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex:1;
  justify-content:center;
  background-color:white;
  align-items:center;
`;
//config.Visual do Input
const Input = styled.TextInput`
  width:200px;
  height:40px;
  border:1px solid #000;
  color:#000;
`;


const Hello = () => {
  const [name, setName] = useState('André')
  const [backupName, setBackupName] = useState('')

  const handleClick = () => {
    setBackupName(name)
  }
////ou----------------------
  //function handleClick() {
  //  setBackupName(name)
  //}

  return(
    <View>
      <Input value={name} onChangeText={t=>setName(t)} />

      <Button title="SAlvar" onPress={handleClick} />

      <Text>{backupName}</Text>
    </View>
    
  );
}

export default () => {
  return (
    <Page>
      <Hello />
    </Page>
  );
}