import { View, ImageBackground, Text, Image} from 'react-native';
import {styles} from "../styles/StyleSheet";

export default function Inicio() {
  return (
    <View style={{flex: 1,
        alignItems: "center",
        justifyContent: "center"}}>
            <ImageBackground 
            style={{flex: 1,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",}}
            resizeMode="cover"
            source={require("../images/Home.jpg")}>
                <View style={{ alignItems: "flex-start", width: "20%", height: 1300 }}>
                <View style={{ alignItems: 'center', height: "10%", width: "30%" }}
                >
                    <Image 
                    style={{alignItems: 'center',}}
                    source={require("../images/logoEscura.png")}></Image>
            </View>
            </View>

            </ImageBackground> 
     </View>
  );
}

