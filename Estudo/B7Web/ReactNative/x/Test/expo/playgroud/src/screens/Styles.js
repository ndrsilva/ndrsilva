import React from 'react';
import {StyleSheet} from 'react-native';

const Styles=StyleSheet.create({
  showAlert_modalContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#00000099'
  },
  showAlert_modal:{
    width:300,
    height:180,
    backgroundColor:'#FFFFFF',
    borderWidth:1,
    borderColor:'#000',
    borderRadius:20,
  },
  //AlertErro
  showAlert_modalTitleErro:{
    color:'#ca272c',
    marginTop:14,
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
  },
  showAlert_modalMsgErro:{
    color:'#ca272c',
    marginTop:14,
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
  },
  showAlert_modalToucErro:{
    backgroundColor:'#ca272c',
    marginTop:30,
    marginHorizontal:20,
    borderRadius:5,
    padding:4,
  },
  showAlert_modalToucTextErro:{
    color:'#FFF',
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
  },
  //AlertCerto
  showAlert_modalTitleCerto:{
    color:'#19aa52',
    marginTop:14,
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
  },
  showAlert_modalMsgCerto:{
    color:'#19aa52',
    marginTop:16,
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
  },
  showAlert_modalToucCerto:{
    backgroundColor:'#19aa52',
    marginTop:36,
    marginHorizontal:20,
    borderRadius:5,
    padding:4,
  },
  showAlert_modalToucTextCerto:{
    color:'#FFF',
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
  }

  

});

export default Styles;