import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderText from "./BebasText";
import { Colors } from "../assets/Colors";

export default function Navbar() {
    return (
        <View style={styles.navbar}>
            <View style={styles.navbarContainer}>
                <HeaderText style={styles.title}>Cocktail Finder</HeaderText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: Colors.darkGrey,
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
        marginHorizontal: "auto",
    },
    title: {
        color: Colors.primary,
        fontSize: 36,
        textTransform: "uppercase",
    },
});
