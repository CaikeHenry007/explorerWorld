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
  import React, { useState } from "react";
  
  
  export default function AfricadosulModal({ setVisibleAfricadosul, visibleAfricadosul }) {
    const navigation = useNavigation();
  
   
    const places = [

      {
        source: require("../images/Africa/suljohannesburg.jpg"),
        title: "Johnnesburg",
      },
      
      {
        source: require("../images/Africa/sulkimberley.jpg"),
        title: "Kimberley",
      },
      {
        source: require("../images/Africa/sulportoelisabeth.jpg"),
        title: "Porto Elisabeth", 
      },
      {
        source: require("../images/Africa/sulcidadedocabo.jpg"),
        title: "Cidade Do Cabo",
      },
     
     
    ];
  
    return (
      <Modal transparent={true} animationType="fade" visible={visibleAfricadosul}>
        <View style={{ flex: 1, backgroundColor: "#F4CFBA" }}>
          <View style={{ width: "100%", height: "45%", borderBottomEndRadius: 40 }}>
  
            <ImageBackground source={require("../images/Africa/sulcapa.jpg")}
              style={{ height: "100%", borderBottomEndRadius: 40, flexDirection: "column" }}
              resizeMode="cover" >
              <View style={{ flexDirection: "row", height: "20%", width: "100%" }} >
  
                <Pressable onPress={() => setVisibleAfricadosul(false)} style={{ alignItems: "center", justifyContent: "flex-start", width: "10%" }} >
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
              <View style={{ height: "80%", width: "100%", alignItems: "center", justifyContent: "flex-end", }}>
                <Text style={stylesPaises.txtTituloPais} >Africa do Sul</Text>
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
                  <Pressable onPress={item.route}>
                  <View style={{ width: 250, height: "90%", borderRadius: 20, alignItems: "center", justifyContent: "flex-end", margin: 10 }}>
                    <Image source={item.source}
                      style={{ width: "100%", height: "100%", borderRadius: 20, position: "absolute" }} />
                    <Text style={stylesPaises.txtTituloPais}>{item.title}</Text>
                  </View>
                  
  
                  </Pressable>
                )
              }} />
  
          </View>
        </View>
      </Modal>
    );
  }
  