import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

export default function BebasText(props) {
    const [fontsLoaded] = useFonts({
        "bebasneue-regular": require("../assets/fonts/BebasNeue-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <Text style={[{ fontFamily: "bebasneue-regular" }, props.style]}>
            {props.children}
        </Text>
    );
}
