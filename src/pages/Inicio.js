import React, { useState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  ImageBackground,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import stylesInicio from "../styles/StyleInicio";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { signUp, signIn, logout, onAuthChange } from "../server/firebaseConfig"; // Importa as funções

const windowHeight = Dimensions.get("window").height / 2;

export default function Inicio() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);
  const navigation = useNavigation();

  const [font] = useFonts({
    Pacifico: require("../fonts/Pacifico-Regular.ttf"),
    Bebas: require("../fonts/Bebas.ttf"),
    Noto: require("../fonts/NotoSherif.ttf"),
    BonaNova: require("../fonts/BonaNovaItalic.ttf"),
    BonaNovaBold: require("../fonts/BonaNovaBold.ttf"),
    Lilita: require("../fonts/LilitaOne.ttf"),
    Display: require("../fonts/DisplayExtraBoldItalic.ttf"),
    DisplayBold: require("../fonts/DisplayBoldItalic.ttf"),
    DisplayItalic: require("../fonts/DisplayItalic.ttf"),
  });

  const heightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const unsubscribe = onAuthChange(setUser);  // Usa a função onAuthChange do firebaseConfig.js
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    Animated.timing(heightAnim, {
      toValue: windowHeight,
      duration: 1500,
      useNativeDriver: false,
    }).start();
  }, [heightAnim]);

  const handleAuthentication = async () => {
    try {
      if (user) {
        console.log("Usuário desconectado com sucesso!");
        await logout();
      } else {
        if (isLogin) {
          await signIn(email, password);
          console.log("Usuário conectado com sucesso!");
          navigation.navigate("Home");
        } else {
          await signUp(email, password);
          console.log("Usuário cadastrado com sucesso!");
          navigation.navigate("Home");
        }
      }
    } catch (error) {
      alert("Erro na autenticação!");
    }
  };

  if (!font) {
    return null;
  }

  return (
    <View style={{ flex: 1 }}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <StatusBar style="light" />
        <ImageBackground
          style={stylesInicio.imgBackground}
          resizeMode="cover"
          source={require("../images/Home.jpg")}
          blurRadius={6}
        >
          {user ? (
            <Image  
              source={require("../images/EXPLORAR.INICIO.png")}
              style={stylesInicio.logo}
            />
          ) : (
            <View style={stylesInicio.container}>

              <View style={stylesInicio.viewLogo}>
                <Image
                  source={require("../images/EXPLORAR.INICIO.png")}
                  style={stylesInicio.logo}
                />
              </View>

              <Animated.View
                style={[stylesInicio.animatedView, { height: heightAnim }]}
              >

                <Svg
                  viewBox="0 0 1440 320"
                  width="100%"
                  height="20%"
                  preserveAspectRatio="none"
                  style={{ marginBottom: -1 }}
                >
                  <Path
                    fill="#d5bc87"
                    fillOpacity="1"
                    d="M0,128L60,112C120,96,240,64,360,85.3C480,107,600,181,720,213.3C840,245,960,235,1080,240C1200,245,1320,267,1380,277.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                  />
                </Svg>

                <View style={stylesInicio.card}>
                  <Text style={stylesInicio.titulo}>
                    {isLogin ? "Login" : "Cadastro"}
                  </Text>
                  <View style={{ height: "100%" }}>
                    <View style={stylesInicio.viewcaixa}>
                      <MaterialCommunityIcons
                        name="email"
                        size={20}
                        color={"#f5f0e8"}
                      />
                      <TextInput
                        style={stylesInicio.caixaTexto}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                        autoCapitalize="none"
                      />
                    </View>

                    <View style={stylesInicio.viewcaixa}>
                      <MaterialCommunityIcons
                        name="lock"
                        size={20}
                        color={"#f5f0e8"}
                      />
                      <TextInput
                        style={stylesInicio.caixaTexto}
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Senha"
                        secureTextEntry
                      />
                    </View>

                    <View style={stylesInicio.viewbotoes}>
                      {isLogin && (
                        <TouchableOpacity
                          onPress={() => navigation.navigate("RecuperarSenha")}
                          style={stylesInicio.recuperarBtn}
                        >
                          <Text style={stylesInicio.recuperarText}>
                            Esqueceu sua senha?
                          </Text>
                        </TouchableOpacity>
                      )}

                      <TouchableOpacity
                        style={stylesInicio.btn}
                        onPress={handleAuthentication}
                      >
                        <Text style={stylesInicio.btntxt}>
                          {isLogin ? "Login" : "Cadastre-se"}
                        </Text>
                      </TouchableOpacity>

                      <Text
                        onPress={() => setIsLogin(!isLogin)}
                        style={stylesInicio.textoMenor}
                      >
                        {isLogin
                          ? "Ainda não tem conta? Cadastre-se"
                          : "Já tem uma conta? Faça Login"}
                      </Text>
                    </View>
                  </View>
                </View>
              </Animated.View>
            </View>
          )}
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  </View>
  );
}
