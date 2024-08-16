import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  ImageBackground,
} from "react-native";
import { useFonts } from "expo-font";
import styles from "../styles/StyleSheet.js";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Image } from "react-native";

export default function ModalAuth({
  visibleAuth,
  email,
  setEmail,
  senha,
  setSenha,
  isLogin,
  setIsLogin,
  handleAuthentication,
}) {
  const [font] = useFonts({
    Pacifico: require("../fonts/Pacifico-Regular.ttf"),
    Bebas: require("../fonts/Bebas.ttf"),
  });
  if (!font) {
    return null;
  }
  return (
    <View>
      <Modal transparent={true} animationType="fade" visible={visibleAuth}>
        <ImageBackground
          style={styles.imagemfundo}
          blurRadius={7}
          resizeMode="cover"
          source={require("../images/Home.jpg")}
        >
          <Image
            source={require("../images/logobranco.png")}
            style={styles.logo}
          />
          <View style={styles.modalcadastro}>
            <View style={styles.modalcadastro2}>
              <View style={styles.espaco}></View>
              <Text style={styles.cadastrotitulo}>
                {isLogin ? "Login" : "Cadastro"}
              </Text>
              <View style={styles.form}>
                <View style={styles.viewcaixa}>
                  <MaterialCommunityIcons
                    name="email"
                    size={20}
                    color={"#c0c0c0"}
                  />
                  <TextInput
                    style={styles.Caixa}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    autoCapitalize="none"
                  />
                </View>

                <View style={styles.viewcaixa}>
                  <MaterialCommunityIcons
                    name="lock"
                    size={20}
                    color={"#c0c0c0"}
                  />
                  <TextInput
                    style={styles.Caixa}
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="Senha"
                    secureTextEntry
                  />
                </View>
                <View style={styles.viewbotoes}>
                  <TouchableOpacity
                    style={styles.btncadastro}
                    onPress={handleAuthentication}
                  >
                    <Text style={styles.btntxt}>
                      {isLogin ? "Login" : "Cadastre-se"}
                    </Text>
                  </TouchableOpacity>

                  <Text
                    onPress={() => setIsLogin(!isLogin)}
                    style={styles.texto}
                  >
                    {isLogin
                      ? "Ainda não tem conta? Cadastre-se"
                      : "Já tem uma conta? Login"}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </Modal>
    </View>
  );
}
