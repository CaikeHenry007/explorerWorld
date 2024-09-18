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
import { useFonts } from "expo-font";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import stylesHome from "../styles/StyleHome";

const imagens = [
  {
    source: require("../images/imagesAmericaNorte/americaNorte.jpg"),
    title: "América do Norte",
    rota: "AmericaNorte",
    logo: require("../images/Logo.png"),
  },
  {
    source: require("../images/imagesAmericaSul/AmericadoSul2.jpg"),
    title: "América do Sul",
    rota: "AmericaSul",
    logo: require("../images/Logo.png"),
  },
  {
    source: require("../images/imagesAmericaCentro/americacentral.jpg"),
    title: "América Central",
    rota: "AmericaCentro",
    logo: require("../images/Logo.png"),
  },
  {
    source: require("../images/Africa/africa.jpg"),
    title: "África",
    rota: "Africa",
    logo: require("../images/LogoAfrica.png"),
  },
  {
    source: require("../images/Europa/europa.jpg"),
    title: "Europa",
    rota: "Europa",
    logo: require("../images/Logo.png"),
  },
  {
    source: require("../images/Asia/asia.jpg"),
    title: "Ásia",
    rota: "Asia",
    logo: require("../images/LogoAsia.png"),
  },
  {
    source: require("../images/Oceania/oceania.jpg"),
    title: "Oceania",
    rota: "Oceania",
    logo: require("../images/Logo.png"),
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

        const blurRadius = scrollX.interpolate({
          inputRange,
          outputRange: [5, 5, 0],
        });

        return (
          <Animated.Image
            key={index}
            source={imagem.source}
            style={[
              {
                opacity,
              },
              stylesHome.imagemAnimada,
              StyleSheet.absoluteFillObject,
            ]}
            blurRadius={blurRadius}
          />
        );
      })}
    </View>
  );
}

export default function Home() {
  const navigation = useNavigation();

  const [fontLoaded] = useFonts({
    Pacifico: require("../fonts/Pacifico-Regular.ttf"),
    Bebas: require("../fonts/Bebas.ttf"),
    Noto: require("../fonts/NotoSherif.ttf"),
    BonaNova: require("../fonts/BonaNovaItalic.ttf"),
    BonaNovaBold: require("../fonts/BonaNovaBold.ttf"),
  });

  const scrollX = React.useRef(new Animated.Value(0)).current;

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
        keyExtractor={(item, index) => index.toString()}
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

          const textTranslateX = scrollX.interpolate({
            inputRange,
            outputRange: [50, 0, -50],
            extrapolate: "extend",
          });

          return (
            <View style={stylesHome.containerFlatList}>
              <View
                style={stylesHome.viewLogo}
              >
                <Image
                  source={item.logo}
                  style={stylesHome.logo} />
              </View>
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
                  <Animated.Text
                    style={[
                      {
                        transform: [{ translateX: textTranslateX }],
                      },
                      stylesHome.texto,
                    ]}
                  >
                    {item.title}
                  </Animated.Text>
                </Animated.View>
              </Pressable>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
