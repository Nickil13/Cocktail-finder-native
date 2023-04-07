import React from "react";
import { Pressable, StyleSheet } from "react-native";
import MontText from "./MontText";

export default function Button({ title, onPress, color, padding }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                {
                    opacity: pressed ? 0.8 : 1,
                    backgroundColor: color || "white",
                    padding: padding || 12,
                },
                styles.wrapperCustom,
            ]}
        >
            <MontText>{title}</MontText>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    wrapperCustom: {
        textAlign: "center",
        borderRadius: 6,
        shadowColor: "#00000024",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 20,
        width: "100%",
        flex: 1,
        maxWidth: 200,
    },
});
