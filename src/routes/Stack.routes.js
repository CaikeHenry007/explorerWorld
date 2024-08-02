import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

import Inicio from "../pages/Inicio";
import Home from "../pages/Home";

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio" >
                <Stack.Screen 
                name="Inicio"
                component={Inicio}
                options={{ headerShown: false }} 
                />
                <Stack.Screen 
                name="Home"
                component={Home}
                options={{ headerShown: false }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}