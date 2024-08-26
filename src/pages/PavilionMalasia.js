import {
  Pressable,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ImageBackground,
  ScrollView,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import React, { useRef } from "react";
import styles from "../styles/StyleSheet";

export default function PavilionMalasia() {
  const navigation = useNavigation();

  const banner_h = 350;

  const scrollA = useRef(new Animated.Value(0)).current;

  const [font] = useFonts({
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
  if (!font) {
    return null;
  }

  return (
    <Animated.ScrollView
      // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollA } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
    >
      <View
        style={{
          marginTop: -1000,
          paddingTop: 1000,
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Animated.Image
          style={styles.imageAnimated(scrollA)}
          source={require("../images/Asia/pavilion.jpg")}
        />
        <Text
          style={{
            fontFamily: "DisplayBold",
            fontSize: 35,
            textAlign: "center",
          }}
        >
          Pavilion Shopping
        </Text>

        <Text
          style={{ fontFamily: "BonaNova", textAlign: "center", fontSize: 18 }}
        >
          O Pavilion é um shopping de Kuala Lumpur que reúne grandes lojas de
          marcas internacionais e regionais. Antes de visitar a cidade, muita
          gente não se dá conta, mas o comércio da capital malaia é muito forte;
          e esse é um dos melhores lugares para fazer compras na cidade, já que
          o centro comercial tem lojas de diversas marcas reconhecidas
          mundialmente.{" "}
        </Text>

        <Text
          style={{ fontFamily: "BonaNova", textAlign: "center", fontSize: 18 }}
        >
          O shopping é bem estruturado, está localizado na região central da
          cidade, tem vários andares e a cada data comemorativa recebe em seu
          saguão principal decorações muito bonitas. Aberto em 2007, o shopping
          tem 8 andares, mais de 500 lojas e faz parte de um complexo que também
          abriga hotel, edifício comercial e residencial.{" "}
        </Text>

        <View
          style={{
            backgroundColor: "#F4CFBA",
            height: 60,
            borderRadius: 20,
            flexDirection: "row",
            margin: 5,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              height: "100%",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={{ margin: 1 }}>
              <Text
                style={{ margin: 15, fontSize: 20, fontFamily: "BonaNovaBold" }}
              >
                Fotos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 1 }}>
              <Text
                style={{ margin: 15, fontSize: 20, fontFamily: "BonaNovaBold" }}
              >
                Mapa
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 1 }}>
              <Text
                style={{ margin: 15, fontSize: 20, fontFamily: "BonaNovaBold" }}
              >
                Descrição
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Animated.ScrollView>
  );
}
