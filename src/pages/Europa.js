import {
  Pressable,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import stylesContinente from "../styles/StyleContinentes";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useFonts } from "expo-font";
import React, { useState } from "react";
import EuaModal from "../partials/ModalEUA";
import GreciaModal from "../partials/ModalGrecia";

export default function Europa() {
  const navigation = useNavigation();

  const [visibleGrecia, setVisibleGrecia] = useState(false);

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
      source: require("../images/Europa/grecia.jpg"),
      title: "Grécia",
      subtitle: "95º Maior país do mundo",
      populacao: "10 256 001",
      tamanho: "9131 990 km²",
    },
    {
      source: require("../images/Europa/frança.jpg"),
      title: "França",
      subtitle: "48º Maior país do mundo",
      populacao: "68,4 Mi",
      tamanho: "551 500 km²",
    },
    {
      source: require("../images/Europa/italia.jpg"),
      title: "Itália",
      subtitle: "71º Maior país do mundo",
      populacao: "60 703 666",
      tamanho: "301 338 km²",
    },
    {
      source: require("../images/Europa/inglaterra.jpg"),
      title: "Inglaterra",
      subtitle: "106º Maior país do mundo",
      populacao: "69 689 583",
      tamanho: "130 395 km²",
    },
    {
      source: require("../images/Europa/amsterdã.jpg"),
      title: "Holanda",
     subtitle: "132º Maior país do mundo",
      populacao: "17,9 Mi",
      tamanho: "41 850 km²",
    },
  ];

  return (
    <View style={stylesContinente.container}>
      <View style={stylesContinente.topView}>
        <Image
          source={require("../images/Europa/europa.jpg")}
          style={stylesContinente.topImage}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons
            name="arrow-left-thick"
            size={35}
            color={"white"}
          />
        </TouchableOpacity>

        <GreciaModal
          visibleGrecia={visibleGrecia}
          closeGrecia={() => setVisibleGrecia(false)}
        />

        <Text style={stylesContinente.tituloPrincipal}>Europa</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View style={stylesContinente.containerFlatlist}>
              <Pressable onPress={() => setVisibleGrecia(true)}>
                <View style={stylesContinente.card}>
                  <Image
                    source={item.source}
                    style={stylesContinente.imagePais}
                  />
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
                </View>
              </Pressable>


              
            </View>
          );
        }}
      />
    </View>
  );
}
