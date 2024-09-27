import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { getDescriptionById, id } from '../server/firebaseConfig'; // Importa a função

function DescricaoPage({ route }) {
  const { id } = route.params;  // Desestruturando o ID de params
  const [description, setDescription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDescription = async () => {
      try {
        const data = await getDescriptionById(id);  // Chama a função de fetch do Firebase
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
    <View>
      <Text style={{color: "purple", fontWeight: "bold", fontSize: 25}}>{description.title}</Text>
      <Text style={{color: "yellow", fontWeight: "500", fontSize: 20}}>{description.country}</Text>
      <Text style={{color: "blue", fontWeight: "500", fontSize: 20}}>{description.continent}</Text>
      <Text style={{color: "black", fontWeight: "300", fontSize: 17}}>{description.description}</Text>
    </View>
  );
}


export default DescricaoPage;
