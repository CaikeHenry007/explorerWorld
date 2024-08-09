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

export default function AmericaCentro() {
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
      source: require("../images/imagesAmericaCentro/panamá.jpg"),
      title: "Panamá",
      subtitle: "3º maior país da América Central",
      populacao: " 4,4 Mi",
      tamanho: " 75.417km²",
    },
    {
      source: require("../images/imagesAmericaCentro/costarica.jpg"),
      title: "Costa Rica",
      subtitle: "4º maior país da América Central",
      populacao: "5,2 Mi",
      tamanho: "51.100 km²",
    },
    {
      source: require("../images/imagesAmericaCentro/nicaragua.jpg"),
      title: "Nicarágua",
      subtitle: "maior país da América Central",
      populacao: "6,9 Mi",
      tamanho: "130.373 km²",
    },
    {
      source: require("../images/imagesAmericaCentro/honduras.jpg"),
      title: "Honduras",
      subtitle: "2º maior país da América Central",
      populacao: "10 Mi",
      tamanho: "112.492 km²",
    },
    {
      source: require("../images/imagesAmericaCentro/elsalvador2.jpg"),
      title: "El Salvador",
      subtitle: "5º maior país da América Central",
      populacao: "6,5 Mi",
      tamanho: "21.041 km²",
    },
  ];

  return (
    <View style={stylesContinente.container}>
      <View style={stylesContinente.topView}>
        <Image
          source={require("../images/imagesAmericaCentro/americacentral.jpg")}
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

        <Text style={stylesContinente.tituloPrincipal}>America Central</Text>
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
