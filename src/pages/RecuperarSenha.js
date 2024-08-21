import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";  // Adicionando Alert
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

export default function RecuperarSenha() {
    const navigation = useNavigation();
    const [email, setEmail] = useState("");

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
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>Recuperar Senha</Text>
            <TextInput
                placeholder="Digite seu email"
                keyboardType="email-address"
                returnKeyType="go"
                onChangeText={(t) => setEmail(t)}
                autoFocus={true}
                value={email}  // Adicionando o valor do email
                style={{ marginVertical: 10, padding: 8, borderWidth: 1, width: "80%" }}  // Melhorando o estilo do TextInput
            />
            <Button title="Recuperar" onPress={sendPasswordResetEmail} />
        </View>
    );
}
