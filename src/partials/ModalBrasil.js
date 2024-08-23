import {Text,View,ImageBackground,TouchableOpacity,Modal,Pressable,FlatList,Image} from "react-native";
  import stylesPaises from "../styles/StylePaises";
import { useFonts } from "expo-font";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import { useNavigation } from "@react-navigation/native";
  import React, { useState } from "react";
  
  export default function BrasilModal({ visibleBrasil, setVisibleBrasil }) {
    const navigation = useNavigation();


    const [fontLoaded] = useFonts({
      Pacifico: require("../fonts/Pacifico-Regular.ttf"),
      Bebas: require("../fonts/Bebas.ttf"),
      Noto: require("../fonts/NotoSherif.ttf"),
      BonaNova: require("../fonts/BonaNovaItalic.ttf"),
      BonaNovaBold: require("../fonts/BonaNovaBold.ttf"),
      Lilita: require("../fonts/LilitaOne.ttf"),
      Display: require("../fonts/DisplayExtraBoldItalic.ttf"),
      DisplayBold: require("../fonts/DisplayBoldItalic.ttf"),
      DisplayItalic: require("../fonts/DisplayItalic.ttf")
    });
  
    if (!fontLoaded) {
      return null;
    }
  
    const places = [
      {
        source: require("../images/imagesAmericaSul/brasil5.jpg"),
        title: "Jardim Botânico",
        rota: "CristoRedentor"
      },
      {
        source: require("../images/imagesAmericaSul/rjBrasil.jpg"),
        title: "Cristo Redentor",
        rota: "CristoRedentor"
      },
      {
        source: require("../images/imagesAmericaSul/scBrasil.jpg"),
        title: "Balneário Camboriu",
      },
      {
        source: require("../images/imagesAmericaSul/spBrasil.jpg"),
        title: "Cataratas do Iguaçu",
      },
    ];
  
    return (
      <Modal transparent={true} animationType="fade" visible={visibleBrasil}>
        <View style={stylesPaises.containerModal}>
          <View style={stylesPaises.TopViewModal}>
  
            <ImageBackground source={require("../images/imagesAmericaSul/brasil.jpg")}
              style={stylesPaises.imgbackground}
              resizeMode="cover" >
              <View style={stylesPaises.Viewbtn} >
  
                <Pressable onPress={() => setVisibleBrasil(false)} style={stylesPaises.btnVoltar} >
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
                <Text style={stylesPaises.TitlePaises}>Brasil</Text>
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
  