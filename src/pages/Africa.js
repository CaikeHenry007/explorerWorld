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

import GuineModal from "../partials/ModalGuine";

export default function Africa() {
  const navigation = useNavigation();
  const [visibleGuine, setVisibleGuine] = useState(false);
  const [visibleEgito, setVisibleEgito] = useState(false);
 
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
      id: "1",
      source: require("../images/Africa/guine.jpg"),
      title: "Guiné",
      subtitle: "77º Maior país do mundo",
      populacao: "13 Mi",
      tamanho: "36.120 km²",
      route: () => setVisibleGuine(true),
    },
    {
      id: "2",
      source: require("../images/Africa/egito.jpg"),
      title: "Egito",
      subtitle: "29º Maior país do mundo",
      populacao: "111 Mi",
      tamanho: "1.002.000 km²",
      route: () => setVisibleEgito(true),
    },
    {
      id: "3",
      source: require("../images/Africa/nigeria.jpg"),
      title: "Nigéria",
      subtitle: "31º Maior país do mundo",
      populacao: "229 Mi",
      tamanho: "923.768 km²",
    },
    {
      id: "4",
      source: require("../images/Africa/angola.jpg"),
      title: "Angola",
      subtitle: "22º Maior país do mundo",
      populacao: "37 Mi",
      tamanho: "1.247.000 km²",
    },
    {
      id: "5",
      source: require("../images/Africa/africadosul.jpg"),
      title: "África do Sul",
      subtitle: "24º Maior país do mundo",
      populacao: "61 Mi",
      tamanho: "1.220.000 km²",
    },
  ];

  return (
    <View style={stylesContinente.container}>
      <View style={stylesContinente.topView}>
        <Image
          source={require("../images/Africa/africa.jpg")}
          style={stylesContinente.topImage}
        />

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <MaterialCommunityIcons
            name="arrow-left-thick"
            size={35}
            color={"white"}
          />
        </TouchableOpacity>

        <GuineModal
          visibleGuine={visibleGuine}
          closeGuine={() => setVisibleGuine(false)}
        />

<EgitoModal
          visibleEgito={visibleEgito}
          closeEgito={() => setVisibleEgito(false)}
        />

        

        <Text style={stylesContinente.tituloPrincipal}>África</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item}
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














