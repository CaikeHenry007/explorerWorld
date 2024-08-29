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
import BrasilModal from "../partials/ModalBrasil";
import ArgentinaModal from "../partials/ModalArgentina";
import ChileModal from "../partials/ModalChile";
import BoliviaModal from "../partials/ModalBolivia";
import VenezuelaModal from "../partials/ModalVenezuela";

export default function AmericaSul() {
  const navigation = useNavigation();

  const [visibleBrasil, setVisibleBrasil] = useState(false);
  const [visibleArgentina, setVisibleArgentina] = useState(false);
  const [visibleChile, setVisibleChile] = useState(false);
  const [visibleBolivia, setVisibleBolivia] = useState(false);
  const [visibleVenezuela, setVisibleVenezuela] = useState(false);

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
      source: require("../images/imagesAmericaSul/brasil.jpg"),
      title: "Brasil",
      subtitle: "5º maior país do mundo ",
      populacao: "203 Mi",
      tamanho: "8.515.767 km²",
      route: () => setVisibleBrasil(true),
    },
    {
      id: "2",
      source: require("../images/imagesAmericaSul/argentina.jpg"),
      title: "Argentina",
      subtitle: "8º Maior país do mundo",
      populacao: "46 Mi",
      tamanho: "2.780.400 km²",
      route: () => setVisibleArgentina(true),
    },
    {
      id: "3",
      source: require("../images/imagesAmericaSul/chilejpg.jpg"),
      title: "Chile",
      subtitle: "38º Maior país do mundo",
      populacao: "19 Mi",
      tamanho: "756.102 km²",
      route: () => setVisibleChile(true),
    },
    {
      id: "4",
      source: require("../images/imagesAmericaSul/bolivia.jpg"),
      title: "Bolívia",
      subtitle: "27º Maior país do mundo",
      populacao: "12 Mi",
      tamanho: "1.098.581 km²",
      route: () => setVisibleBolivia(true),
    },
    {
      id: "5",
      source: require("../images/imagesAmericaSul/venezuela.jpg"),
      title: "Venezuela",
      subtitle: "33º Maior país do mundo",
      populacao: "28 Mi",
      tamanho: "916.445 km² km²",
      route: () => setVisibleVenezuela(true),
    },
  ];

  return (
    <View style={stylesContinente.container}>
      <View style={stylesContinente.topView}>
        <Image
          source={require("../images/imagesAmericaSul/americadosul.jpg")}
          style={stylesContinente.topImage}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons name="arrow-left" size={35} color={"white"} />
        </TouchableOpacity>

        <BrasilModal
          visibleBrasil={visibleBrasil}
          setVisibleBrasil={setVisibleBrasil}
        />

        <ArgentinaModal
          visibleArgentina={visibleArgentina}
          setVisibleArgentina={setVisibleArgentina}
        />
        <ChileModal
          visibleChile={visibleChile}
          setVisibleChile={setVisibleChile}
        />
        <BoliviaModal
          visibleBolivia={visibleBolivia}
          setVisibleBolivia={setVisibleBolivia}
        />
        <VenezuelaModal
          visibleVenezuela={visibleVenezuela}
          setVisibleVenezuela={setVisibleVenezuela}
        />

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
