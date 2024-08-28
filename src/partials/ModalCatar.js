import {
    Text,
    View,
    ImageBackground,
    TouchableOpacity,
    Modal,
    Pressable,
    FlatList,
    Image
  } from "react-native";
  import { useFonts } from "expo-font";
  import stylesPaises from "../styles/StylePaises";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import { useNavigation } from "@react-navigation/native";
  
  export default function CatarModal({ visibleCatar, setVisibleCatar }) {
    const navigation = useNavigation();

    const [fontLoaded] = useFonts({
      Pacifico: require("../fonts/Pacifico-Regular.ttf"),
      Bebas: require("../fonts/Bebas.ttf"),
      Noto: require("../fonts/NotoSherif.ttf"),
      BonaNova: require("../fonts/BonaNovaItalic.ttf"),
      BonaNovaBold: require("../fonts/BonaNovaBold.ttf"),
      Lilita: require("../fonts/LilitaOne.ttf"),
      Display: require("../fonts/DisplayExtraBoldItalic.ttf"),
      DisplayBold: require("../fonts/DisplayBoldItalic.ttf"),
      DisplayItalic: require("../fonts/DisplayItalic.ttf")
    });

  
    const places = [
      {
        source: require("../images/Asia/livraria.jpg"),
        title: "Qatar National Library",
      },
      {
        source: require("../images/Asia/museuCatar.jpg"),
        title: "National Museum of Qatar",
      },
      {
        source: require("../images/Asia/museuIslamico.jpg"),
        title: "Museu da Arte Islâmica",
      },
      {
        source: require("../images/Asia/villaggiomall.jpg"),
        title: "Villaggio Mall",
      },
    ];
  
    return (
      <Modal transparent={true} animationType="fade" visible={visibleCatar}>
        <View style={stylesPaises.containerModal}>
          <View style={stylesPaises.TopViewModal}>
  
            <ImageBackground source={require("../images/Asia/catar.jpg")}
              style={stylesPaises.imgbackground}
              resizeMode="cover" >
              <View style={stylesPaises.Viewbtn} >
  
                <Pressable onPress={() => setVisibleCatar(false)} style={{ alignItems: "center", justifyContent: "flex-start", width: "10%" }} >
                  <MaterialCommunityIcons
                    name="arrow-left"
                    size={35}
                    color="white" />
                </Pressable>
                <View style={{ alignItems: "center", height: "100%", width: "80%", justifyContent: "center" }} >
                  <Image source={require("../images/logobranco.png")}
                    style={{ width: "50%", height: "100%" }} />
                </View>
              </View>
              <View style={{ height: "80%", width: "100%", alignItems: "center", justifyContent: "flex-end" }}>
                <Text style={stylesPaises.TitlePaises} >Catar</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ width: "100%", height: "55%", alignItems: "center", justifyContent: "center", padding: 1, }} >
            <FlatList
              data={places}
              horizontal={true}
              keyExtractor={(item) => item}
              renderItem={({ item }) => {
                return (
                  <View style={{ width: 250, height: "90%", borderRadius: 20, alignItems: "center", justifyContent: "flex-end", margin: 10 }}>
                    <Image source={item.source}
                      style={{ width: "100%", height: "100%", borderRadius: 20, position: "absolute" }} />
                    <Text style={stylesPaises.txtTituloPais}>{item.title}</Text>
                  </View>
                )
              }} />
  
          </View>
        </View>
      </Modal>
    );
  }
  