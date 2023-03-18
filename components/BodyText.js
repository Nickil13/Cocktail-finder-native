import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

export default function BodyText(props) {
    const [fontsLoaded] = useFonts({
        secondary: require("../assets/fonts/Montserrat-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <Text style={[{ fontFamily: "secondary" }, props.style]}>
            {props.children}
        </Text>
    );
}
