import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
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
import { StatusBar } from "expo-status-bar";
import styles from "../styles/StyleSheet";
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

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StatusBar backgroundColor="#000000" color="#fff" />
      <ImageBackground
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
        resizeMode="cover"
        source={require("../images/Home.jpg")}
      >
        {user ? (
          <Text>Logado!</Text>
        ) : (
          <View style={{ height: 700 }}>
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
                    <Text style={{ color: "blue", textAlign: "center" }}>
                      Esqueceu sua senha?
                    </Text>
                  </TouchableOpacity>
                )}

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
        )}
      </ImageBackground>
    </View>
  );
}
