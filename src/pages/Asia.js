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

export default function Asia() {
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
      source: require("../images/Asia/maldivas.jpg"),
      title: "Maldivas",
      subtitle: "187º Maior país do mundo",
      populacao: "581 217",
      tamanho: "298 km²",
    },
    {
      source: require("../images/Asia/emirados.jpg"),
      title: "Emirados Árabes Unidos",
      subtitle: "114º Maior país do mundo",
      populacao: "10 716 757",
      tamanho: "83 600 km²",
    },
    {
      source: require("../images/Asia/tailandia.jpg"),
      title: "Tailândia",
      subtitle: "50º Maior país do mundo",
      populacao: "70 931 793",
      tamanho: "513 120 km²",
    },
    {
      source: require("../images/Asia/china.jpg"),
      title: "China",
      subtitle: "3º Maior país do mundo",
      populacao: "1.425 Mi",
      tamanho: "9 596 961 km²",
    },
    {
      source: require("../images/Asia/japao.jpg"),
      title: "Japão",
      subtitle: "62º Maior país do mundo",
      populacao: "125 980 581",
      tamanho: "377 975 km²",
    },
  ];

  return (
    <View style={stylesContinente.container}>
      <View style={stylesContinente.topView}>
        <Image
          source={require("../images/Asia/asia.jpg")}
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

        <Text style={stylesContinente.tituloPrincipal}>Asia</Text>
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
