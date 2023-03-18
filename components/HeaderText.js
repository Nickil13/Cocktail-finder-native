import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

export default function HeaderText(props) {
    const [fontsLoaded] = useFonts({
        primary: require("../assets/fonts/BebasNeue-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <Text style={[{ fontFamily: "primary" }, props.style]}>
            {props.children}
        </Text>
    );
}
