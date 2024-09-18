import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//paginas continentes
import Inicio from "../pages/Inicio";
import Home from "../pages/Home";
import Africa from "../pages/Africa";
import AmericaCentro from "../pages/AmericaCentro";
import AmericaNorte from "../pages/AmericaNorte";
import AmericaSul from "../pages/AmericaSul";
import Asia from "../pages/Asia";
import Europa from "../pages/Europa";
import Oceania from "../pages/Oceania";

//pagina de recuperar senha
import RecuperarSenha from "../pages/RecuperarSenha";

//pagina descrição
import PavilionMalasia from "../pages/PavilionMalasia";

//america norte paises
import Canada from "../pages/Lugares/Canada";
import estadosunidos from "../pages/Lugares/EstadosUnidos";
import Mexico from "../pages/Lugares/Mexico";

//asia paises
import Malasia from "../pages/Lugares/Malasia";
import Emirados from "../pages/Lugares/Emirados";
import Catar from "../pages/Lugares/Catar";
import China from "../pages/Lugares/China";
import Japao from "../pages/Lugares/Japao";

//europa paises
import Grecia from "../pages/Lugares/Grecia";
import Franca from "../pages/Lugares/Franca";
import Italia from "../pages/Lugares/Italia";
import Inglaterra from "../pages/Lugares/Inglaterra";
import Espanha from "../pages/Lugares/Espanha";

//america sul paises
import Argentina from "../pages/Lugares/Argentina";
import Bolivia from "../pages/Lugares/Bolivia";
import Chile from "../pages/Lugares/Chile";
import Venezuela from "../pages/Lugares/Venezuela";
import Brasil from "../pages/Lugares/Brasil";

//america central paises
import Panama from "../pages/Lugares/Panama";
import CostaRica from "../pages/Lugares/CostaRica";
import Nicaragua from "../pages/Lugares/Nicaragua";
import Honduras from "../pages/Lugares/Honduras";
import ElSalvador from "../pages/Lugares/ElSalvador";

//africa paises
import Guine from "../pages/Lugares/Guine";
import Egito from "../pages/Lugares/Egito";
import Nigeria from "../pages/Lugares/Nigeria";
import Angola from "../pages/Lugares/Angola";
import AfricaSul from "../pages/Lugares/AfricaSul";

//oceania paises
import Australia from "../pages/Lugares/Australia";
import NovaZelandia from "../pages/Lugares/NovaZelandia";
import PapuaGuine from "../pages/Lugares/PapuaGuine";
import Fiji from "../pages/Lugares/Fiji";
import IlhasSalomao from "../pages/Lugares/IlhasSalomao";

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


        {/* continentes */}
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


        {/* descriçao */}
        <Stack.Screen
          name="PavilionMalasia"
          component={PavilionMalasia}
          options={{ headerShown: false }}
        />


        {/* americaNorte */}
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
          name="EstadosUnidos"
          component={estadosunidos}
          options={{ headerShown: false }}
        />
       


         {/* asia */}
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



        {/* europa */}
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


        
        {/* americaSul */}
        <Stack.Screen
          name="Argentina"
          component={Argentina}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bolivia"
          component={Bolivia}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chile"
          component={Chile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Venezuela"
          component={Venezuela}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Brasil"
          component={Brasil}
          options={{ headerShown: false }}
        />



        {/* americaCentral */}
        <Stack.Screen
          name="Panama"
          component={Panama}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CostaRica"
          component={CostaRica}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Nicaragua"
          component={Nicaragua}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Honduras"
          component={Honduras}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ElSalvador"
          component={ElSalvador}
          options={{ headerShown: false }}
        />




         {/* africa */}
        <Stack.Screen
          name="Guine"
          component={Guine}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Egito"
          component={Egito}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Nigeria"
          component={Nigeria}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Angola"
          component={Angola}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AfricaSul"
          component={AfricaSul}
          options={{ headerShown: false }}
        />



        {/* oceania */}
        <Stack.Screen
          name="Australia"
          component={Australia}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NovaZelandia"
          component={NovaZelandia}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PapuaGuine"
          component={PapuaGuine}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Fiji"
          component={Fiji}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="IlhasSalomao"
          component={IlhasSalomao}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
