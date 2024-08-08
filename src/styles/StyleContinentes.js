import { StyleSheet } from "react-native";

const stylesContinente = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#D5DADB",
  },
  topView: {
    height: "45%",
    width: "100%",
    backgroundColor: "#D5DADB",
  },
  topImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  tituloPrincipal: {
    fontFamily: "BonaNovaBold",
    textAlign: "center",
    fontSize: 35,
    margin: 20,
    color: "white",
  },
  containerFlatlist: {
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    height: 150,
    width: "95%",
    borderRadius: 20,
    margin: 18,
    flexDirection: "row",
  },
  imagePais: {
    width: "30%",
    height: "100%",
    borderRadius: 20,
  },
  viewAlinhamento: {
    flexDirection: "column",
    alignItems: "center",
    width: "70%",
    height: "100%",
  },
  tituloPais: {
    fontFamily: "BonaNovaBold",
    fontSize: 17,
  },
  subtituloPais: {
    fontFamily: "BonaNova",
    fontSize: 15,
  },
  viewIcones: {
    flexDirection: "row",
    height: "50%",
    width: "95%",
    alignItems: "flex-end",
  },
  icones: {
    width: "45%",
    height: "40%",
    backgroundColor: "#5A7577",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  espaco: {
    width: "10%",
  },
  textosIcones: {
    fontFamily: "Bebas",
    fontSize: 18,
    color: "#ffffff",
  },
});

export default stylesContinente;
