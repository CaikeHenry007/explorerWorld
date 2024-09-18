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

export default function AmericaSul() {
  const navigation = useNavigation();

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const ITEM_SIZE = 190;

  const [fontLoaded] = useFonts({
    Pacifico: require("../fonts/Pacifico-Regular.ttf"),
    Bebas: require("../fonts/Bebas.ttf"),
    Noto: require("../fonts/NotoSherif.ttf"),
    BonaNova: require("../fonts/BonaNovaItalic.ttf"),
    BonaNovaBold: require("../fonts/BonaNovaBold.ttf"),
    Lilita: require("../fonts/LilitaOne.ttf"),
    Display: require("../fonts/DisplayExtraBoldItalic.ttf"),
    DisplayBold: require("../fonts/DisplayBoldItalic.ttf"),
    DisplayItalic: require("../fonts/DisplayItalic.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  const data = [
    {
      id: "1",
      source: require("../images/imagesAmericaSul/Brasil2.jpg"),
      title: "Brasil",
      subtitle: "5º maior país do mundo ",
      populacao: "203 Mi",
      tamanho: "8.515.767 km²",
      route: () => navigation.navigate("Brasil"),
    },
    {
      id: "2",
      source: require("../images/imagesAmericaSul/Argentina2.jpg"),
      title: "Argentina",
      subtitle: "8º Maior país do mundo",
      populacao: "46 Mi",
      tamanho: "2.780.400 km²",
      route: () => navigation.navigate("Argentina"),
    },
    {
      id: "3",
      source: require("../images/imagesAmericaSul/Chile2.jpg"),
      title: "Chile",
      subtitle: "38º Maior país do mundo",
      populacao: "19 Mi",
      tamanho: "756.102 km²",
      route: () => navigation.navigate("Chile"),
    },
    {
      id: "4",
      source: require("../images/imagesAmericaSul/Bolivia2.jpg"),
      title: "Bolívia",
      subtitle: "27º Maior país do mundo",
      populacao: "12 Mi",
      tamanho: "1.098.581 km²",
      route: () => navigation.navigate("Bolivia"),
    },
    {
      id: "5",
      source: require("../images/imagesAmericaSul/venezuela2.jpg"),
      title: "Venezuela",
      subtitle: "33º Maior país do mundo",
      populacao: "28 Mi",
      tamanho: "916.445 km² km²",
      route: () => navigation.navigate("Venezuela"),
    },
  ];

  return (
    <View style={stylesContinente.container}>
      <View style={stylesContinente.topView}>
        <Image
          source={require("../images/imagesAmericaSul/AmericadoSul2.jpg")}
          style={stylesContinente.topImage}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons name="arrow-left" size={35} color={"white"} />
        </TouchableOpacity>

        

        <Text style={stylesContinente.tituloPrincipal}>America do Sul</Text>
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
