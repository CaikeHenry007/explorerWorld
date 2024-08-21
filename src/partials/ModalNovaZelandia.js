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
  
  export default function NovaZelandiaModal({ visibleNovaZelandia, closeNovaZelandia }) {
    const navigation = useNavigation();
  
    const places = [
      {
        source: require("../images/Oceania/museunovazelandia.jpg"),
        title: "MuseuTe Papa Tongarewa",
      },
      {
        source: require("../images/Oceania/hobbitonnovazelandia.jpg"),
        title: "Hobbiton Movie Set",
      },
      {
        source: require("../images/Oceania/skytowernovazelandia.jpg"),
        title: "Sky Tower",
      },
      {
        source: require("../images/Oceania/waiotapunovazelandia.jpg"),
        title: "Waiotapu Thermal Wonderland", 
      },
    ];
  
    return (
      <Modal transparent={true} animationType="fade" visible={visibleNovaZelandia}>
        <View style={{ flex: 1, backgroundColor: "#F4CFBA" }}>

          <View style={{ width: "100%", height: "45%", borderBottomEndRadius: 40 }}>
  
            <ImageBackground source={require("../images/Oceania/novazelandia.jpg")}
              style={{ height: "100%", borderBottomEndRadius: 40, flexDirection: "column" }}
              resizeMode="cover" >
              <View style={{ flexDirection: "row", height: "20%", width: "100%" }} >
  
                <Pressable onPress={closeNovaZelandia} style={{ alignItems: "center", justifyContent: "flex-start", width: "10%" }} >
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
                <Text style={stylesPaises.TitlePaises}> Nova Zelândia</Text>
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
  