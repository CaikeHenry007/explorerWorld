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
import Canada from "../pages/Lugares/AmericadoNorte/Canada";
import estadosunidos from "../pages/Lugares/AmericadoNorte/EstadosUnidos";
import Mexico from "../pages/Lugares/AmericadoNorte/Mexico";

//asia paises
import Malasia from "../pages/Lugares/Asia/Malasia";
import Emirados from "../pages/Lugares/Asia/Emirados";
import Catar from "../pages/Lugares/Asia/Catar";
import China from "../pages/Lugares/Asia/China";
import Japao from "../pages/Lugares/Asia/Japao";

//europa paises
import Grecia from "../pages/Lugares/Europa/Grecia";
import Franca from "../pages/Lugares/Europa/Franca";
import Italia from "../pages/Lugares/Europa/Italia";
import Inglaterra from "../pages/Lugares/Europa/Inglaterra";
import Espanha from "../pages/Lugares/Europa/Espanha";

//america sul paises
import Argentina from "../pages/Lugares/AmericadoSul/Argentina";
import Bolivia from "../pages/Lugares/AmericadoSul/Bolivia";
import Chile from "../pages/Lugares/AmericadoSul/Chile";
import Venezuela from "../pages/Lugares/AmericadoSul/Venezuela";
import Brasil from "../pages/Lugares/AmericadoSul/Brasil";

//america central paises
import Panama from "../pages/Lugares/AmericaCentral/Panama";
import CostaRica from "../pages/Lugares/AmericaCentral/CostaRica";
import Nicaragua from "../pages/Lugares/AmericaCentral/Nicaragua";
import Honduras from "../pages/Lugares/AmericaCentral/Honduras";
import ElSalvador from "../pages/Lugares/AmericaCentral/ElSalvador";

//africa paises
import Guine from "../pages/Lugares/Africa/Guine";
import Egito from "../pages/Lugares/Africa/Egito";
import Nigeria from "../pages/Lugares/Africa/Nigeria";
import Angola from "../pages/Lugares/Africa/Angola";
import AfricaSul from "../pages/Lugares/Africa/AfricaSul";

//oceania paises
import Australia from "../pages/Lugares/Oceania/Australia";
import NovaZelandia from "../pages/Lugares/Oceania/NovaZelandia";
import PapuaGuine from "../pages/Lugares/Oceania/PapuaGuine";
import Fiji from "../pages/Lugares/Oceania/Fiji";
import IlhasSalomao from "../pages/Lugares/Oceania/IlhasSalomao";

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
