import { StyleSheet } from "react-native";

const stylesInicio = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imgBackground: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  viewLogo: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    position: "absolute",
  },

  logo: {
    width: "65%",
    height: "35%",
    position: "absolute",
  },

  animatedView: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },

  card: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d5bc87",
  },

  titulo: {
    fontSize: 25,
    color: "#f5f0e8",
    fontFamily: "DisplayItalic",
    textAlign: "center",
    fontSize: 40,
    marginTop: "3%"
  },

  viewcaixa: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "3%"
  },

  caixaTexto: {
    borderColor: "#f5f0e8",
    borderBottomWidth: 2,
    height: "45%",
    width: "70%",
    margin: "5%",
    color: "white",
    fontFamily: "DisplayItalic",
    fontSize: 18,
  },

  recuperarBtn: {
    borderBottomWidth: 1, 
    borderBottomColor: "#384554", 
    width: "50%", 
    margin: "5%", 
  },

  recuperarText: {
    color: "#384554",
    textAlign: "center",
    fontFamily: "Bebas",
    fontSize: 15,
    textAlign: "center",
    fontFamily: "DisplayItalic"
  },

  viewbotoes: {
    alignItems: "center",
    height: "30%",
    justifyContent: "center",
  },

  btn: {
    backgroundColor: "#384554",
    justifyContent: "center",
    borderRadius: 15,
    height: "30%",
    width: "60%",
  },

  btntxt: {
    textAlign: "center",
    fontFamily: "DisplayItalic",
    fontSize: 20,
    color: "white"
  },

  textoMenor: {
    color: "#384554",
    borderBottomColor: "#384554",
    borderBottomWidth: 1,
    fontFamily: "DisplayItalic",
    fontSize: 15,
    marginTop: "4%",
  },
});

export default stylesInicio;
