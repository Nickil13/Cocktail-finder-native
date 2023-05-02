import React from "react";
import { Pressable, StyleSheet } from "react-native";
import MontText from "./MontText";

export default function Button({ title, onPress, color, textColor, padding }) {
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
            <MontText style={{ color: textColor, textAlign: "center" }}>
                {title}
            </MontText>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    wrapperCustom: {
        borderRadius: 6,
        shadowColor: "#00000024",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 20,
    },
});
