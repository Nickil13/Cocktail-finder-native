import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import { useThemeContext } from "../context/ThemeContext";
import { MyDarkTheme, MyLightTheme } from "../styles/themes";
import { Colors } from "../styles/Colors";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Navbar from "../components/Navbar";

// Screens
import SummerDrinks from "../screens/SummerDrinks";
import { Main as MainStackNavigator } from "./MainStackNavigator";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

export default function RootStackNavigator() {
    const { theme } = useThemeContext();

    return (
        <NavigationContainer
            theme={theme === "light" ? MyLightTheme : MyDarkTheme}
        >
            <StatusBar
                style={theme === "light" ? "auto" : "light"}
                backgroundColor={
                    theme === "light" ? Colors.white : Colors.darkGrey
                }
                translucent={false}
            />
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: [
                        styles.tabBar,
                        {
                            backgroundColor:
                                theme === "light"
                                    ? Colors.white
                                    : Colors.darkGrey,
                        },
                    ],
                }}
            >
                <Tab.Screen
                    name="Main"
                    component={MainStackNavigator}
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

const styles = StyleSheet.create({
    tabBar: {
        padding: 10,
        paddingBottom: 10,
        height: 60,
    },
});
