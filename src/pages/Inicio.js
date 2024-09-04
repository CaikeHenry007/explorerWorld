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
import { initializeApp } from "@firebase/app"; // Corrigido o import do Firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth"; // Corrigido o import do Firebase
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import stylesInicio from "../styles/StyleInicio";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const windowHeight = Dimensions.get("window").height / 2;


const firebaseConfig = {
  apiKey: "AIzaSyA51Q_cRKLbEJR2yohL_EQ_9eITyJNsbc0",
  authDomain: "explorer-word-827f9.firebaseapp.com",
  projectId: "explorer-word-827f9",
  storageBucket: "explorer-word-827f9",
  messagingSenderId: "768160576189",
  appId: "1:768160576189:web:7b8e36f0ac872da07dfdd4",
  measurementId: "G-XW8Q60N51C",
};

const app = initializeApp(firebaseConfig);

export default function Inicio() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (user) {
        console.log("Usuário desconectado com sucesso!");
        await signOut(auth);
      } else {
        if (isLogin) {
          await signInWithEmailAndPassword(auth, email, password);
          console.log("Usuário conectado com sucesso!");
        } else {
          await createUserWithEmailAndPassword(auth, email, password);
          console.log("Usuário cadastrado com sucesso!");
        }
      }
    } catch (error) {
      alert("Erro na autenticação!");
    }
  };
  
  useEffect(() => {
    if (user) {
      navigation.navigate("Home", { handleAuthentication });
    }
  }, [user, navigation]);

  const [fontLoaded] = useFonts({
    Pacifico: require("../fonts/Pacifico-Regular.ttf"),
    Bebas: require("../fonts/Bebas.ttf"),
    Noto: require("../fonts/NotoSherif.ttf"),
    BonaNova: require("../fonts/BonaNovaItalic.ttf"),
    BonaNovaBold: require("../fonts/BonaNovaBold.ttf"),
  });

  if (!fontLoaded) {
    return null;
  }

  const heightAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animação para aumentar a altura da View
    Animated.timing(heightAnim, {
      toValue: windowHeight, // Alvo da altura final
      duration: 1500, // Duração da animação em milissegundos
      useNativeDriver: false, // Não é possível usar o native driver para height
    }).start();
  }, [heightAnim]);

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <StatusBar style="light" />
          <ImageBackground
            style={stylesInicio.imgBackground}
            resizeMode="cover"
            source={require("../images/Home.jpg")}
            blurRadius={10}
          >
            {user ? (
              <Text>Logado!</Text>
            ) : (
              <View>
                <View
                  style={{
                    width: "100%",
                    height: "40%",
                    paddingLeft: 30,
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={require("../images/logobranco.png")}
                    style={{
                      width: "80%",
                      height: "40%",
                    }}
                  />
                </View>

                <Animated.View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    height: heightAnim,
                  }}
                >
                  <Svg
                    viewBox="0 0 1440 320"
                    width="100%"
                    height="20%"
                    preserveAspectRatio="none"
                    style={{ marginBottom: -1 }}
                  >
                    <Path
                      fill="#ECD29C"
                      fillOpacity="1"
                      d="M0,128L60,112C120,96,240,64,360,85.3C480,107,600,181,720,213.3C840,245,960,235,1080,240C1200,245,1320,267,1380,277.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                    />
                  </Svg>

                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "#ECD29C",
                    }}
                  >
                    <Text style={stylesInicio.titulo}>
                      {isLogin ? "Login" : "Cadastro"}
                    </Text>
                    <View>
                      <View >
                        <MaterialCommunityIcons
                          name="email"
                          size={20}
                          color={"#c0c0c0"}
                        />
                        <TextInput
                          style={stylesInicio.caixaTexto}
                          value={email}
                          onChangeText={setEmail}
                          placeholder="Email"
                          autoCapitalize="none"
                        />
                      </View>

                      <View >
                        <MaterialCommunityIcons
                          name="lock"
                          size={20}
                          color={"#c0c0c0"}
                        />
                        <TextInput
                          style={stylesInicio.caixaTexto}
                          value={password}
                          onChangeText={setPassword}
                          placeholder="Senha"
                          secureTextEntry
                        />
                      </View>

                      {isLogin && (
                        <TouchableOpacity
                          onPress={() => navigation.navigate("RecuperarSenha")}
                        >
                          <Text style={stylesInicio.recuperarText}>
                            Esqueceu sua senha?
                          </Text>
                        </TouchableOpacity>
                      )}

                      <View style={stylesInicio.viewbotoes}>
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
                            : "Já tem uma conta? Login"}
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
