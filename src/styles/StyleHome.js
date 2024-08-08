import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LARGURA_CONTAINER = width * 0.7;
const ESPACO = 10;
const ALTURA_BACKDROP = height * 0.95;

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A7577",
    justifyContent: "center",
  },
  posterImage: {
    width: "100%",
    height: LARGURA_CONTAINER * 1.2,
    resizeMode: "cover",
    margin: 0,
    marginBottom: 10,
  },
  containerFlatList: {
    width: LARGURA_CONTAINER,
  },
  moldura: {
    marginHorizontal: ESPACO,
    padding: ESPACO,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  texto: {
    fontSize: 22,
    fontFamily: "BonaNovaBold",
  },

  //Backdrop
  containerBackdrop: {
    position: "absolute",
    height: ALTURA_BACKDROP,
    top: 1,
    width: width,
  },
  imagemAnimada: {
    width: width,
    height: ALTURA_BACKDROP,
  },
  gradiente: {
    width,
    height: ALTURA_BACKDROP,
    position: "absolute",
    bottom: 0,
  },
});

export default stylesHome;
