import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Modal,
  Pressable,
  FlatList,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import stylesPaises from "../styles/StylePaises";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { render } from "react-native-web";

export default function EuaModal({ visibleEua, setVisibleEua }) {
  const navigation = useNavigation();

  const { width } = Dimensions.get("screen");
  const OVERFLOW_HEIGHT = 70;
  const SPACING = 10;
  const ITEM_WIDTH = width * 0.8;
  const ITEM_HEIGHT = ITEM_WIDTH * 1.7;

  const places = [
    {
      source: require("../images/imagesAmericaNorte/disney.jpg"),
      title: "Disneylandia Orlando",
    },
    {
      source: require("../images/imagesAmericaNorte/estatualiberdade.jpg"),
      title: "Estátua da Liberdade",
    },
    {
      source: require("../images/imagesAmericaNorte/timessquare.jpg"),
      title: "Times Square",
    },
    {
      source: require("../images/imagesAmericaNorte/goldengate.jpg"),
      title: "Golden Gate",
    },
  ];

  return (
    <Modal transparent={true} animationType="fade" visible={visibleEua}>
      <View style={{ flex: 1, backgroundColor: "#D5DADB" }}>
        <FlatList
          data={places}
          keyExtractor={(_, index) => String(index)}
          horizontal
          inverted
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            padding: SPACING * 2,
          }}
          CellRendererComponent={({
            item,
            index,
            children,
            style,
            ...props
          }) => {
            return (
              <View style={style} index={index} {...props}>
                {children}
              </View>
            );
          }}
          renderItem={({ item, index }) => {
            return (
              <View style={{ position: "absolute", left: -ITEM_WIDTH / 2 }}>
                <Image
                  source={item.source}
                  style={{
                    width: ITEM_WIDTH,
                    height: ITEM_HEIGHT,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </Modal>
  );
}
