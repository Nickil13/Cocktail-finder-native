import React, { useState } from "react";
import {
    StyleSheet,
    View,
    ImageBackground,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
} from "react-native";

import MontText from "../components/MontText";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Button from "../components/Button";
import InputField from "../components/InputField";
import { globalStyles } from "../styles/globalStyles";
import OpenURLButton from "../components/OpenURLButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
const bgImage = require("../assets/images/home_bg.jpg");

export default function Home({ navigation }) {
    const [currentTab, setCurrentTab] = useState("By Name");
    const [value, onChangeValue] = useState("");
    const { colors } = useTheme();

    const storeRecentSearches = async (value) => {
        const previousSearches = await getRecentSearches().then((res) => {
            return res;
        });

        try {
            const initialSearches = previousSearches?.length > 0 || [];
            const recentSearches = [...initialSearches, value];

            const jsonValue = JSON.stringify(recentSearches);
            await AsyncStorage.setItem("@storage_Key", jsonValue);
        } catch (e) {
            // saving error
            console.error("There was an error saving recent searches.");
        }
    };

    const getRecentSearches = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("@storage_Key");
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
            console.error("There was an error loading recent searches.");
        }
    };

    const onSubmit = () => {
        navigation.navigate("Search Results");
        storeRecentSearches(value);
        console.log();
    };

    const clearRecentSearches = async () => {
        try {
            await AsyncStorage.clear();
        } catch (e) {
            // clear error
        }
    };

    return (
        <TouchableWithoutFeedback
            onPress={() => {
                if (Platform.OS !== "web") {
                    Keyboard.dismiss();
                }
            }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                {/* <Navbar /> */}
                <ImageBackground
                    source={bgImage}
                    resizeMode="cover"
                    style={styles.imageBackground}
                >
                    <View
                        style={[
                            { gap: 20, paddingBottom: 100 },
                            styles.container,
                        ]}
                    >
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
                                    onPress={() =>
                                        setCurrentTab("By Ingredient")
                                    }
                                />
                            </View>
                        </View>
                        <KeyboardAvoidingView>
                            <InputField
                                label=""
                                onChangeText={onChangeValue}
                                value={value}
                                placeholder="Cocktail name"
                                onSubmit={onSubmit}
                            />
                        </KeyboardAvoidingView>

                        <OpenURLButton
                            url="https://my-cocktail-finder.netlify.app/"
                            title="Go to the Cocktail Finder website"
                            styleText={{
                                color: "white",
                                textAlign: "center",
                                fontSize: 14,
                            }}
                        />
                        <Button
                            title="Get recent searches"
                            onPress={() =>
                                getRecentSearches().then((res) =>
                                    console.log(res)
                                )
                            }
                        />
                        <Button
                            title="Clear search history"
                            onPress={clearRecentSearches}
                        />
                    </View>

                    <View style={globalStyles.overlay}></View>
                </ImageBackground>
            </SafeAreaView>
        </TouchableWithoutFeedback>
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
