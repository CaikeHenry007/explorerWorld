import {
    Pressable,
    Text,
    View,
    TouchableOpacity,
    Image,
    FlatList,
  } from "react-native";
  import stylesContinente from "../styles/StyleContinentes";
  import { useNavigation } from "@react-navigation/native";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import { useFonts } from "expo-font";
  import React, { useState } from "react";
  
  
  export default function CristoRedentor() {
    const navigation = useNavigation();
  
    const [font] = useFonts({
      Pacifico: require("../fonts/Pacifico-Regular.ttf"),
      Bebas: require("../fonts/Bebas.ttf"),
      Noto: require("../fonts/NotoSherif.ttf"),
      BonaNova: require("../fonts/BonaNovaItalic.ttf"),
      BonaNovaBold: require("../fonts/BonaNovaBold.ttf"),
    });
    if (!font) {
      return null;
    }
  
    
  
    return (
          
        <View>
           <TouchableOpacity onPress={() => navigation.navigate("BrasilModal")}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={35}
            color={"white"}
          />
        </TouchableOpacity>
        </View>
    );
  }
  