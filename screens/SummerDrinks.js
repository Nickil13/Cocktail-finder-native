import React, { useState, useRef } from "react";
import {
    View,
    ImageBackground,
    StyleSheet,
    ScrollView,
    Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MontText from "../components/MontText";
import Button from "../components/Button";
import { globalStyles } from "../styles/globalStyles";
import { useTheme } from "@react-navigation/native";
import { Colors } from "../styles/Colors";
import Section from "../components/Section";

const summerLinks = [
    { name: "Margarita" },
    { name: "Mojito" },
    { name: "Spritz" },
    { name: "Sangria" },
    { name: "Daiquiri" },
    { name: "Piña Colada" },
];

const bgImage = require("../assets/images/summerCocktails.jpg");
export default function SummerDrinks() {
    const windowHeight = Dimensions.get("window").height;
    const { colors } = useTheme();
    const scroller = useRef(null);
    const margaritaRef = useRef(null);
    const mojitoRef = useRef(null);
    const spritzRef = useRef(null);
    const sangriaRef = useRef(null);
    const daiquiriRef = useRef(null);
    const pinaColadaRef = useRef(null);
    const [position, setPosition] = useState(0);

    const handleClick = (name) => {
        const NAV_HEIGHT = 100;
        let ref = null;
        switch (name) {
            case "Margarita":
                ref = margaritaRef;
                break;
            case "Mojito":
                ref = mojitoRef;
                break;
            case "Spritz":
                ref = spritzRef;
                break;
            case "Sangria":
                ref = sangriaRef;
                break;
            case "Daiquiri":
                ref = daiquiriRef;
                break;
            case "Piña Colada":
                ref = pinaColadaRef;
                break;
            default:
        }

        if (ref) handleScrollTo(ref, NAV_HEIGHT);
    };

    const handleScrollTo = (ref, start) => {
        if (ref?.current) {
            ref.current.measure((width, height, px, py, fx, fy) => {
                const location = {
                    fx: fx,
                    fy: fy,
                    px: px,
                    py: py,
                    width: width,
                    height: height,
                };
                if (scroller?.current) {
                    scroller.current.scrollTo({
                        y: position + location.fy - start,
                    });
                }
            });
        }
    };

    const onScroll = (event) => {
        setPosition(event.nativeEvent.contentOffset.y);
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                ref={scroller}
                onScroll={onScroll}
            >
                <ImageBackground
                    source={bgImage}
                    resizeMode="cover"
                    style={[
                        styles.imageBackground,
                        { minHeight: windowHeight },
                    ]}
                >
                    <View style={[{ gap: 20 }, styles.container]}>
                        <MontText style={styles.header}>Summer Drinks</MontText>
                        <View>
                            <MontText style={styles.subtitle}>
                                These drinks are perfect for a warm summer day!
                            </MontText>
                        </View>
                        <View style={styles.headerLinks}>
                            {summerLinks.map((link, index) => {
                                return (
                                    <Button
                                        key={index}
                                        title={link.name}
                                        textColor="white"
                                        color={Colors.accentPink200}
                                        onPress={() => handleClick(link.name)}
                                    />
                                );
                            })}
                        </View>
                    </View>

                    <View style={globalStyles.overlay}></View>
                </ImageBackground>
                <View style={{ padding: 40, gap: 60 }}>
                    <Section
                        ref={margaritaRef}
                        title="Margarita"
                        description="Nothing is better than relaxing at the beach with a margarita! Tequila, lime, liqueur and a rim of salt"
                        image={require("../assets/images/margarita.jpg")}
                        recipes={[
                            "Margarita",
                            "Blue Margarita",
                            "Tommy's Margarita",
                            "Strawberry Margarita",
                        ]}
                    />
                    <Section
                        ref={mojitoRef}
                        title="Mojito"
                        description="A Cuban cocktail made with lime and rum and a sprig of fresh mint."
                        image={require("../assets/images/mojito.jpg")}
                        recipes={[
                            "Mojito",
                            "Mojito Extra",
                            "Mango Mojito",
                            "Blueberry Mojito",
                        ]}
                    />
                    <Section
                        ref={spritzRef}
                        title="Spritz"
                        description="A cocktail made from sparkling wine and soda, with many fantastic variations! A Spritzer is similar, just made with regular wine."
                        image={require("../assets/images/spritz.jpg")}
                        recipes={[
                            "Mojito",
                            "Mojito Extra",
                            "Mango Mojito",
                            "Blueberry Mojito",
                        ]}
                    />

                    <Section
                        ref={sangriaRef}
                        title="Sangria"
                        description="Wine, usually red or white, mixed with fruit and fruit juices."
                        image={require("../assets/images/sangria.jpg")}
                        recipes={[
                            "Mojito",
                            "Mojito Extra",
                            "Mango Mojito",
                            "Blueberry Mojito",
                        ]}
                    />
                    <Section
                        ref={daiquiriRef}
                        title="Daiquiri"
                        description="A rum cocktail, lime and sugar! One popular version is the strawberry daiquiri."
                        image={require("../assets/images/daiquiri.jpeg")}
                        recipes={[
                            "Mojito",
                            "Mojito Extra",
                            "Mango Mojito",
                            "Blueberry Mojito",
                        ]}
                    />
                    <Section
                        ref={pinaColadaRef}
                        title="Piña Colada"
                        description="Pineapple, lime, coconut and rum mixed together perfectly. Garnish with an umbrella or maraschino cherries."
                        image={require("../assets/images/piña-colada.jpg")}
                        recipes={[
                            "Mojito",
                            "Mojito Extra",
                            "Mango Mojito",
                            "Blueberry Mojito",
                        ]}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        color: "#fff",
        fontWeight: 700,
        fontSize: 36,
        textAlign: "center",
    },
    subtitle: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 10,
    },
    headerLinks: {
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",

        gap: 10,
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
        flexDirection: "column",
        alignItems: "center",
    },
});
