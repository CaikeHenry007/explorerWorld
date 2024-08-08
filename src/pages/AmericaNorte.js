import {
  Pressable,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import styles from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import EuaModal from "../partials/ModalEUA";

export default function AmericaNorte() {
  const navigation = useNavigation();

  const [visibleEua, setVisibleEua] = useState(false);

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

  const data = [
    {
      source: require("../images/estadosunidos.jpg"),
      title: "Estados Unidos",
      subtitle: "4º Maior país do mundo",
      populacao: "341 Mi",
      tamanho: "9.834.000 km²",
    },
    {
      source: require("../images/canada.jpg"),
      title: "Canadá",
      subtitle: "2º Maior país do mundo",
      populacao: "39 Mi",
      tamanho: "9,985,000 km²",
    },
    {
      source: require("../images/mexico.jpg"),
      title: "México",
      subtitle: "14º Maior país do mundo",
      populacao: "136 Mi",
      tamanho: "1.973.000 km²",
    },
  ];

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#D5DADB" }}>
      <View
        style={{ height: "50%", width: "100%", backgroundColor: "#D5DADB" }}
      >
        <Image
          source={require("../images/americadonorte2.jpg")}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "black",
            borderRadius: 20,
            height: "10%",
            width: "10%",
          }}
          onPress={() => navigation.navigate("Home")}
        >
          <MaterialCommunityIcons
            name="arrow-left-thick"
            size={35}
            color={"white"}
          />
        </TouchableOpacity>

        <EuaModal
          visibleEua={visibleEua}
          closeEua={() => setVisibleEua(false)}
        />

        <Text
          style={{
            fontFamily: "BonaNovaBold",
            textAlign: "center",
            fontSize: 35,
            margin: 20,
            color: "white",
          }}
        >
          America do Norte
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View style={{ alignItems: "center" }}>
              <Pressable onPress={() => setVisibleEua(true)}>
                <View
                  style={{
                    backgroundColor: "white",
                    height: 150,
                    width: "95%",
                    borderRadius: 20,
                    margin: 18,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={item.source}
                    style={{
                      width: "30%",
                      height: "100%",
                      borderRadius: 20,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "center",
                      width: "70%",
                      height: "100%",
                    }}
                  >
                    <Text style={{ fontFamily: "BonaNovaBold", fontSize: 17 }}>
                      {item.title}
                    </Text>
                    <Text style={{ fontFamily: "BonaNova", fontSize: 15 }}>
                      {item.subtitle}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        height: "50%",
                        width: "95%",
                        alignItems: "flex-end",
                      }}
                    >
                      <View
                        style={{
                          width: "45%",
                          height: "40%",
                          backgroundColor: "#5A7577",
                          borderRadius: 20,
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "row",
                        }}
                      >
                        <MaterialCommunityIcons
                          name="account-group"
                          size={25}
                          color={"white"}
                        />
                        <View style={{ width: "10%" }}></View>
                        <Text
                          style={{
                            fontFamily: "Bebas",
                            fontSize: 18,
                            color: "#ffffff",
                          }}
                        >
                          {item.populacao}
                        </Text>
                      </View>
                      <View style={{ width: "10%" }}></View>
                      <View
                        style={{
                          width: "45%",
                          height: "40%",
                          backgroundColor: "#5A7577",
                          borderRadius: 20,
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "row",
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "Bebas",
                            fontSize: 18,
                            color: "#ffffff",
                          }}
                        >
                          {item.tamanho}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
}
