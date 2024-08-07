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
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";
import {  useFonts } from "expo-font";


const imagens = [
  {
    source: require("../images/americadonorte.jpg"),
    title: "América do Norte",
    rota: "AmericaNorte",
  },
  {
    source: require("../images/americadosul.jpg"),
    title: "América do Sul",
    rota: "AmericaSul",
  },
  {
    source: require("../images/americacentral.jpg"),
    title: "América Central",
    rota: "AmericaCentro",
  },
  {
    source: require("../images/africa.jpg"),
    title: "África",
    rota: "Africa",
  },
  {
    source: require("../images/europa.jpg"),
    title: "Europa",
    rota: "Europa",
  },
  { source: require("../images/asia.jpg"), title: "Ásia", rota: "Asia" },
  {
    source: require("../images/oceania.jpg"),
    title: "Oceania",
    rota: "Oceania",
  },
];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const LARGURA_CONTAINER = width * 0.7;
const ESPACO_CONTAINER = (width - LARGURA_CONTAINER) / 2;
const ESPACO = 10;
const ALTURA_BACKDROP = height * 0.95;



function Backdrop({ scrollX }) {
  return (
    <View
      style={[
        {
          position: "absolute",
          height: ALTURA_BACKDROP,
          top: 0,
          width: width,
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
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
              { width: width, height: ALTURA_BACKDROP, opacity },
              StyleSheet.absoluteFillObject,
            ]}
          />
        );
      })}
      <LinearGradient
        colors={["#00000000", "#5A7577"]}
        style={{
          width,
          height: ALTURA_BACKDROP,
          position: "absolute",
          bottom: 0,
        }}
      />
    </View>
  );
}

export default function Home() {
  const navigation = useNavigation();

  const [font] = useFonts({
    "Pacifico": require("../fonts/Pacifico-Regular.ttf"),
    "Bebas": require("../fonts/Bebas.ttf"),
    "Noto": require("../fonts/NotoSherif.ttf"),
    "BonaNova": require("../fonts/BonaNovaItalic.ttf"),
    "BonaNovaBold": require ("../fonts/BonaNovaBold.ttf")
  })
  if (!font) {
    return null;
  }

  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
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
        decelerationRate={0}
        scrollEventThrottle={16}
        data={imagens}
        keyExtractor={(item) => item}
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
            <View style={{ width: LARGURA_CONTAINER }}>
              <Pressable onPress={() => navigation.navigate(item.rota)}>
                <Animated.View
                  style={{
                    marginHorizontal: ESPACO,
                    padding: ESPACO,
                    backgroundColor: "#fff",
                    alignItems: "center",
                    transform: [{ translateY: scrollY }],
                  }}
                >
                  <Image source={item.source} style={styles.posterImage} />
                  <Text style={{ fontSize: 22, fontFamily: "BonaNovaBold",   }}>{item.title}</Text>
                </Animated.View>
              </Pressable>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5A7577",
    justifyContent: "center",
  },
  posterImage: {
    width: "100%",
    height: LARGURA_CONTAINER * 1.2,
    resizeMode: "cover",
    margin: 0,
    marginBottom: 10,
  },
});