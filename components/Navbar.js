import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import HeaderText from "./BebasText";
import { Colors } from "../styles/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useThemeContext } from "../context/ThemeContext";
import { useTheme } from "@react-navigation/native";

export default function Navbar() {
    const { toggleTheme, theme } = useThemeContext();
    const { colors } = useTheme();
    return (
        <View style={[styles.navbar, { backgroundColor: colors.background }]}>
            <View style={styles.navbarContainer}>
                <HeaderText style={[styles.title, { color: colors.primary }]}>
                    Cocktail Finder
                </HeaderText>
                {theme === "dark" ? (
                    <Pressable onPress={() => toggleTheme()}>
                        <Ionicons
                            name="md-sunny"
                            size={32}
                            color={colors.primary}
                        />
                    </Pressable>
                ) : (
                    <Pressable onPress={() => toggleTheme()}>
                        <Ionicons
                            name="md-moon"
                            size={32}
                            color={colors.primary}
                        />
                    </Pressable>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        height: 80,
        width: "100%",
        padding: 16,
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 10,
    },
    navbarContainer: {
        maxWidth: 1000,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 36,
        textTransform: "uppercase",
    },
});
