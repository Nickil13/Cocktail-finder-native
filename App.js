import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import Home from "./screens/Home";
import SummerDrinks from "./screens/SummerDrinks";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator initialRouteName="Forgot Password">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Summer Drinks"
                    component={SummerDrinks}
                    options={
                        {
                            // headerShown: false,
                        }
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
