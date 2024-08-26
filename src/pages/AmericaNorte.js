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
import EuaModal from "../partials/ModalEUA";
import CanadaModal from "../partials/ModalCanada";
import MexicoModal from "../partials/ModalMexico";

export default function AmericaNorte() {
  const navigation = useNavigation();

  const [visibleEua, setVisibleEua] = useState(false);
  const [visibleCanada, setVisibleCanada] = useState(false);
  const [visibleMexico, setVisibleMexico] = useState(false);

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const ITEM_SIZE = 200;

  const [fontLoaded] = useFonts({
    Pacifico: require("../fonts/Pacifico-Regular.ttf"),
    Bebas: require("../fonts/Bebas.ttf"),
    Noto: require("../fonts/NotoSherif.ttf"),
    BonaNova: require("../fonts/BonaNovaItalic.ttf"),
    BonaNovaBold: require("../fonts/BonaNovaBold.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  const data = [
    {
      id: "1",
      source: require("../images/imagesAmericaNorte/estadosunidos.jpg"),
      title: "Estados Unidos",
      subtitle: "4º Maior país do mundo",
      populacao: "341 Mi",
      tamanho: "9.834.000 km²",
      route: () => setVisibleEua(true),
    },
    {
      id: "2",
      source: require("../images/imagesAmericaNorte/canada.jpg"),
      title: "Canadá",
      subtitle: "2º Maior país do mundo",
      populacao: "39 Mi",
      tamanho: "9,985,000 km²",
      route: () => setVisibleCanada(true),
    },
    {
      id: "3",
      source: require("../images/imagesAmericaNorte/mexico.jpg"),
      title: "México",
      subtitle: "14º Maior país do mundo",
      populacao: "136 Mi",
      tamanho: "1.973.000 km²",
      route: () => setVisibleMexico(true),
    },
  ];

  return (
    <View style={stylesContinente.container}>
      <View style={stylesContinente.topView}>
        <Image
          source={require("../images/imagesAmericaNorte/americadonorte2.jpg")}
          style={stylesContinente.topImage}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons name="arrow-left" size={35} color={"white"} />
        </TouchableOpacity>

        <EuaModal visibleEua={visibleEua} setVisibleEua={setVisibleEua} />

        <CanadaModal
          visibleCanada={visibleCanada}
          setVisibleCanada={setVisibleCanada}
        />
        <MexicoModal
          visibleMexico={visibleMexico}
          setVisibleMexico={setVisibleMexico}
        />

        <Text style={stylesContinente.tituloPrincipal}>America do Norte</Text>
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
