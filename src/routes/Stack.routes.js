import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Inicio from "../pages/Inicio";
import Home from "../pages/Home";
import Africa from "../pages/Africa";
import AmericaCentro from "../pages/AmericaCentro";
import AmericaNorte from "../pages/AmericaNorte";
import AmericaSul from "../pages/AmericaSul";
import Asia from "../pages/Asia";
import Europa from "../pages/Europa";
import Oceania from "../pages/Oceania";
import RecuperarSenha from "../pages/RecuperarSenha";
import PavilionMalasia from "../pages/PavilionMalasia";
import CristoRedentor from "../pages/CristoRedentorBrasil";
import Canada from "../pages/Lugares/Canada";
import Mexico from "../pages/Lugares/Mexico";
import Malasia from "../pages/Lugares/Malasia";
import Emirados from "../pages/Lugares/Emirados";
import Catar from "../pages/Lugares/Catar";
import China from "../pages/Lugares/China";
import Japao from "../pages/Lugares/Japao";
import Grecia from "../pages/Lugares/Grecia";
import Franca from "../pages/Lugares/Franca";
import Italia from "../pages/Lugares/Italia";
import Inglaterra from "../pages/Lugares/Inglaterra";
import Espanha from "../pages/Lugares/Espanha";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecuperarSenha"
          component={RecuperarSenha}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Africa"
          component={Africa}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AmericaCentro"
          component={AmericaCentro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AmericaNorte"
          component={AmericaNorte}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AmericaSul"
          component={AmericaSul}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Asia"
          component={Asia}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Europa"
          component={Europa}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Oceania"
          component={Oceania}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PavilionMalasia"
          component={PavilionMalasia}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CristoRedentor"
          component={CristoRedentor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Canada"
          component={Canada}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mexico"
          component={Mexico}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Malasia"
          component={Malasia}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Emirados"
          component={Emirados}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Catar"
          component={Catar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="China"
          component={China}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Japao"
          component={Japao}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Grecia"
          component={Grecia}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Franca"
          component={Franca}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Italia"
          component={Italia}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Inglaterra"
          component={Inglaterra}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Espanha"
          component={Espanha}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
