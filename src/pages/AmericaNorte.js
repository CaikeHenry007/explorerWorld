import { Button, Text, View } from "react-native";
import styles from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";

export default function AmericaNorte() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35 }}>América do Norte</Text>
      <Button
        title="voltar para home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
