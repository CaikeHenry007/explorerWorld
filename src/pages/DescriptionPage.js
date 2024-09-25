import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';

function DescricaoPage({ route }) {
    const id  = route.params;  // Obtendo o ID corretamente do objeto params
    const [description, setDescription] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchDescription = async () => {
        try {
          const documentSnapshot = await firestore()
            .collection('Descriptions')  // Nome da coleção no Firebase
            .doc(id)
            .get();
          

            console.log("Document Snapshot: ", documentSnapshot9ik)

          if (documentSnapshot.exists) {
            setDescription(documentSnapshot.data());

            console.log(description)
          } else {
            console.error('Documento não encontrado!');
          }
        } catch (error) {
          console.error("Erro ao buscar descrição:", error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchDescription();
    }, [id]);
  
    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
  
    if (!description) {
        console.log("não achou")
      return <Text>Descrição não encontrada!</Text>;
    }
  
    return (
      <View>
        <Text style={{color: "purple", fontWeight: "bold", fontSize: 25}}>{description.title}</Text>
        <Text style={{color: "yellow", fontWeight: "500", fontSize: 20}}>{description.country}</Text>
        <Text style={{color: "blue", fontWeight: "500", fontSize: 20}}>{description.continent}</Text>
        <Text style={{color: "black", fontWeight: "300", fontSize: 17}}>{description.description}</Text>
      </View>
    );
  }
  
  export default DescricaoPage;
  
