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
  
  export default function MaldivasModal({ visibleMaldivas, closeMaldivas }) {
    const navigation = useNavigation();
  
    const places = [
      {
        source: require("../images/Europa/restaurante.jpg"),
        title: "Ithaa Undersea Restaurant",
      },
      {
        source: require("../images/Europa/navagio.jpg"),
        title: "Navagio",
      },
      {
        source: require("../images/Europa/santorini.jpg"),
        title: "Santorini",
      },
      {
        source: require("../images/Europa/acropole.jpg"),
        title: "Museu de acrópole",
      },
    ];
  
    return (
      <Modal transparent={true} animationType="fade" visible={visibleMaldivas}>
        <View style={{ flex: 1, backgroundColor: "#F4CFBA" }}>
          <View style={{ width: "100%", height: "45%", borderBottomEndRadius: 40 }}>
  
            <ImageBackground source={require("../images/Asia/maldivas.jpg")}
              style={{ height: "100%", borderBottomEndRadius: 40, flexDirection: "column" }}
              resizeMode="cover" >
              <View style={{ flexDirection: "row", height: "20%", width: "100%" }} >
  
                <Pressable onPress={closeMaldivas} style={{ alignItems: "center", justifyContent: "flex-start", width: "10%" }} >
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
                <Text style={stylesPaises.txtTituloPais} >Maldivas</Text>
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
  