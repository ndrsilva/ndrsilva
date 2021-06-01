import React from 'react';
import {StyleSheet} from 'react-native';

const Styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#FFF',
  },
  containerView:{
    marginHorizontal:30,
    marginTop:35,
  },
    nomeText:{
      fontSize:18,
      marginBottom:1,
    },
    inputBorder:{
      borderWidth:1,
      borderRadius:3,
      paddingTop:2,
      paddingBottom:0,
      paddingLeft:3,
      fontSize:15,
      marginBottom:28,
    },
  toucCadastrar:{
    backgroundColor:'#19aa52',
    marginTop:35,
    padding:3,
    borderRadius:3,
  },
    textCadastrarText:{
      color:'#FFF',
      fontSize:18,
      fontWeight:'bold',
      textAlign: 'center',
    }
});

export default Styles;