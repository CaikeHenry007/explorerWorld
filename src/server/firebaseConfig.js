// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

// Configurações do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyA51Q_cRKLbEJR2yohL_EQ_9eITyJNsbc0",
    authDomain: "explorer-word-827f9.firebaseapp.com",
    projectId: "explorer-word-827f9",
    storageBucket: "explorer-word-827f9",
    messagingSenderId: "768160576189",
    appId: "1:768160576189:web:7b8e36f0ac872da07dfdd4",
    measurementId: "G-XW8Q60N51C",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Funções de Autenticação

// Função para cadastrar o usuário
export const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

// Função para login
export const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

// Função para logout
export const logout = () => {
    return signOut(auth);
};

// Função para verificar estado de autenticação
export const onAuthChange = (callback) => {
    return onAuthStateChanged(auth, callback);
};

// Função para obter descrições do Firestore
export const getDescriptionById = async (id) => {
    console.log("ID recebido:", id);
    try {
        const docRef = doc(db, "Descriptions", id);  // Coleção 'Descriptions'
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data();  // Retorna os dados da descrição
        } else {
            console.error("Descrição não encontrada");
            return null;
        }
    } catch (error) {
        console.error("Erro ao buscar descrição:", error);
        throw error;
    }
};

export default app;
