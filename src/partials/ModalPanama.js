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
  
  
  export default function PanamaModal({ visiblePanama, setVisiblePanama }) {
    const navigation = useNavigation();
  
    const places = [
      {
        source: require("../images/imagesAmericaCentro/archipelagodesanblasPanama.jpg"),
        title: "Archipelago de San Blas",
      },
      {
        source: require("../images/imagesAmericaCentro/biomuseuPanama.jpg"),
        title: "Biomuseu",
      },
      {
        source: require("../images/imagesAmericaCentro/bocasdeltoroPanama.jpg"),
        title: "Bocas Del Toro",
      },
      {
        source: require("../images/imagesAmericaCentro/ruinsviejoPanama.jpg"),
        title: "Ruins Viejo",
      },
      
    ];
  
    return (
      <Modal transparent={true} animationType="fade" visible={visiblePanama}>
        <View style={stylesPaises.containerModal}>
          <View style={stylesPaises.TopViewModal}>
  
            <ImageBackground source={require("../images/imagesAmericaCentro/panamá.jpg")}
              style={stylesPaises.imgbackground}
              resizeMode="cover" >
              <View style={stylesPaises.Viewbtn} >
  
                <Pressable onPress={() => setVisiblePanama(false)} style={{ alignItems: "center", justifyContent: "flex-start", width: "10%" }} >
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
                <Text style={stylesPaises.TitlePaises} >Panamá</Text>
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
  