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
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

import stylesHome from "./src/styles/StyleHome";

const imagens = [
  {
    source: require("./src/images/imagesAmericaNorte/americadonorte.jpg"),
    title: "América do Norte",
    rota: "AmericaNorte",
  },
  {
    source: require("./src/images/imagesAmericaSul/americadosul.jpg"),
    title: "América do Sul",
    rota: "AmericaSul",
  },
  {
    source: require("./src/images/imagesAmericaCentro/americacentral.jpg"),
    title: "América Central",
    rota: "AmericaCentro",
  },
  {
    source: require("./src/images/Africa/africa.jpg"),
    title: "África",
    rota: "Africa",
  },
  {
    source: require("./src/images/Europa/europa.jpg"),
    title: "Europa",
    rota: "Europa",
  },
  { source: require("./src/images/Asia/asia.jpg"), 
    title: "Ásia", 
    rota: "Asia" },
  {
    source: require("./src/images/Oceania/oceania.jpg"),
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

export default function Home() {

  const [fontLoaded] = useFonts({
    Pacifico: require("./src/fonts/Pacifico-Regular.ttf"),
    Bebas: require("./src/fonts/Bebas.ttf"),
    Noto: require("./src/fonts/NotoSherif.ttf"),
    BonaNova: require("./src/fonts/BonaNovaItalic.ttf"),
    BonaNovaBold: require("./src/fonts/BonaNovaBold.ttf"),
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
                <Animated.View
                  style={[
                    {
                      transform: [{ translateY: scrollY }],
                    },
                    stylesHome.moldura,
                  ]}
                >
                  <Image source={item.source} style={stylesHome.posterImage} />
                  <Text style={stylesHome.texto}>{item.title}</Text>
                </Animated.View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

