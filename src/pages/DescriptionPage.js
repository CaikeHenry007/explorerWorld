import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Image, Animated, ScrollView, ImageBackground } from 'react-native';
import { getDescriptionById } from '../server/firebaseConfig';
import { useFonts } from "expo-font";
import stylesDescricao from "../styles/StyleDescricao";

function DescricaoPage({ route }) {
  const { id } = route.params;  
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(true);

  const [aparecerView, setAparecerView] = useState(new Animated.Value(390)); 

  useEffect(() => {
    Animated.sequence([
      Animated.timing(aparecerView, {
        toValue: 0,  // A 'View' será animada para sua posição original (de 390 para 0)
        duration: 2000,  // Ajuste o tempo de animação
        useNativeDriver: true, 
      }),
    ]).start();
  }, []);

  useEffect(() => {
    const getDescription = async () => {
      try {
        const data = await getDescriptionById(id);  
        setDescription(data);
      } catch (error) {
        console.error("Erro ao buscar descrição:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getDescription();
    } else {
      console.error("ID indefinido");
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (!description) {
    return <Text>Descrição não encontrada!</Text>;
  }

  return (
      <ImageBackground
      resizeMode="cover"
      source={require("../images/Europa/grecia1.jpg")}
      blurRadius={5}
      style={{ width: '100%', height: '100%' }}>
        <View style={{height: 420, justifyContent: "flex-end"}}>
        <Text style={stylesDescricao.texto}>{description.title}</Text>
          <Text style={stylesDescricao.texto2}>{description.country}</Text>
          <Text style={stylesDescricao.texto2}>{description.continent}</Text>
          </View>
        <Animated.View
        style={{
          transform: [{ translateY: aparecerView }],
          position: 'absolute',  // Definindo posição absoluta para que a animação funcione
          bottom: 0,  // Mantendo o componente na parte inferior
          height: "50%",
          width: "100%",
          backgroundColor: "white",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          padding: 7,
        }}
      >
        
      
      </Animated.View>
      </ImageBackground>
  );
}

export default DescricaoPage;
