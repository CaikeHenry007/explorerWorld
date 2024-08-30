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
import MalasiaModal from "../partials/ModalMalasia";
import CristoRedentor from "../pages/CristoRedentorBrasil";
import BrasilModal from "../partials/ModalBrasil";
import CanadaTeste from "../Lugares/CanadaTeste";
import Mexico from "../Lugares/Mexico";

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
          name="CanadaTeste"
          component={CanadaTeste}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Mexico"
          component={Mexico}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
