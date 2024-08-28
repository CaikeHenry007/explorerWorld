import { StyleSheet } from "react-native";

const stylesInicio = StyleSheet.create({
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

  view: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center",
    
},

  Caixa: {
    borderColor: "white",
    borderBottomWidth: 2,
    height: "30%",
    width: "70%",
    margin: "5%",
    color: "white",
    fontFamily: "Bebas",
    fontSize: 18
  },

  texto2: {
    borderBlockColor: "white",
    color: "white",
    borderBottomColor: "white",
    fontFamily: "Bebas",
    fontSize: 15,
  },

  viewbotoes: {
    alignItems: "center",
    height: "30%",
    justifyContent: "center",
  }, 

  recuperar: {
    color: "blue", 
    textAlign: "center", 
    fontFamily: "Bebas", 
    fontSize: 20,
    textAlign: "center",
    bottom: 10
},

viewcaixa: {
  height: "30%",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
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

  modalcadastro: {
    width: "95%",
    height: "70%",
    backgroundColor: "#5A7577",
    borderRadius: 20,
    position: 'absolute',
    bottom: 10,
    alignItems:'center'
  },
  cadastrotitulo: {
    fontSize: 25,
    color: "white",
    fontFamily: "Bebas",
    textAlign: "center",
    margin: 35,
    fontSize: 40,
  },

  btncadastro: {
    backgroundColor: "#F4CFBA",
    height: 40,
    width: "20%",
    justifyContent: "center",
    borderRadius: 15,
    height: "30%",
    width: "40%",
  },
  btntxt: {
    textAlign: "center",
    fontFamily: "Bebas",
    fontSize: 25,
  },

  imgBackground: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  }
});

export default stylesInicio;
