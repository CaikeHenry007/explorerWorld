import {Text,View,ImageBackground,TouchableOpacity,Modal,Pressable,FlatList,Image} from "react-native";
  import stylesPaises from "../styles/StylePaises";
import { useFonts } from "expo-font";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  import { useNavigation } from "@react-navigation/native";
  
  export default function BoliviaModal({ visibleBolivia, closeBolivia }) {
    const navigation = useNavigation();


    const [fontLoaded] = useFonts({
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
  
    if (!fontLoaded) {
      return null;
    }
  
    const places = [
      {
        source: require("../images/imagesAmericaSul/islaIncahuasiBolivia.jpg"),
        title: "BIsla Incahuasi",
      },
      {
        source: require("../images/imagesAmericaSul/LagunacoloradaBolivia.jpg"),
        title: "Laguna Colorada",
      },
      {
        source: require("../images/imagesAmericaSul/LapozaVerdeBolivia.jpg"),
        title: "Lapoza Verde",
      },
      {
        source: require("../images/imagesAmericaSul/valledelalunaBolivia.jpg"),
        title: "Valle de La Luna ",
      },
    ];
  
    return (
      <Modal transparent={true} animationType="fade" visible={visibleBolivia}>
        <View style={stylesPaises.containerModal}>
          <View style={stylesPaises.TopViewModal}>
  
            <ImageBackground source={require("../images/imagesAmericaSul/bolivia.jpg")}
              style={stylesPaises.imgbackground}
              resizeMode="cover" >
              <View style={stylesPaises.Viewbtn} >
  
                <Pressable onPress={closeBolivia} style={stylesPaises.btnVoltar} >
                  <MaterialCommunityIcons
                    name="arrow-left"
                    size={35}
                    color="white" />
                </Pressable>
                <View style={stylesPaises.Viewimg} >
                  <Image source={require("../images/logobranco.png")}
                    style={stylesPaises.logoImg} />
                </View>
              </View>
              <View style={stylesPaises.txtTitle}>
                <Text style={stylesPaises.TitlePaises}>Bolívia</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={stylesPaises.ViewFlatList} >
            <FlatList
              data={places}
              horizontal={true}
              keyExtractor={(item) => item}
              renderItem={({ item }) => {
                return (
                  <View style={stylesPaises.Viewimages}>
                    <Image source={item.source}
                      style={stylesPaises.imgFlatList} />
                    <Text style={stylesPaises.txtTituloPais}>{item.title}</Text>
                  </View>
                )
              }} />
  
          </View>
        </View>
      </Modal>
    );
  }
  