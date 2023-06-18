import React from "react";
import Navbar from "../components/Navbar";

// Screens
import Home from "../screens/Home";
import SearchResults from "../screens/SearchResults";
import CocktailDetails from "../screens/CocktailDetails";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MainStack = createNativeStackNavigator();

export const Main = () => {
    return (
        <MainStack.Navigator initialRouteName="Home">
            <MainStack.Screen
                name="Home"
                component={Home}
                options={{
                    header: () => <Navbar />,
                }}
            />
            <MainStack.Screen
                name="Search Results"
                component={SearchResults}
                options={{
                    header: () => <Navbar />,
                }}
            />
            <MainStack.Screen
                name="Cocktail Details"
                component={CocktailDetails}
                options={{
                    header: () => <Navbar />,
                }}
            />
        </MainStack.Navigator>
    );
};
