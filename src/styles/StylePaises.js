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
