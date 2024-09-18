import {
  Pressable,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Animated,
  StatusBar,
} from "react-native";
import stylesContinente from "../styles/StyleContinentes";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import React, { useState } from "react";

export default function Oceania() {
  const navigation = useNavigation();


  const scrollY = React.useRef(new Animated.Value(0)).current;

  const ITEM_SIZE = 190;

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
      source: require("../images/Oceania/australia(2).jpg"),
      title: "Austrália",
      subtitle: "6º Maior país do mundo",
      populacao: "27 Mi",
      tamanho: "7.741.000 km²",
      route: () => navigation.navigate("Australia"),
    },
    {
      source: require("../images/Oceania/novazelandia.jpg"),
      title: "Nova Zelândia",
      subtitle: "75º Maior país do mundo",
      populacao: "5 Mi",
      tamanho: "268.021 km²",
      route: () => navigation.navigate("NovaZelandia"),
    },
    {
      source: require("../images/Oceania/papuanovaguine(1).jpg"),
      title: "Papua-Nova Guiné",
      subtitle: "54º Maior país do mundo",
      populacao: "9 Mi",
      tamanho: "462.840 km²",
      route: () => navigation.navigate("PapuaGuine"),
    },
    {
      source: require("../images/Oceania/fiji (1).jpg"),
      title: "Fiji",
      subtitle: "152º Maior país do mundo",
      populacao: "900 Mil",
      tamanho: "18.274 km²",
      route: () => navigation.navigate("Fiji"),
    },
    {
      source: require("../images/Oceania/ilhassalomao.jpg"),
      title: "Ilhas Salomão",
      subtitle: "123º Maior país do mundo",
      populacao: "700 Mil",
      tamanho: "28.896 km²",
      route: () => navigation.navigate("IlhasSalomao"),
    },
  ];

  return (
    <View style={stylesContinente.container}>
      <View style={stylesContinente.topView}>
        <Image
          source={require("../images/Oceania/oceania.jpg")}
          style={stylesContinente.topImage}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons name="arrow-left" size={35} color={"white"} />
        </TouchableOpacity>


        <Text style={stylesContinente.tituloPrincipal}>Oceania</Text>
      </View>

      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        contentContainerStyle={{
          padding: 20,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
            extrapolate: "clamp",
          });

          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
            extrapolate: "clamp",
          });

          return (
            <View style={stylesContinente.containerFlatlist}>
              <Pressable onPress={item.route}>
                <Animated.View
                  style={[
                    stylesContinente.card,
                    { transform: [{ scale }], opacity },
                  ]}
                >
                  <View style={stylesContinente.ImgRotate}>
                    <Image
                      source={item.source}
                      style={stylesContinente.imagePais}
                    />
                  </View>
                  <View style={stylesContinente.viewAlinhamento}>
                    <Text style={stylesContinente.tituloPais}>
                      {item.title}
                    </Text>
                    <Text style={stylesContinente.subtituloPais}>
                      {item.subtitle}
                    </Text>
                    <View style={stylesContinente.viewIcones}>
                      <View style={stylesContinente.icones}>
                        <MaterialCommunityIcons
                          name="account-group"
                          size={25}
                          color={"white"}
                        />
                        <View style={stylesContinente.espaco}></View>
                        <Text style={stylesContinente.textosIcones}>
                          {item.populacao}
                        </Text>
                      </View>
                      <View style={stylesContinente.espaco}></View>
                      <View style={stylesContinente.icones}>
                        <Text style={stylesContinente.textosIcones}>
                          {item.tamanho}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Animated.View>
              </Pressable>
            </View>
          );
        }}
      />
    </View>
  );
}
