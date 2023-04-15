import React from "react";
import { NavigationContainer, useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import Home from "../screens/Home";
import SummerDrinks from "../screens/SummerDrinks";
import { useThemeContext } from "../context/ThemeContext";
import { MyDarkTheme, MyLightTheme } from "../styles/themes";
import { Colors } from "../styles/Colors";
import { Entypo, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function RootStackNavigator() {
    const { theme } = useThemeContext();

    return (
        <NavigationContainer
            theme={theme === "light" ? MyLightTheme : MyDarkTheme}
        >
            <StatusBar style="auto" />
            <Tab.Navigator
                initialRouteName="Forgot Password"
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
                    name="Home"
                    component={Home}
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
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
