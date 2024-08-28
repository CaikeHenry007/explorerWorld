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
  import stylesPaises from "../styles/StylePaises";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import { useNavigation } from "@react-navigation/native";
  
  export default function CanadaModal({ visibleCanada, setVisibleCanada }) {
    const navigation = useNavigation();
  
    const places = [
      {
        source: require("../images/imagesAmericaNorte/torontocanada.jpg"),
        title: "Toronto",
      }, 
      {
        source: require("../images/imagesAmericaNorte/torrecanada.jpg"),
        title: "Torre CN",
      },
      {
        source: require("../images/imagesAmericaNorte/cataratacanada.jpg"),
        title: "Cataratas do Niágara",
      },
      {
        source: require("../images/imagesAmericaNorte/parliamentcanada.jpg"),
        title: "Parliament Hill,  ",
      },
       

    ];
  
    return (
      <Modal transparent={true} animationType="fade" visible={visibleCanada}>
        <View style={stylesPaises.containerModal}>
          <View style={stylesPaises.TopViewModal}>
  
            <ImageBackground source={require("../images/imagesAmericaNorte/canada.jpg")}
              style={stylesPaises.imgbackground}
              resizeMode="cover" >
              <View style={{ flexDirection: "row", height: "20%", width: "100%" }} >
  
                <Pressable onPress={() => setVisibleCanada(false)} style={{ alignItems: "center", justifyContent: "flex-start", width: "10%" }} >
                  <MaterialCommunityIcons
                    name="arrow-left"
                    size={35}
                    color="white" />
                </Pressable>
                <View style={{ alignItems: "center", height: "100%", width: "80%", justifyContent: "center" }} >
                  <Image source={require("../images/logoEscura.png")}
                    style={{ width: "50%", height: "100%" }} />
                </View>
              </View>
              <View style={{ height: "80%", width: "100%", alignItems: "center", justifyContent: "flex-end" }}>
                <Text style={stylesPaises.TitlePaises} >Canadá</Text>
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
  