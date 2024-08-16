import { StyleSheet } from "react-native";

const stylesPaises = StyleSheet.create({
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
    padding: 45,
  },
  botaoFechar: {
    backgroundColor: "#F4CFBA",
    width: "50%",
    alignItems: "center",
    height: 40,
    borderRadius: 10,
    textAlign: "center",
  },
  //Cadastro
  modalcadastro: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalcadastro2: {
    width: 350,
    height: "75%",
    backgroundColor: "#5A7577",
    borderRadius: 20,
  },
  cadastrotitulo: {
    fontSize: 25,
    color: "white",
    fontFamily: "Bebas",
    textAlign: "center",
    margin: 10,
    fontSize: 40,
  },

  btncadastro: {
    backgroundColor: "#F4CFBA",
    height: 40,
    width: "20%",
    justifyContent: "center",
    borderRadius: 10,
    height: "30%",
    width: "30%",
  },
  btntxt: {
    textAlign: "center",
    fontFamily: "Display",
    fontSize: 25,
  },
  modalEuropa: {
    fontFamily: "Display"
  },

  // Style Modal

  containerModal: { 
    flex: 1, 
    backgroundColor: "#F4CFBA" ,
  },
  TopViewModal: { 
    width: "100%", 
    height: "45%", 
    borderBottomEndRadius: 40,
  },
  imgbackground:{
    height: "100%", 
    borderBottomEndRadius: 40, 
    flexDirection: "column",
  },
  Viewbtn: { 
    flexDirection: "row", 
    height: "20%", 
    width: "100%" 
  },
  btnVoltar: { 
    alignItems: "center", 
    justifyContent: "flex-start", 
    width: "10%", 
  },
  Viewimg: { 
    alignItems: "center", 
    height: "100%", 
    width: "80%", 
    justifyContent: "center", 
  },
  logoImg: { 
    width: "50%", 
    height: "100%", 
  },
  txtTitle: { 
    height: "80%", 
    width: "100%", 
    alignItems: "center", 
    justifyContent: "flex-end",
  },
  TitlePaises: { 
    color: "#ffffff", 
    fontSize: 30, 
    fontFamily: "Display", 
  },
  ViewFlatList: { 
    width: "100%", 
    height: "55%", 
    alignItems: "center", 
    justifyContent: "center", 
    padding: 1,
    backgroundColor:'white', 
 },
 Viewimages: { 
  width: 250, 
  height: "90%", 
  borderRadius: 20, 
  alignItems: "center", 
  justifyContent: "flex-end", 
  margin: 10,
},
imgFlatList: { 
  width: "100%", 
  height: "100%", 
  borderRadius: 20, 
  position: "absolute",
},
txtTituloPais: { 
  fontSize: 20, 
  color: 'white',
  fontFamily:"Display", 
},
});
export default stylesPaises;
