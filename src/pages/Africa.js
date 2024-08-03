import { Button, Text, View } from "react-native";
import styles from "../styles/StyleSheet";
import { useNavigation } from "@react-navigation/native";

export default function Africa() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 35 }}>África</Text>
      <Button
        title="voltar para home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
