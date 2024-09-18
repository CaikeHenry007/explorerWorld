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

export default function Africa() {
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
      id: "1",
      source: require("../images/Africa/guine.jpg"),
      title: "Guiné",
      subtitle: "77º Maior país do mundo",
      populacao: "13 Mi",
      tamanho: "36.120 km²",
      route: () => navigation.navigate("Guine"),
    },
    {
      id: "2",
      source: require("../images/Africa/egito.jpg"),
      title: "Egito",
      subtitle: "29º Maior país do mundo",
      populacao: "111 Mi",
      tamanho: "1.002.000 km²",
      route: () => navigation.navigate("Egito"),
    },
    {
      id: "3",
      source: require("../images/Africa/nigeria.jpg"),
      title: "Nigéria",
      subtitle: "31º Maior país do mundo",
      populacao: "229 Mi",
      tamanho: "923.768 km²",
      route: () => navigation.navigate("Nigeria"),
    },
    {
      id: "4",
      source: require("../images/Africa/angola.jpg"),
      title: "Angola",
      subtitle: "22º Maior país do mundo",
      populacao: "37 Mi",
      tamanho: "1.247.000 km²",
      route: () => navigation.navigate("Angola"),
    },
    {
      id: "5",
      source: require("../images/Africa/africadosul.jpg"),
      title: "África do Sul",
      subtitle: "24º Maior país do mundo",
      populacao: "61 Mi",
      tamanho: "1.220.000 km²",
      route: () => navigation.navigate("AfricaSul"),
    },
  ];

  return (
    <View style={stylesContinente.container}>
      <View style={stylesContinente.topView}>
        <Image
          source={require("../images/Africa/africa.jpg")}
          style={stylesContinente.topImage}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons name="arrow-left" size={35} color={"white"} />
        </TouchableOpacity>

        
        <Text style={stylesContinente.tituloPrincipal}>África</Text>
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
