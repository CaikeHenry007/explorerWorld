import {
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import styles from "../styles/StyleSheet";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ALTURA_GRADIENTE = height * 0.4;

export default function EuaModal({ visibleEua, closeEua }) {
  const navigation = useNavigation();

  const places = [
    {
      source: require("../images/estatualiberdade.jpg"),
      title: "Estátua da Liberdade",
    },
    {
      source: require("../images/timessquare.jpg"),
      title: "Times Square",
    },
    {
      source: require("../images/goldengate.jpg"),
      title: "Golden Gate",
    },
  ];
  return (
    <View>
      <Modal transparent={true} animationType="fade" visible={visibleEua}>
        <View style={{ flex: 1, backgroundColor: "#F4CFBA" }}>
          <View
            style={{ height: "50%", backgroundColor: "#F4CFBA", width: "100%" }}
          >
            <ImageBackground
              source={require("../images/estadosunidos.jpg")}
              style={{ height: "100%", width: "100%", alignItems: "center" }}
            >
              <View
                style={{ width: "100%", alignItems: "stretch", margin: "1%" }}
              >
                <TouchableOpacity onPress={closeEua}>
                  <MaterialCommunityIcons
                    name="arrow-left-thick"
                    size={35}
                    color={"white"}
                  />
                </TouchableOpacity>
              </View>
              <View style={{}}>
                <Text style={{ fontSize: 35, color: "#000000" }}>
                  Estados Unidos
                </Text>
              </View>
              <LinearGradient
                colors={["#00000000", "#F4CFBA"]}
                style={{
                  width,
                  height: ALTURA_GRADIENTE,
                  position: "absolute",
                  bottom: 0,
                }}
              />
            </ImageBackground>
          </View>
          <FlatList
            data={places}
            style={{ width: "100%", height: "50%" }}
            horizontal={true}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <View
                  style={{ height: "5900%", width: "60%", borderRadius: 20 }}
                >
                  <ImageBackground
                    source={item.source}
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Text>{item.Text}</Text>
                  </ImageBackground>
                </View>
              );
            }}
          />
        </View>
      </Modal>
    </View>
  );
}
