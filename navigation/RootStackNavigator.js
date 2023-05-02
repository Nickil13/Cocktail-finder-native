import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import Home from "../screens/Home";
import SummerDrinks from "../screens/SummerDrinks";
import { useThemeContext } from "../context/ThemeContext";
import { MyDarkTheme, MyLightTheme } from "../styles/themes";
import { Colors } from "../styles/Colors";
import { Entypo, Ionicons } from "@expo/vector-icons";
import SearchResults from "../screens/SearchResults";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "../components/Navbar";

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

const Main = () => {
    return (
        <MainStack.Navigator initialRouteName="Home">
            <MainStack.Screen
                name="Home"
                component={Home}
                options={{
                    header: () => <Navbar />,
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-search" size={24} color={color} />
                    ),
                }}
            />
            <MainStack.Screen name="Search Results" component={SearchResults} />
        </MainStack.Navigator>
    );
};
export default function RootStackNavigator() {
    const { theme } = useThemeContext();

    return (
        <NavigationContainer
            theme={theme === "light" ? MyLightTheme : MyDarkTheme}
        >
            <StatusBar
                style={theme === "light" ? "auto" : "light"}
                backgroundColor={theme === "light" ? "white" : Colors.darkGrey}
                translucent={false}
            />
            <Tab.Navigator
                initialRouteName="Summer Drinks"
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor:
                            theme === "light" ? "white" : Colors.darkGrey,
                        padding: 10,
                        paddingBottom: 10,
                        height: 60,
                    },
                }}
            >
                <Tab.Screen
                    name="Main"
                    component={Main}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Search",
                        tabBarIcon: ({ color }) => (
                            <Ionicons
                                name="md-search"
                                size={24}
                                color={color}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name="Summer Drinks"
                    component={SummerDrinks}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Entypo name="drink" size={24} color={color} />
                        ),
                        header: () => <Navbar />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
