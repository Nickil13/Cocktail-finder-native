import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";

export default function MontText(props) {
    const [fontsLoaded] = useFonts({
        "montserrat-regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <Text
            style={[
                { fontFamily: "montserrat-regular", fontSize: 16 },
                props.style,
            ]}
        >
            {props.children}
        </Text>
    );
}
