import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  imagemfundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    height: "20%",
    width: "70%",
  },

  espaco: {
    height: "10%",
  },

  form: {
    height: "65%",
  },

  viewcaixa: {
    height: "35%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  viewbotoes: {
    alignItems: "center",
    height: "30%",
    justifyContent: "center",
  },

  texto: {
    borderBlockColor: "white",
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    margin: "2%",
  },

  Caixa: {
    borderColor: "white",
    borderBottomWidth: 2,
    height: "30%",
    width: "70%",
    margin: "5%",
    color: "white",
  },

  modalcadastro: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    bottom: "5%",
  },
  modalcadastro2: {
    width: "95%",
    height: "90%",
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
    borderRadius: 15,
    height: "30%",
    width: "40%",
  },
  btntxt: {
    textAlign: "center",
    fontFamily: "Bebas",
    fontSize: 20,
  },
});

export default styles;
