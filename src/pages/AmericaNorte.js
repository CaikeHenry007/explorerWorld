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
import CanadaModal from "../partials/ModalCanada";
import MexicoModal from "../partials/ModalMexico";

export default function AmericaNorte() {
  const navigation = useNavigation();

  const [visibleEua, setVisibleEua] = useState(false);
  const [visibleCanada, setVisibleCanada] = useState(false);
  const [visibleMexico, setVisibleMexico] = useState(false);

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
          <MaterialCommunityIcons
            name="arrow-left"
            size={35}
            color={"white"}
          />
        </TouchableOpacity>

        <EuaModal
          visibleEua={visibleEua}
          closeEua={() => setVisibleEua(false)}
        />

        <CanadaModal
          visibleCanada={visibleCanada}
          closeCanada={() => setVisibleCanada(false)}
        />
        <MexicoModal
        visibleMexico={visibleMexico}
        closeMexico={() => setVisibleMexico(false)}
          
        
        
        />

        <Text style={stylesContinente.tituloPrincipal}>America do Norte</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View style={stylesContinente.containerFlatlist}>
              <Pressable onPress={item.route}>
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
