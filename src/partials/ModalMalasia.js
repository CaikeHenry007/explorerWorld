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
  
  export default function MalasiaModal({ visibleMalasia, closeMalasia }) {
    const navigation = useNavigation();

  
    const places = [
      {
        source: require("../images/Asia/pavilion.jpg"),
        title: "Palivion",
        rota: "PavilionMalasia"
      },
      {
        source: require("../images/Asia/lego.jpg"),
        title: "LEGOLAND",
      },
      {
        source: require("../images/Asia/merdeka.jpg"),
        title: "Merdeka Square",
      },
      {
        source: require("../images/Asia/batu.jpg"),
        title: "Batu Caves",
      },
    ];
    
  
    return (
      <Modal transparent={true} animationType="fade" visible={visibleMalasia}>
        <View style={{ flex: 1, backgroundColor: "#F4CFBA" }}>
          <View style={{ width: "100%", height: "45%", borderBottomEndRadius: 40 }}>
  
            <ImageBackground source={require("../images/Asia/malasia.jpg")}
              style={{ height: "100%", borderBottomEndRadius: 40, flexDirection: "column" }}
              resizeMode="cover" >
              <View style={{ flexDirection: "row", height: "20%", width: "100%" }} >
  
                <Pressable onPress={closeMalasia} style={{ alignItems: "center", justifyContent: "flex-start", width: "10%" }} >
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
                <Text style={stylesPaises.txtTituloPais} >Malásia</Text>
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
                  <Pressable onPress={() => navigation.navigate(item.rota)}>
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
  