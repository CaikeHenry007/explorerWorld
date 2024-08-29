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
import React, { useState, useRef, useEffect, useCallback } from "react";

export default function EuaModal({ visibleEua, setVisibleEua }) {
  const navigation = useNavigation();

  const data = [
    {
      key: "1",
      source: require("../images/imagesAmericaNorte/disney.jpg"),
      title: "Disneylandia Orlando",
    },
    {
      key: "2",
      source: require("../images/imagesAmericaNorte/estatualiberdade.jpg"),
      title: "Estátua da Liberdade",
    },
    {
      key: "3",
      source: require("../images/imagesAmericaNorte/timessquare.jpg"),
      title: "Times Square",
    },
    {
      key: "4",
      source: require("../images/imagesAmericaNorte/goldengate.jpg"),
      title: "Golden Gate",
    },
  ];

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visibleEua}
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable onPress={setVisibleEua}>
        <Text
          style={{
            backgroundColor: "blue",
            color: "white",
            fontSize: 30,
          }}
        >
          Voltar
        </Text>
      </Pressable>
    </Modal>
  );
}
