import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import Navbar from "../components/Navbar";
import MontText from "../components/MontText";
import Button from "../components/Button";
import { Colors } from "../theme/Colors";
import InputField from "../components/InputField";
const bgImage = require("../assets/images/home_bg.jpg");

export default function Home() {
    const [cocktails, setCocktails] = useState([
        { name: "margarita", id: "1" },
        { name: "bellini", id: "2" },
        { name: "vodka cranberry", id: "3" },
        { name: "mojito", id: "4" },
    ]);
    const [currentTab, setCurrentTab] = useState("By Name");
    const [value, onChangeValue] = useState("");

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
        <View style={styles.main}>
            <Navbar />
            <ImageBackground
                source={bgImage}
                resizeMode="cover"
                style={styles.imageBackground}
            >
                <View style={[{ gap: 20 }, styles.container]}>
                    <MontText
                        style={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: 36,
                            textAlign: "center",
                        }}
                    >
                        Find a Cocktail
                    </MontText>
                    <View>
                        <MontText
                            style={{
                                color: "#fff",
                                fontSize: 20,
                                textAlign: "center",
                                marginBottom: 10,
                            }}
                        >
                            Looking for a specific cocktail or have an
                            ingredient on hand?
                        </MontText>
                        <View
                            style={{
                                flexDirection: "row",
                                gap: 10,
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                title="By Name"
                                color={
                                    currentTab === "By Name"
                                        ? Colors.primary
                                        : "white"
                                }
                                onPress={() => setCurrentTab("By Name")}
                            />
                            <Button
                                title="By Ingredient"
                                color={
                                    currentTab === "By Ingredient"
                                        ? Colors.primary
                                        : "white"
                                }
                                onPress={() => setCurrentTab("By Ingredient")}
                            />
                        </View>
                    </View>
                    <InputField
                        label=""
                        onChangeText={onChangeValue}
                        value={value}
                        placeholder="Cocktail name"
                    />
                </View>
                {/* <Image source={PlaceholderImage} style={styles.image} /> */}
                {/* <FlatList
                keyExtractor={(item) => item.id}
                data={cocktails}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => pressHandler(item.id)}>
                        <Text>{item.name}</Text>
                    </TouchableOpacity>
                )}
            /> */}
                <View
                    style={[
                        {
                            position: "absolute",
                            backgroundColor: "rgba(0,0,0,0.5)",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                        },
                    ]}
                ></View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        position: "relative",
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        display: "flex",
        justifyContent: "center",
        width: "90%",
        maxWidth: 520,
        zIndex: 5,
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
    imageBackground: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        // width: 320,
        // height: 440,
        // borderRadius: 18,
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
