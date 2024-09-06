import { StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LARGURA_CONTAINER = width * 0.7;
const ESPACO = 10;
const ALTURA_BACKDROP = height;

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    justifyContent: "center",
  },

  viewLogo: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    height: "100%",
    width: "100%",
    position: "absolute",
  },

  logo: {
    width: "75%",
    height: "100%",
    position: "absolute",
  },

  posterImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    margin: 0,
    marginBottom: 10,
    borderRadius: 20,
  },

  sombraImage: {
    width: "100%",
    height: LARGURA_CONTAINER * 1.2,
    shadowColor: "black",
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 20,
    elevation: 20,
  },

  containerFlatList: {
    width: LARGURA_CONTAINER,
  },

  moldura: {
    marginHorizontal: ESPACO,
    padding: ESPACO,
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 30,
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
    position: "absolute",
  },
});

export default stylesHome;
