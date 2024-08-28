import { StyleSheet } from "react-native";

const stylesContinente = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  topView: {
    height: "45%",
    width: "100%",
    backgroundColor: "white",
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
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
  },
  ImgRotate: {
    transform: [{ rotate: "10deg" }],
    marginRight: -8,
    margin: -10,
    height: 170,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  imagePais: {
    width: "100%",
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
    backgroundColor: "black",
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
