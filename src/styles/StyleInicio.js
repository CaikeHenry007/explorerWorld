import { StyleSheet } from "react-native";

const stylesInicio = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imgBackground: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "95%",
    maxHeight: "70%",
    backgroundColor: "#5A7577",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  titulo: {
    fontSize: 25,
    color: "white",
    fontFamily: "Bebas",
    textAlign: "center",
    margin: 35,
    fontSize: 40,
  },

  viewcaixa: {
    height: "30%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  caixaTexto: {
    borderColor: "white",
    borderBottomWidth: 2,
    height: "30%",
    width: "70%",
    margin: "5%",
    color: "white",
    fontFamily: "Bebas",
    fontSize: 18,
  },

  recuperarText: {
    color: "blue",
    textAlign: "center",
    fontFamily: "Bebas",
    fontSize: 20,
    textAlign: "center",
    bottom: 10,
  },

  viewbotoes: {
    alignItems: "center",
    height: "30%",
    justifyContent: "center",
  },

  btn: {
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

  textoMenor: {
    borderBlockColor: "white",
    color: "white",
    borderBottomColor: "white",
    fontFamily: "Bebas",
    fontSize: 15,
    marginTop: "10%",
  },
});

export default stylesInicio;
