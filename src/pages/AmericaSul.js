import { Button, Text, View, Image, TouchableOpacity, Pressable } from "react-native";
import styles from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFonts } from "expo-font";


export default function AmericaSul() {
  const navigation = useNavigation();
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
      <Image source={require("../images/americadosul.jpg")}
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

      <Text style={{ fontFamily: "BonaNovaBold", textAlign: 'center', fontSize: 35, margin: 20, color: 'white' }}>America do Sul</Text>

    </View>

<Pressable onPress={() => navigation.navigate("EuaTeste")} style={{height: "15%", width: "90%"}}>
    <View style={{
      backgroundColor: 'white',
      height: '100%',
      width: "100%",
      borderRadius: 20,
      margin: 18,
      flexDirection: "row",
    }}>
      <View style={{ backgroundColor: "red", height: "70%", width: "30%", margin: 20, borderRadius: 20, }}>
        <Image
          style={{ height: '100%', width: "100%", borderRadius: 20, }}
          source={require("../images/americadosul.jpg")} />
      </View>
      <View style={{ backgroundColor: 'grey', height: "80%", width: '50%', margin: 10, }}>
        <Text style={{fontFamily:"BonaNovaBold"}}>Teste </Text> 
        <TouchableOpacity style={{backgroundcolor:"#5A7577"}}>
<Text>Teste</Text>
        </TouchableOpacity>
      </View>
    </View>
    </Pressable>
    
  </View>
);
}



  
