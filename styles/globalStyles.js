import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    shadow: {
        shadowColor: "#000000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 4,
    },
    overlay: {
        position: "absolute",
        backgroundColor: "rgba(0,0,0,0.5)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    heroContainer: {
        justifyContent: "center",
        width: "80%",
        maxWidth: 520,
    },
    container: {
        gap: 20,
        padding: 20,
    },
});

export { globalStyles };
