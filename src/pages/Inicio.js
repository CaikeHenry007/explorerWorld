import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { initializeApp } from "@firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "@firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import stylesInicio from "../styles/StyleInicio";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const firebaseConfig = {
  apiKey: "AIzaSyA51Q_cRKLbEJR2yohL_EQ_9eITyJNsbc0",
  authDomain: "explorer-word-827f9.firebaseapp.com",
  projectId: "explorer-word-827f9",
  storageBucket: "explorer-word-827f9.appspot.com",
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

  const [font] = useFonts({
    Pacifico: require("../fonts/Pacifico-Regular.ttf"),
    Bebas: require("../fonts/Bebas.ttf"),
    Noto: require("../fonts/NotoSherif.ttf"),
    BonaNova: require("../fonts/BonaNovaItalic.ttf"),
    BonaNovaBold: require("../fonts/BonaNovaBold.ttf"),
  });

  if (!font) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "android" ? 0 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={stylesInicio.container}>
          <StatusBar backgroundColor="#000000" color="#fff" />
          <ImageBackground
            style={stylesInicio.imgBackground}
            resizeMode="cover"
            source={require("../images/Home.jpg")}
          >
            {user ? (
              <Text>Logado!</Text>
            ) : (
              <View style={stylesInicio.card}>
                <ScrollView
                  contentContainerStyle={stylesInicio.scrollContainer}
                  keyboardShouldPersistTaps="handled"
                >
                  <Text style={stylesInicio.titulo}>
                    {isLogin ? "Login" : "Cadastro"}
                  </Text>
                  <View style={{ height: "65%" }}>
                    <View style={stylesInicio.viewcaixa}>
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

                    <View style={stylesInicio.viewcaixa}>
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
                </ScrollView>
              </View>
            )}
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
