import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
  Pressable,
  Button,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { useNavigation } from "@react-navigation/native";

import stylesHome from "../styles/StyleHome";
import { TouchableOpacity } from "react-native";

const imagens = [
  {
    source: require("../images/imagesAmericaNorte/americadonorte2.jpg"),
    title: "América do Norte",
    rota: "AmericaNorte",
  },
  {
    source: require("../images/imagesAmericaSul/americadosul.jpg"),
    title: "América do Sul",
    rota: "AmericaSul",
  },
  {
    source: require("../images/imagesAmericaCentro/americacentral.jpg"),
    title: "América Central",
    rota: "AmericaCentro",
  },
  {
    source: require("../images/Africa/africa.jpg"),
    title: "África",
    rota: "Africa",
  },
  {
    source: require("../images/Europa/europa.jpg"),
    title: "Europa",
    rota: "Europa",
  },
  { source: require("../images/Asia/asia.jpg"), title: "Ásia", rota: "Asia" },
  {
    source: require("../images/Oceania/oceania.jpg"),
    title: "Oceania",
    rota: "Oceania",
  },
];

const width = Dimensions.get("window").width;

const LARGURA_CONTAINER = width * 0.7;
const ESPACO_CONTAINER = (width - LARGURA_CONTAINER) / 2;

function Backdrop({ scrollX }) {
  return (
    <View style={[StyleSheet.absoluteFillObject, stylesHome.containerBackdrop]}>
      {imagens.map((imagem, index) => {
        const inputRange = [
          (index - 1) * LARGURA_CONTAINER,
          index * LARGURA_CONTAINER,
          (index + 1) * LARGURA_CONTAINER,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });

        return (
          <Animated.Image
            key={index}
            source={imagem.source}
            style={[
              { opacity },
              stylesHome.imagemAnimada,
              StyleSheet.absoluteFillObject,
            ]}
          />
        );
      })}
      <LinearGradient
        colors={["#00000000", "#5A7577"]}
        style={stylesHome.gradiente}
      />
    </View>
  );
}

export default function Home({ route }) {
  const navigation = useNavigation();
  const handleAuthentication = route.params;

  const [fontLoaded] = useFonts({
    Pacifico: require("../fonts/Pacifico-Regular.ttf"),
    Bebas: require("../fonts/Bebas.ttf"),
    Noto: require("../fonts/NotoSherif.ttf"),
    BonaNova: require("../fonts/BonaNovaItalic.ttf"),
    BonaNovaBold: require("../fonts/BonaNovaBold.ttf"),
  });

  const scrollX = React.useRef(new Animated.Value(0)).current;

  // Certifique-se de que todos os hooks foram chamados antes de qualquer retorno condicional
  if (!fontLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={stylesHome.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
          height: "8%",
          padding: "2%",
        }}
      >
        <TouchableOpacity
          onPress={handleAuthentication}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 100,
            height: "100%",
            width: "12%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MaterialCommunityIcons name="logout" size={35} color={"#5A7577"} />
        </TouchableOpacity>
      </View>
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="start"
        contentContainerStyle={{
          paddingTop: 200,
          paddingHorizontal: ESPACO_CONTAINER,
        }}
        snapToInterval={LARGURA_CONTAINER}
        decelerationRate={1}
        scrollEventThrottle={16}
        data={imagens}
        keyExtractor={(item, index) => index.toString()} // Corrigido o keyExtractor
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * LARGURA_CONTAINER,
            index * LARGURA_CONTAINER,
            (index + 1) * LARGURA_CONTAINER,
          ];

          const scrollY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0],
          });
          return (
            <View style={stylesHome.containerFlatList}>
              <Pressable onPress={() => navigation.navigate(item.rota)}>
                <Animated.View
                  style={[
                    {
                      transform: [{ translateY: scrollY }],
                    },
                    stylesHome.moldura,
                  ]}
                >
                  <View style={stylesHome.sombraImage}>
                    <Image
                      source={item.source}
                      style={stylesHome.posterImage}
                    />
                  </View>
                  <Text style={stylesHome.texto}>{item.title}</Text>
                </Animated.View>
              </Pressable>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
