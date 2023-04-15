import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { Colors } from "../styles/Colors";
import { useFonts } from "expo-font";
import MontText from "./MontText";

export default function InputField({
    onChangeText,
    value,
    placeholder,
    label,
    type,
}) {
    const [loaded] = useFonts({
        "montserrat-regular": require("../assets/fonts/Montserrat-Regular.ttf"),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.inputControl}>
            <MontText style={styles.label} weight="medium">
                {label}
            </MontText>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={type === "password"}
                placeholder={placeholder}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputControl: { display: "flex", gap: 10, width: "100%" },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
        borderColor: Colors.gray100,
        color: Colors.offBlack,
        fontFamily: "montserrat-regular",
        backgroundColor: "white",
    },
    label: {},
});
