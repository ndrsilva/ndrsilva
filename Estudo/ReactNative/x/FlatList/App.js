import React from 'react'
import {StyleSheet, Text, View, FlatList} from 'react-native'

export default function App () {
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
        <Text>{username}    </Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Essa é a minha FlatList</Text>
      <FlatList 
        keyExtractor = {item => item.id}
        data={users}
        renderItem={ ({item}) => <User username={item.name} />}
      />
     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    
  },


})