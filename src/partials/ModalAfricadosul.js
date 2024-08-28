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
        <View style={stylesPaises.containerModal}>
          <View style={stylesPaises.TopViewModal}>
  
            <ImageBackground source={require("../images/Africa/sulcapa.jpg")}
              style={stylesPaises.imgbackground}
              resizeMode="cover" >
              <View style={stylesPaises.Viewbtn} >
  
                <Pressable onPress={() => setVisibleAfricadosul(false)} style={stylesPaises.btnVoltar} >
                  <MaterialCommunityIcons
                    name="arrow-left"
                    size={35}
                    color="white" />
                </Pressable>
                <View style={stylesPaises.Viewimg} >
                  <Image source={require("../images/logobranco.png")}
                    style={stylesPaises.logoImg} />
                </View>
              </View>
              <View style={stylesPaises.txtTitle}>
                <Text style={stylesPaises.TitlePaises} >Africa do Sul</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={stylesPaises.ViewFlatList} >
            <FlatList
              data={places}
              horizontal={true}
              keyExtractor={(item) => item}
              renderItem={({ item }) => {
                return (
                  <Pressable onPress={item.route}>
                  <View style={stylesPaises.Viewimages}>
                    <Image source={item.source}
                      style={stylesPaises.imgFlatList} />
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
  