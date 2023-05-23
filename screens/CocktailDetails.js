import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getCocktailByID } from "../api/cocktails";
import { Image, Pressable, ScrollView, StyleSheet, View } from "react-native";
import BebasText from "../components/BebasText";
import { getIngredients } from "../utils/functions";
import MontText from "../components/MontText";
import { Colors } from "../styles/Colors";
import { globalStyles } from "../styles/globalStyles";

export default function CocktailDetails({ route }) {
    const { params } = route;
    const [cocktail, setCocktail] = useState(null);
    const [showBanner, setShowBanner] = useState(true);

    useEffect(() => {
        if (params?.id) {
            getCocktailByID(params.id).then((res) => {
                if (res?.length > 0 && res[0]) {
                    const item = res[0];
                    const ingredients = getIngredients(item, {
                        withMeasurements: true,
                    });
                    const obj = {
                        id: item.idDrink,
                        name: item.strDrink,
                        image: item.strDrinkThumb,
                        ingredients,
                        instructions: item.strInstructions,
                    };
                    setCocktail(obj);
                }
            });
        }
    }, [params?.id]);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {showBanner && (
                <Pressable onPress={() => setShowBanner(false)}>
                    <View style={styles.banner}>
                        <MontText style={styles.bannerText}>
                            Don't recognize an ingredient? Click it for more
                            info!
                        </MontText>
                    </View>
                </Pressable>
            )}
            <ScrollView
                contentContainerStyle={[
                    globalStyles.container,
                    { flexGrow: 1 },
                ]}
            >
                <View style={{ height: 280 }}>
                    <Image
                        source={{ uri: cocktail?.image }}
                        style={styles.thumb}
                        resizeMode="cover"
                    />
                </View>
                <View style={{ gap: 20 }}>
                    <BebasText
                        style={{
                            fontSize: 48,
                            color: Colors.accentBlue200,
                            textAlign: "center",
                        }}
                    >
                        {cocktail?.name}
                    </BebasText>
                    <View
                        style={{
                            flex: 1,
                            width: "100%",
                        }}
                    >
                        {cocktail?.ingredients?.length > 0 &&
                            cocktail.ingredients.map((ingredient, index) => {
                                return (
                                    <Pressable>
                                        <MontText
                                            style={styles.text}
                                            key={index}
                                            numberOfLines={1}
                                        >
                                            <MontText
                                                style={{ fontWeight: "bold" }}
                                            >
                                                {ingredient.measurement}
                                            </MontText>

                                            {ingredient.name}
                                        </MontText>
                                    </Pressable>
                                );
                            })}
                    </View>
                    <MontText style={{ textAlign: "center", lineHeight: 25 }}>
                        {cocktail?.instructions}
                    </MontText>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    banner: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 2,
        backgroundColor: Colors.accentBlue200,
        paddingHorizontal: 6,
        paddingVertical: 10,
        ...globalStyles.shadow,
    },
    bannerText: { color: Colors.white },
    text: {
        textAlign: "center",
        flex: 1,
        maxHeight: 30,
    },
    thumb: { height: "100%", width: "100%" },
});
