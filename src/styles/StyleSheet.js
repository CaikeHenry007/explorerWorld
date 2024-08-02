import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    backgroundColor: "red",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  //Login
  Caixa: {
    borderColor: "white", 
    borderBottomWidth: 1,
    height: 50, 
    width: "70%",
    justifyContent: "center", 
    alignItems: "center",
    color: "white",
    
  },
  txtLogin: {
    fontSize: 50, 
    color: "white", 
    fontFamily: "Bebas", 
    textAlign: "center", 
    padding: 45
  },
  botaoFechar: {
    backgroundColor: "#F4CFBA",
    width: "50%",
    alignItems: "center",
    height: 40,
    borderRadius: 10,
    textAlign: "center"
  },
//Cadastro
modalcadastro:{
  flex: 1, 
  alignItems: "center", 
  justifyContent: "center"
},
modalcadastro2:{
  width: 350,
  height: "75%", 
  backgroundColor: "#5A7577", 
  borderRadius:20,
},
cadastrotitulo:{ 
  fontSize: 25, 
  color: "white", 
  fontFamily: "Bebas", 
  textAlign:'center',
  margin: 10,
  fontSize: 40,
},

btncadastro:{
  backgroundColor:"#F4CFBA", 
   height:40,
  width: "20%",  
  justifyContent: 'center' ,
  borderRadius: 10,
  height:"30%",
  width: "30%",
},
btntxt:{ 
  textAlign:'center',
  fontFamily: "Bebas", 
  fontSize: 25,

},
});
export default styles;