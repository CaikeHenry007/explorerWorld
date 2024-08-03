import { Text, View, Modal, ImageBackground, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "../styles/StyleSheet.js"
import { useFonts } from "expo-font";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function ModalLogin({closeLogin, visibleLogin, fazerLogin}) {
  const [font] = useFonts({
    "Pacifico": require("../fonts/Pacifico-Regular.ttf"),
    "Bebas": require("../fonts/Bebas.ttf")
  })
  if (!font) {
    return null;
  }


  return (
    <View>
      
      <Modal transparent={true} animationType="slide" visible={visibleLogin}>
      <ImageBackground
        style={{
          flex: 1,
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          
        }}
        blurRadius={7}
        resizeMode="cover"
        source={require("../images/Home.jpg")}>
            <View style={{alignItems: "flex-start"}} >
                <Image source={require("../images/logobranco.png")} style={{ height: 300, width: 350}} />
            </View> 
        <View style={{width: "80%", height: "60%", backgroundColor: "#5A7577", borderRadius: 20}}>

         <View style={{ height: 150}}>
        <Text style={styles.txtLogin}>Login</Text>
        </View>

        <View style={{ height: 90, alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
        <MaterialCommunityIcons
  name="account"
  size={20}
  color={'#c0c0c0'}
/>

        <TextInput style={styles.Caixa} placeholder="Username" />
        </View>
        <View style={{ height: 90, alignItems: "center", justifyContent: "center", flexDirection: "row"}}>
        <MaterialCommunityIcons
  name="lock"
  size={20}
  color={'#c0c0c0'}
/>
        <TextInput style={styles.Caixa}
        secureTextEntry={true} placeholder="Password"/>
        </View>
         
        

        <View style={{alignItems: "center", }}>
        
          <TouchableOpacity style={styles.botaoFechar} onPress={fazerLogin}>
            <Text style={{fontFamily: "Bebas", fontSize: 30, padding: 3 }}>Login</Text>
            
          </TouchableOpacity>

         
        </View>
        </View>
        </ImageBackground>
      </Modal>
    </View>
  );
}

