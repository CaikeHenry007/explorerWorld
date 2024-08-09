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

export default function AmericaSul() {
  const navigation = useNavigation();

  const [visibleEua, setVisibleEua] = useState(false);

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
      source: require("../images/imagesAmericaSul/brasil.jpg"),
      title: "Brasil",
      subtitle: "5º maior país do mundo ",
      populacao: "203 Mi",
      tamanho: "8.515.767 km²",
    },
    {
      source: require("../images/imagesAmericaSul/argentina.jpg"),
      title: "Argentina",
      subtitle: "8º Maior país do mundo",
      populacao: "46 Mi",
      tamanho: "2.780.400 km²",
    },
    {
      source: require("../images/imagesAmericaSul/chilejpg.jpg"),
      title: "Chile",
      subtitle: "38º Maior país do mundo",
      populacao: "19 Mi",
      tamanho: "756.102 km²",
    },
    {
      source: require("../images/imagesAmericaSul/bolivia.jpg"),
      title: "Bolívia",
      subtitle: "27º Maior país do mundo",
      populacao: "12 Mi",
      tamanho: "1.098.581 km²",
    },
    {
      source: require("../images/imagesAmericaSul/venezuela.jpg"),
      title: "Venezuela",
      subtitle: "33º Maior país do mundo",
      populacao: "28 Mi",
      tamanho: "916.445 km² km²",
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
          <MaterialCommunityIcons
            name="arrow-left-thick"
            size={35}
            color={"white"}
          />
        </TouchableOpacity>

        <EuaModal
          visibleEua={visibleEua}
          closeEua={() => setVisibleEua(false)}
        />

        <Text style={stylesContinente.tituloPrincipal}>America do Sul</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View style={stylesContinente.containerFlatlist}>
              <Pressable onPress={() => setVisibleEua(true)}>
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
