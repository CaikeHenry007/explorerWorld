import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";  // Adicionando Alert
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RecuperarSenha() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");

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

    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
        .then(() => {
            Alert.alert(
                "Atenção",
                "Enviamos um email de recuperação de senha para o email: " + email,
                [{ text: "OK", onPress: () => navigation.goBack() }]  // Corrigindo a sintaxe
            );
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
        });
    return (
        <View style={{  flex: 1, justifyContent: "center",alignItems: "center",  backgroundColor: "#5A7577" }}>
            <View style={{ width:400, justifyContent:'flex-start', alignItems:"flex-start", height: 200}}>
             <TouchableOpacity onPress={() => navigation.navigate("Inicio")} >
          <MaterialCommunityIcons
            name="arrow-left"
            size={35}
            
            color={"white"}
          />
        </TouchableOpacity>
        </View>
        <View style={{backgroundColor:"blue", height:10}}></View>
            <View style={{backgroundColor: "#D5DADB", height: 500, width: "80%", justifyContent: "center", alignItems: "center", borderRadius: 20}}>
            <View style={{backgroundColor: "#D5DADB", alignItems: "flex-start", height: 100}}>
            <Text style={{ fontSize: 30, fontFamily: "Noto" }}>Recuperar Senha</Text>
            </View>
            <View style={{backgroundColor: "#D5DADB", alignItems: "flex-start", height: 100}}>
            <TextInput
                placeholder="Digite seu email"
                keyboardType="email-address"
                returnKeyType="go"
                onChangeText={(t) => setEmail(t)}
                autoFocus={true}
                value={email}  // Adicionando o valor do email
                style={{ marginVertical: 10, padding: 8, borderWidth: 1, width: 250  }}  // Melhorando o estilo do TextInput
            />
            </View>
            
            <TouchableOpacity onPress={sendPasswordResetEmail} style={{backgroundColor: "#5A7577", height: 50, borderRadius: 10, marginTop: 10}} >
                <Text style={{fontFamily: "Noto", fontSize: 25}}>Recuperar</Text>
            </TouchableOpacity>
            </View>
            
        </View>
    );
}
