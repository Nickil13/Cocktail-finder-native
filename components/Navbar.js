import React from "react";
import { StyleSheet, View } from "react-native";
import HeaderText from "./HeaderText";

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
        backgroundColor: "rgb(75,85,99)",
        height: 80,
        width: "100%",
        padding: 16,
    },
    navbarContainer: {
        maxWidth: 1000,
        width: "100%",
        marginHorizontal: "auto",
    },
    title: {
        color: "rgb(224,231,255)",
        fontSize: 20,
        textTransform: "uppercase",
    },
});
