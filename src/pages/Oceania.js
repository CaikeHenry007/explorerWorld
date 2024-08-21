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
import AustraliaModal from "../partials/ModalAustralia";
import ModalNovaZelandia from "../partials/ModalNovaZelandia";
import ModalPapuaNovaGuine from "../partials/ModalPapuaNovaGuine";
import ModalFiji from "../partials/ModalFiji";
import ModalIlhasSalomao from "../partials/ModalilhasSalomao";

export default function Oceania() {
  const navigation = useNavigation();

  const [visibleAustralia, setVisibleAustralia] = useState(false);
  const [visibleNovaZelandia, setVisibleNovaZelandia] = useState(false);
  const [visiblePapuaNovaGuine, setVisiblePapuaNovaGuine] = useState(false);
  const [visibleFiji, setVisibleFiji] = useState(false);
  const [visibleIlhasSalomao, setVisibleIlhasSalomao] = useState(false);

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
      source: require("../images/Oceania/australia.jpg"),
      title: "Austrália",
      subtitle: "6º Maior país do mundo",
      populacao: "27 Mi",
      tamanho: "7.741.000 km²",
      route: () => setVisibleAustralia(true),
    },
    {
      source: require("../images/Oceania/novazelandia.jpg"),
      title: "Nova Zêlandia",
      subtitle: "75º Maior país do mundo",
      populacao: "5 Mi",
      tamanho: "268.021 km²",
      route: () => setVisibleNovaZelandia(true),
    },
    {
      source: require("../images/Oceania/papuanovaguine.jpg"),
      title: "Papua-Nova Guiné",
      subtitle: "54º Maior país do mundo",
      populacao: "9 Mi",
      tamanho: "462.840 km²",
      route: () => setVisiblePapuaNovaGuine(true),
    },
    {
      source: require("../images/Oceania/fiji.jpg"),
      title: "Fiji",
      subtitle: "152º Maior país do mundo",
      populacao: "900 Mil",
      tamanho: "18.274 km²",
      route: () => setVisibleFiji(true),
    },
    {
      source: require("../images/Oceania/ilhasalomao.jpg"),
      title: "Ilhas Salomão",
      subtitle: "123º Maior país do mundo",
      populacao: "700 Mil", 
      tamanho: "28.896 km²",
      route: () => setVisibleIlhasSalomao(true),
    },
  ];

  return (
    <View style={stylesContinente.container}>
      <View style={stylesContinente.topView}>
        <Image
          source={require("../images/Oceania/oceania.jpg")}
          style={stylesContinente.topImage}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons
            name="arrow-left"
            size={35}
            color={"white"}
          />
        </TouchableOpacity>

        <AustraliaModal
          visibleAustralia={visibleAustralia}
          closeAustralia={() => setVisibleAustralia(false)}
        />

        <ModalNovaZelandia 
          visibleNovaZelandia={visibleNovaZelandia}
          closeNovaZelandia={() => setVisibleNovaZelandia(false)}
        />

        <ModalPapuaNovaGuine
          visiblePapuaNovaGuine={visiblePapuaNovaGuine}
          closePapuaNovaGuine={() => setVisiblePapuaNovaGuine(false)}
        />

        <ModalFiji
          visibleFiji={visibleFiji}
          closeFiji={() => setVisibleFiji(false)}
        />

      <ModalIlhasSalomao
          visibleIlhasSalomao={visibleIlhasSalomao}
          closeIlhasSalomao={() => setVisibleIlhasSalomao(false)}
        />


        <Text style={stylesContinente.tituloPrincipal}>Oceania</Text>
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
