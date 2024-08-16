import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, Image, Button } from "react-native";
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

import ModalAuth from "../partials/ModalAuth";

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
  const navigation = useNavigation(); // Hook de navegação

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // Track user authentication state
  const [isLogin, setIsLogin] = useState(true);

  const auth = getAuth(app);

  // Verifica a autenticação do usuário
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleAuthentication = async () => {
    try {
      if (user) {
        // Se o usuário já está autenticado, faz logout
        console.log("Usuário desconectado com sucesso!");
        await signOut(auth);
      } else {
        // Faz login ou cadastro
        if (isLogin) {
          // Login
          await signInWithEmailAndPassword(auth, email, password);
          console.log("Usuário conectado com sucesso!");
        } else {
          // Cadastro
          await createUserWithEmailAndPassword(auth, email, password);
          console.log("Usuário cadastrado com sucesso!");
        }
      }
    } catch (error) {
      alert("Erro na autenticação!");
    }
  };

  // Redireciona para a Home se o usuário estiver autenticado
  useEffect(() => {
    if (user) {
      navigation.navigate("Home", { handleAuthentication });
    }
  }, [user, navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
        <View style={{ alignItems: "center", height: "100%", width: "100%" }}>
          <Image
            style={{ alignItems: "flex-end", height: 700, width: 700 }}
            source={require("../images/EXPLORAR.png")}
          />
          {user ? (
            // Exibe uma mensagem simples para indicar que o usuário está logado
            <Text>logado!</Text>
          ) : (
            // Exibe o formulário de autenticação se o usuário não estiver autenticado
            <ModalAuth
              email={email}
              setEmail={setEmail}
              senha={password}
              setSenha={setPassword}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              handleAuthentication={handleAuthentication}
            />
          )}
        </View>
      </ImageBackground>
    </View>
  );
}
