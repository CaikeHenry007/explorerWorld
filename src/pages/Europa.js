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
import GreciaModal from "../partials/ModalGrecia";
import FrancaModal from "../partials/ModalFranca";
import ItaliaModal from "../partials/ModalItalia";
import InglaterraModal from "../partials/ModalInglaterra";
import EspanhaModal from "../partials/ModalEspanha";

export default function Europa() {
  const navigation = useNavigation();

  const [visibleFranca, setVisibleFranca] = useState(false);
  const [VisibleGrecia, setVisibleGrecia] = useState(false);
  const [visibleItalia, setVisibleItalia] = useState(false);
  const [visibleInglaterra, setVisibleInglaterra] = useState(false);
  const [visibleEspanha, setVisibleEspanha] = useState(false);

  const [font] = useFonts({
    Pacifico: require("../fonts/Pacifico-Regular.ttf"),
    Bebas: require("../fonts/Bebas.ttf"),
    Noto: require("../fonts/NotoSherif.ttf"),
    BonaNova: require("../fonts/BonaNovaItalic.ttf"),
    BonaNovaBold: require("../fonts/BonaNovaBold.ttf"),
    Lilita: require("../fonts/LilitaOne.ttf"),
    Display: require("../fonts/DisplayExtraBoldItalic.ttf"),
    DisplayBold: require("../fonts/DisplayBoldItalic.ttf"),
    DisplayItalic: require("../fonts/DisplayItalic.ttf")
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
      route: () => setVisibleGrecia(true),
    },
    {
      source: require("../images/Europa/frança.jpg"),
      title: "França",
      subtitle: "48º Maior país do mundo",
      populacao: "68,4 Mi",
      tamanho: "551 500 km²",
      route: () => setVisibleFranca(true),
    },
    {
      source: require("../images/Europa/italia.jpg"),
      title: "Itália",
      subtitle: "71º Maior país do mundo",
      populacao: "60 703 666",
      tamanho: "301 338 km²",
      route: () => setVisibleItalia(true),
    },
    {
      source: require("../images/Europa/inglaterra.jpg"),
      title: "Inglaterra",
      subtitle: "106º Maior país do mundo",
      populacao: "69 689 583",
      tamanho: "130 395 km²",
      route: () => setVisibleInglaterra(true)
    },
    {
      source: require("../images/Europa/espanha.jpg"),
      title: "Espanha",
     subtitle: "51º Maior país do mundo",
      populacao: "46 300 118",
      tamanho: "504 782 km²",
      route: () => setVisibleEspanha(true)
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
            name="arrow-left"
            size={35}
            color={"white"}
          />
        </TouchableOpacity>
        <GreciaModal 
          visibleGrecia={VisibleGrecia}
          closeGrecia={() => setVisibleGrecia(false)}/>
        <FrancaModal
          visibleFranca={visibleFranca}
          closeFranca={() => setVisibleFranca(false)}
        />
        <ItaliaModal
          visibleItalia={visibleItalia}
          closeItalia={() => setVisibleItalia(false)}
        />
        <InglaterraModal
          visibleInglaterra={visibleInglaterra}
          closeInglaterra={() => setVisibleInglaterra(false)}
        />
        <EspanhaModal
          visibleEspanha={visibleEspanha}
          closeEspanha={() => setVisibleEspanha(false)}
        />
        

        <Text style={stylesContinente.tituloPrincipal}>Europa</Text>
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
