import React, { useRef, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated,
  FlatList,
  Image,
} from "react-native";
import stylesPaises from "../styles/StylePaises";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

export default function CanadaTeste() {
  const navigation = useNavigation();

  const places = [
    {
      source: require("../images/imagesAmericaNorte/torontocanada.jpg"),
      title: "Toronto",
    },
    {
      source: require("../images/imagesAmericaNorte/torrecanada.jpg"),
      title: "Torre CN",
    },
    {
      source: require("../images/imagesAmericaNorte/cataratacanada.jpg"),
      title: "Cataratas do Niágara",
    },
    {
      source: require("../images/imagesAmericaNorte/parliamentcanada.jpg"),
      title: "Parliament Hill",
    },
  ];

  const scaleAnim = useRef(new Animated.Value(0)).current;
  const bgOpacityAnim = useRef(new Animated.Value(0)).current;
  const itemAnimations = places.map(
    () => useRef(new Animated.Value(0)).current
  );

  useEffect(() => {
    // Primeiro, anima a opacidade da imagem de fundo
    Animated.timing(bgOpacityAnim, {
      toValue: 1,
      duration: 1,
      useNativeDriver: true,
    }).start(() => {
      // Depois que a imagem de fundo aparecer, começa a animação de escala
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }).start(() => {
        // Após a escala, anima os itens do FlatList um de cada vez
        itemAnimations.forEach((anim, index) => {
          Animated.timing(anim, {
            toValue: 1,
            duration: 300,
            delay: index * 100, // Cada item com um atraso
            useNativeDriver: true,
          }).start();
        });
      });
    });
  }, []);

  return (
    <View style={stylesPaises.containerModal}>
      <Animated.View
        style={{
          flex: 1,
          transform: [{ scale: scaleAnim }],
          opacity: bgOpacityAnim,
        }}
      >
        <ImageBackground
          source={require("../images/imagesAmericaNorte/canada.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#00000055",
            }}
          >
            <View
              style={{ flexDirection: "row", height: "20%", width: "100%" }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("AmericaNorte")}
                style={{
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "10%",
                }}
              >
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={35}
                  color="white"
                />
              </TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  height: "100%",
                  width: "80%",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../images/logobranco.png")}
                  style={{ width: "80%", height: "100%" }}
                />
              </View>
            </View>

            <View
              style={{
                height: "20%",
                width: "100%",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Text style={[stylesPaises.TitlePaises, { left: "10%" }]}>
                Lugares
              </Text>
            </View>

            <View
              style={{
                width: "100%",
                height: "60%",
                justifyContent: "flex-end",
              }}
            >
              <FlatList
                data={places}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  justifyContent: "flex-end",
                  height: "95%",
                }}
                keyExtractor={(item) => item.title}
                renderItem={({ item, index }) => {
                  return (
                    <Animated.View
                      style={{
                        width: 250,
                        height: "70%",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        margin: 10,
                        opacity: itemAnimations[index],
                        backgroundColor: "#ffffff",
                        paddingTop: "4%",
                      }}
                    >
                      <Image
                        source={item.source}
                        style={{
                          width: "90%",
                          height: "88%",
                        }}
                      />
                      <Text style={{ color: "#000000", fontSize: 21 }}>
                        {item.title}
                      </Text>
                    </Animated.View>
                  );
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </Animated.View>
    </View>
  );
}
