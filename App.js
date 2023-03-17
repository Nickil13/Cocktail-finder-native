import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
const PlaceholderImage = require("./assets/images/cat.jpg");

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Image source={PlaceholderImage} style={styles.image} />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
});
