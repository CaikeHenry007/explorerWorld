import { View, ImageBackground, Text, Image, TouchableOpacity } from 'react-native';
import styles from "../styles/StyleSheet";
import { useFonts } from 'expo-font';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from "expo-status-bar";

import ModalCadastro from '../partials/ModalCadastro';
import ModalLogin from '../partials/ModalLogin';

export default function Inicio() {
  const navigation = useNavigation();

  const [visibleLogin, setVisibleLogin] = useState(false);
  const [visibleCadastro, setVisibleCadastro] = useState(false);
  
  const [font] = useFonts({
    "Pacifico": require("../fonts/Pacifico-Regular.ttf"),
    "Bebas": require("../fonts/Bebas.ttf")
  })
  if (!font) {
    return null;
  }
 
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    }}>
      <StatusBar backgroundColor='#000000' color="#fff" />
      <ImageBackground
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        resizeMode="cover"
        source={require("../images/Home.jpg")}>

        <View style={{ alignItems: 'center', height: "100%", width: "100%" }}
        >
          <Image
            style={{ alignItems: "flex-end", height: 700, width: 700,  }}
            source={require("../images/EXPLORAR.png")}></Image>

        
          <TouchableOpacity style={{
            backgroundColor: "#5A7577",
            borderRadius: 20,
            height: 50,
            width: "50%"
          }}
            onPress={() => setVisibleLogin(true)}>

            <Text style={{ color: "white", textAlign: 'center', fontSize: 25, padding: 8, fontFamily: "Bebas"}}>Login</Text>

          </TouchableOpacity>
          <TouchableOpacity style=
            {{
              backgroundColor: "#5A7577",
              borderRadius: 20,
              height: 50,
              width: "50%",
              margin: 10
            }}
            onPress={() => setVisibleCadastro(true)}>
            <Text style={{ color: "white", textAlign: 'center', fontSize: 25, fontFamily: "Bebas", padding: 8,  }}>Cadastro</Text>
          </TouchableOpacity>
          
        </View>

        <ModalLogin 
          visibleLogin={visibleLogin} 
          fazerLogin={() => navigation.navigate("Home")} 
          closeLogin={() => setVisibleLogin(false)} 
        />

        <ModalCadastro visibleCadastro={visibleCadastro} 
        fazerCadastro={() => navigation.navigate("Home")} 
        closeCadastro={() => setVisibleCadastro(false)} />

      </ImageBackground>
    </View>
  );
}

