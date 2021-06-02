import {StyleSheet} from 'react-native';

const Styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white',
  },
  viewContainer:{
    backgroundColor:'white',
    marginHorizontal:30,
    marginTop:50,
  },
  inputBorder:{
    borderWidth:1,
    borderRadius:3,
    paddingTop:2,
    paddingBottom:0,
    paddingLeft:3,
    fontSize:15,
  },
  toucEmailText:{
    marginTop:20,
    marginBottom:1,
    fontSize:18,
  },
  viewSenha:{
    marginTop:28,
  },
  toucSenhaText:{
    marginBottom:1,
    fontSize:18,
  },
  toucEsqSenha:{
    marginTop:8,
  },
  toucEsqSenhaText:{
    color: '#19aa52',
    textAlign:'right',
  },
  
  toucEntrar:{
    backgroundColor:'#19aa52',
    padding:5,
    marginTop:56,
    borderRadius:5,
  },
  toucEntrarText:{
    color:'#FFF',
    fontWeight:"bold",
    fontSize:18,
    textAlign:"center",
  },

  toucFace:{
    backgroundColor:'#1054ca',
    padding:5,
    marginTop:25,
    borderRadius:5,
  },
  toucFaceText:{
    color:'#FFF',
    fontWeight:'bold',
    fontSize:18,
    textAlign:"center",
  },

  toucConta:{
    marginTop:18,
  },
  toucContaText:{
    color: '#19aa52',
    textAlign:"center"
  },
  viewLogo:{
    marginHorizontal:"40%",
  },
  logo:{
    width:50,
    height:50,
    
  },
});

export default Styles;