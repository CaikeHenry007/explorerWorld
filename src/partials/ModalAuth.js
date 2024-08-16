import {
    Text,
    View,
    Modal,
    TouchableOpacity,
    TextInput,
    ImageBackground,
  } from "react-native";
  import styles from "../styles/StyleSheet.js";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
  
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
    return (
      <View>
        <Modal transparent={true} animationType="fade" visible={visibleAuth}>
          <ImageBackground
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
            blurRadius={7}
            resizeMode="cover"
            source={require("../images/Home.jpg")}
          >
            <View style={styles.modalcadastro}>
              <View style={styles.modalcadastro2}>
                <View style={{ height: "5%" }}></View>
                <Text style={styles.cadastrotitulo}>
                  {isLogin ? "Login" : "Cadastro"}
                </Text>
                <View>
                  <View
                    style={{
                      height: 90,
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
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
  
                  <View
                    style={{
                      height: 90,
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "row",
                    }}
                  >
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
                </View>
  
                <View style={{ alignItems: "center" }}>
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
                    style={{
                      borderBlockColor: "white",
                      color: "white",
                      borderBottomWidth: 1,
                    }}
                  >
                    {isLogin
                      ? "Ainda não tem conta? Cadastre-se"
                      : "Já tem uma conta? Login"}
                  </Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </Modal>
      </View>
    );
  }
  