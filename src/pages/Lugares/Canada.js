import React, { useRef } from "react";
import {
  View,
  FlatList,
  Animated,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
} from "react-native";

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
  
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../images/Home.jpg")}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
          blurRadius={6}
        >
          <Animated.View
            style={{
              flex: 1,
              justifyContent: "center",
              height: 700,
            }}
          >
            <View
              style={{
                height: 200,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              
              <Image
              source={require("../../images/EXPLORAR.INICIO.png")}
              style={{height:"100%", width:"100%"}}
               />

            </View>
            <View
              style={{
                alignItems: "flex-start",
                justifyContent: "center",
                height: "20%",
              }}
            >
              <Text
                style={{
                  left: "10%",
                  color: "#ffffff",
                  fontSize: 30,
                  fontFamily: "Display",
                }}
              >
                Lugares
              </Text>
            </View>
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
          </Animated.View>
        </ImageBackground>
      </View>
    );
  };
  
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