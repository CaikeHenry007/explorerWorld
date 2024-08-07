import { Button, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFonts } from "expo-font";
import { useState } from "react";
import {ModalEua} from "../partials/ModalEUA";

export default function Africa() {
  const navigation = useNavigation();

  const [visibleEua, setVisibleEua] = useState(false);

  const [font] = useFonts({
    "Pacifico": require("../fonts/Pacifico-Regular.ttf"),
    "Bebas": require("../fonts/Bebas.ttf"),
    "Noto": require("../fonts/NotoSherif.ttf"),
    "BonaNova": require("../fonts/BonaNovaItalic.ttf"),
    "BonaNovaBold": require("../fonts/BonaNovaBold.ttf")
  })
  if (!font) {
    return null;
  }
  return (
    <View style={{ flex: 1, }}>
    <View style={{ height: '55%', width: "100%", backgroundColor: "white" }}>
      <Image source={require("../images/americadonorte2.jpg")}
        style={{ width: "100%", height: "100%", position: "absolute", borderRadius: 40 }} />

      <TouchableOpacity
        style={{ backgroundColor: 'black', borderRadius: 20, height: 40, width: 40, }}
        onPress={() => navigation.navigate("Home")}
      >
        <MaterialCommunityIcons

          name="arrow-left-thick"
          size={35}
          color={'white'}
        />
      </TouchableOpacity>

      <Text style={{ fontFamily: "BonaNovaBold", textAlign: 'center', fontSize: 35, margin: 20, color: 'white' }}>America do Norte</Text>
  
  </View>
 
  <ScrollView style={{ width: "95%", }}>

<View style={{
  backgroundColor: 'white',
  height: 150,
  width: "95%",
  borderRadius: 20,
  margin: 18,
  flexDirection: "row",
}}>

</View>

<View style={{
  backgroundColor: 'white',
  height: 150,
  width: "95%",
  borderRadius: 20,
  margin: 18,
  flexDirection: "row",
}}>

</View>

<View style={{
  backgroundColor: 'white',
  height: 150,
  width: "95%",
  borderRadius: 20,
  margin: 18,
  flexDirection: "row",
}}>

</View>
</ScrollView>


    </View>
  );
}
