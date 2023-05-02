import React, { useState } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";

import MontText from "../components/MontText";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { globalStyles } from "../styles/globalStyles";
import OpenURLButton from "../components/OpenURLButton";

const bgImage = require("../assets/images/home_bg.jpg");

export default function Home({ navigation }) {
    const [currentTab, setCurrentTab] = useState("By Name");
    const [value, onChangeValue] = useState("");
    const { colors } = useTheme();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* <Navbar /> */}
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
                                        ? colors.primary
                                        : "white"
                                }
                                textColor={
                                    currentTab === "By Name"
                                        ? "white"
                                        : colors.primary
                                }
                                onPress={() => setCurrentTab("By Name")}
                            />
                            <Button
                                title="By Ingredient"
                                color={
                                    currentTab === "By Ingredient"
                                        ? colors.primary
                                        : "white"
                                }
                                textColor={
                                    currentTab === "By Ingredient"
                                        ? "white"
                                        : colors.primary
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
                    <Button
                        title="To results
                    "
                        onPress={() => navigation.navigate("Search Results")}
                    />
                    <OpenURLButton
                        url="https://my-cocktail-finder.netlify.app/"
                        title="Go to the Cocktail Finder website"
                        styleText={{
                            color: "white",
                            textAlign: "center",
                            fontSize: 14,
                        }}
                    />
                </View>

                <View style={globalStyles.overlay}></View>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        justifyContent: "center",
        width: "80%",
        maxWidth: 520,
        zIndex: 5,
        marginTop: 100,
    },
    imageBackground: {
        position: "relative",
        //justifyContent: "center",
        alignItems: "center",
        height: "100%",
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
