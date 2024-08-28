import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Pressable,
  FlatList,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import stylesPaises from "../styles/StylePaises";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { render } from "react-native-web";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EuaModal({ visibleEua, setVisibleEua }) {
  const navigation = useNavigation();

  const data = [
    {
      source: require("../images/imagesAmericaNorte/disney.jpg"),
      title: "Disneylandia Orlando",
    },
    {
      source: require("../images/imagesAmericaNorte/estatualiberdade.jpg"),
      title: "Estátua da Liberdade",
    },
    {
      source: require("../images/imagesAmericaNorte/timessquare.jpg"),
      title: "Times Square",
    },
    {
      source: require("../images/imagesAmericaNorte/goldengate.jpg"),
      title: "Golden Gate",
    },
  ];


  return (
    
          <Modal transparent={true} animationType="fade" visible={visibleEua}>
            <View style={{ flex: 1, backgroundColor: "#D5DADB" }}>
            </View>
          </Modal>
  );
}
