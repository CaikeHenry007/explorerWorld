import React, { useRef, useEffect } from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet
} from "react-native";
import stylesPaises from "../../styles/StylePaises";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useState } from "react";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = ITEM_WIDTH * 0.97;
const SPACING = 20;

  const data= [
    {
      source: require("../../images/imagesAmericaNorte/torontocanada.jpg"),
      title: "Toronto",
    },
    {
      source: require("../../images/imagesAmericaNorte/torrecanada.jpg"),
      title: "Torre CN",
    },
    {
      source: require("../../images/imagesAmericaNorte/cataratacanada.jpg"),
      title: "Cataratas do Niágara",
    },
    {
      source: require("../../images/imagesAmericaNorte/parliamentcanada.jpg"),
      title: "Parliament Hill",
    },
  ];

const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);

  const scrollToSection = (section) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
      y: section,
      animated: true,
    });
  }
  };

  const [selectedButton, setSelectedButton] = useState("Galeria");

  const [font] = useFonts({
    Pacifico: require("../../fonts/Pacifico-Regular.ttf"),
    Bebas: require("../../fonts/Bebas.ttf"),
    Noto: require("../../fonts/NotoSherif.ttf"),
    BonaNova: require("../../fonts/BonaNovaItalic.ttf"),
    BonaNovaBold: require("../../fonts/BonaNovaBold.ttf"),
    Lilita: require("../../fonts/LilitaOne.ttf"),
    Display: require("../../fonts/DisplayExtraBoldItalic.ttf"),
    DisplayBold: require("../../fonts/DisplayBoldItalic.ttf"),
    DisplayItalic: require("../../fonts/DisplayItalic.ttf"),
  });
  if (!font) {
    return null;
  }

 return(
  <View>
         <ScrollView ref={scrollViewRef} showsVerticalScrollIndicator={false}>
    <View style={{height: 350}}>
      <ImageBackground 
       resizeMode="cover"
       source={require("../../images/Europa/torreParisEntardecer.jpg")}
       blurRadius={7}>
    
    <TouchableOpacity
                onPress={() => navigation.navigate("Europa")}
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
              <Image
                  source={require("../../images/EXPLORAR.PAISES.png")}
                  style={{ width: "50%", height: "40%",  }}
                />
              
              <View
          style={{
            flexDirection: "row",
            height: 130,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
    <TouchableOpacity style={{ margin: 45,backgroundColor:
selectedButton === "Historia" ? "white" : "white",}}
  onPress={() =>
  {
    setSelectedButton("Historia");
      scrollToSection(250);
  }
}
>
    <Text style={{fontSize: 30, fontFamily: "Noto", color: "white", color:
selectedButton === "Historia" ? "#d4a57b" : "black",
 }} >História</Text>

    </TouchableOpacity>
    <TouchableOpacity style={{ margin: 45,backgroundColor:
selectedButton === "galeria" ? "white" : "white",}}
  onPress={() =>
  {
    setSelectedButton("galeria");
    scrollToSection(650);
  }
}
>
    <Text style={{fontSize: 30, fontFamily: "Noto", color: "white", color:
selectedButton === "galeria" ? "#d4a57b" : "black",
 }} >Galeria</Text>
    </TouchableOpacity>
    
   </View>
   </ImageBackground>
   </View>
   <View style={{ height: 850}}>
   <Text style={{fontFamily: "Noto", fontSize: 15}}> 
  Antiguidade: A região que hoje é a França foi habitada por diversos povos celtas, conhecidos como gauleses. No século I a.C., foi conquistada pelos romanos e tornou-se parte do Império Romano como a Gália.

Idade Média: Após a queda do Império Romano no século V, os francos, um povo germânico, estabeleceram um reino na área. Carlos Magno, rei dos francos, expandiu o território e fundou o Império Carolíngio. Após sua morte, o império se fragmentou em diversos reinos.

Dinastia Capetiana: Em 987, Hugo Capeto foi coroado rei, marcando o início da dinastia capetiana. Os reis capetianos gradualmente expandiram e consolidaram o território francês.

Guerra dos Cem Anos: Entre 1337 e 1453, a França e a Inglaterra lutaram na Guerra dos Cem Anos, que teve um impacto profundo na política e na sociedade francesa. A vitória francesa, com destaque para figuras como Joana d'Arc, ajudou a fortalecer o sentimento nacionalista.

Renascimento e Monarquia Absolutista: O período do Renascimento trouxe um florescimento cultural e artístico. No século XVII, Luís XIV estabeleceu um regime absolutista, centralizando o poder real.

Revolução Francesa: Em 1789, a Revolução Francesa derrubou a monarquia absoluta e instaurou a República, que passou por vários estágios, incluindo o reinado de Napoleão Bonaparte. Napoleão se tornou imperador e expandiu o território francês, mas foi derrotado em 1815.

Século XIX e XX: A França experimentou uma série de mudanças políticas, com a restauração da monarquia, o estabelecimento de várias repúblicas e impérios, e a Primeira e Segunda Guerras Mundiais. Após a Segunda Guerra Mundial, a França foi um dos fundadores da União Europeia e passou a se focar na reconstrução e no desenvolvimento.

Era Contemporânea: A França se tornou uma potência global influente no cenário internacional. Enfrentou desafios como o terrorismo, crises econômicas e questões sociais, enquanto continua a desempenhar um papel importante na política, economia e cultura global.


   </Text>
   </View>
   <View style={{height: 600}}>
        <Animated.FlatList
              data={data}
              keyExtractor={(item) => item.title}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToInterval={ITEM_WIDTH + SPACING * 2}
              decelerationRate="fast"
              bounces={true}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true }
              )}
              contentContainerStyle={{ paddingHorizontal: SPACING }}
              renderItem={({ item, index }) => {
                const inputRange = [
                  (index - 1) * (ITEM_WIDTH + SPACING * 2),
                  index * (ITEM_WIDTH + SPACING * 2),
                  (index + 1) * (ITEM_WIDTH + SPACING * 2),
                ];
  
                const scale = scrollX.interpolate({
                  inputRange,
                  outputRange: [0.9, 1, 0.9],
                  extrapolate: "clamp",
                });
  
                const opacity = scrollX.interpolate({
                  inputRange,
                  outputRange: [0.6, 1, 0.6],
                  extrapolate: "clamp",
                });
  
                const rotate = scrollX.interpolate({
                  inputRange,
                  outputRange: ["-8deg", "0deg", "8deg"],
                  extrapolate: "clamp",
                });
                return (
                  <Animated.View
                    style={[
                      styles.itemContainer,
                      {
                        transform: [{ scale }, { rotate }],
                        opacity,
                      },
                    ]}
                  >
                    <Image source={item.source} style={styles.image} />
                    <Text
                      style={{
                        color: "#000000",
                        fontSize: 20,
                        fontFamily: "Display",
                      }}
                    >
                      {item.title}
                    </Text>
                  </Animated.View>
                );
              }}
            />

        </View>
   </ScrollView>
   </View>
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  carouselContainer: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    height: 700,
  },
  header: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "blue",
  },
  spacer: {
    height: "20%",
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    marginHorizontal: SPACING,
    borderRadius: 20,
    overflow: "hidden",
    borderWidth: 9, // Adiciona a largura da borda
    borderColor: "white", // Define a cor da borda
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Carousel;