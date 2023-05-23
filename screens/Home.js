import React, { useState } from "react";
import {
    StyleSheet,
    View,
    ImageBackground,
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
import { storeRecentSearches } from "../api/recentSearches";
import { WEB_URL } from "../utils/variables";
import { Colors } from "../styles/Colors";
const bgImage = require("../assets/images/home_bg.jpg");

export default function Home({ navigation }) {
    const [currentTab, setCurrentTab] = useState("By Name");
    const [value, onChangeValue] = useState("");
    const { colors } = useTheme();

    const onSubmit = () => {
        navigation.navigate("Search Results", { value });
        storeRecentSearches(value);
        onChangeValue("");
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
                <ImageBackground
                    source={bgImage}
                    resizeMode="cover"
                    style={styles.imageBackground}
                >
                    <View
                        style={[
                            globalStyles.heroContainer,
                            { gap: 20, zIndex: 2, flex: 1 },
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

                        <MontText
                            style={{
                                color: "#fff",
                                fontSize: 20,
                                textAlign: "center",
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
                                        ? Colors.accentBlue200
                                        : Colors.accentBlue100
                                }
                                textColor={
                                    currentTab === "By Name"
                                        ? Colors.white
                                        : colors.primary
                                }
                                onPress={() => setCurrentTab("By Name")}
                            />
                            <Button
                                title="By Ingredient"
                                color={
                                    currentTab === "By Ingredient"
                                        ? Colors.accentBlue200
                                        : Colors.accentBlue100
                                }
                                textColor={
                                    currentTab === "By Ingredient"
                                        ? Colors.white
                                        : colors.primary
                                }
                                onPress={() => setCurrentTab("By Ingredient")}
                            />
                        </View>

                        <InputField
                            onChangeText={onChangeValue}
                            value={value}
                            placeholder="Cocktail name"
                            onSubmit={onSubmit}
                        />
                        <OpenURLButton
                            url={WEB_URL}
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
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        position: "relative",
        alignItems: "center",
        height: "100%",
    },
});
