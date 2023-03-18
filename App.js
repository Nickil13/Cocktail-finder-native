import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TextInput,
    FlatList,
    TouchableOpacity,
} from "react-native";
import Navbar from "./components/Navbar";
import BodyText from "./components/BodyText";
const PlaceholderImage = require("./assets/images/cat.jpg");

export default function App() {
    const [cocktails, setCocktails] = useState([
        { name: "margarita", id: "1" },
        { name: "bellini", id: "2" },
        { name: "vodka cranberry", id: "3" },
        { name: "mojito", id: "4" },
    ]);
    const [value, setValue] = useState("test");

    const clickHandler = () => {
        setValue("cat");
    };

    const pressHandler = (id) => {
        console.log(id);
        setCocktails((prevCocktails) => {
            return prevCocktails.filter((cocktail) => cocktail.id != id);
        });
    };
    return (
        <View style={styles.container}>
            <Navbar />
            <BodyText>Find a Cocktail</BodyText>
            <BodyText>
                Looking for a specific cocktail or have an ingredient on hand?
            </BodyText>
            <TextInput
                style={styles.input}
                placeholder="Cocktail name"
                onChangeText={(val) => setValue(val)}
            />
            <BodyText>{value}</BodyText>
            <View style={styles.buttonContainer}>
                <Button title="update state" onPress={clickHandler} />
            </View>
            <Image source={PlaceholderImage} style={styles.image} />
            <FlatList
                keyExtractor={(item) => item.id}
                data={cocktails}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item.id)}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
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
    buttonContainer: {
        marginVertical: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#777",
        padding: 8,
        margin: 10,
        width: 200,
    },
});
