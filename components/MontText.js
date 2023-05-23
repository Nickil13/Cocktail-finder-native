import React from "react";
import { Text } from "react-native";
import { useFonts } from "expo-font";
import { useTheme } from "@react-navigation/native";

export default function MontText(props) {
    const [fontsLoaded] = useFonts({
        "montserrat-regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    });
    const { colors } = useTheme();

    if (!fontsLoaded) {
        return null;
    }
    return (
        <Text
            style={[
                {
                    fontFamily: "montserrat-regular",
                    fontSize: 16,
                    color: colors.text,
                },
                props.style,
            ]}
            numberOfLines={props.numberOfLines}
        >
            {props.children}
        </Text>
    );
}
