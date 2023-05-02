import React, { useState } from "react";
import { View, Image, FlatList, ScrollView } from "react-native";

import MontText from "../components/MontText";
import { Colors } from "../styles/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import BebasText from "../components/BebasText";
import { globalStyles } from "../styles/globalStyles";

const dummyImage =
    "https://images.unsplash.com/photo-1578664182354-e3878189cdac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";

const data = [
    { key: 1, name: "Margarita", ingredients: [{ key: 1, name: "lime" }] },
    {
        key: 2,
        name: "Lemongarita",
        ingredients: [{ key: 2, name: "lemon" }],
    },
    {
        key: 3,
        name: "Lemongarita",
        ingredients: [{ key: 2, name: "lemon" }],
    },
    {
        key: 4,
        name: "Lemongarita",
        ingredients: [{ key: 2, name: "lemon" }],
    },
];

export default function SearchResults() {
    const { colors } = useTheme();
    return (
        <SafeAreaView>
            <FlatList
                data={data}
                style={{ paddingBottom: 80 }}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flexDirection: "row",
                            borderWidth: 4,
                            borderRadius: 3,
                            borderColor: Colors.accentBlue50,
                            width: "80%",
                            backgroundColor: Colors.accentBlue100,
                            height: 140,
                            ...globalStyles.shadow,
                            marginVertical: 20,
                        }}
                    >
                        <View style={{ width: "50%" }}>
                            <Image
                                source={{ uri: dummyImage }}
                                style={{ height: "100%", width: "100%" }}
                                resizeMode="cover"
                            />
                        </View>
                        <View
                            style={{
                                alignItems: "center",
                                padding: 10,
                                width: "50%",
                            }}
                        >
                            <BebasText style={{ fontSize: 30 }}>
                                {item.name}
                            </BebasText>

                            <FlatList
                                data={[
                                    { key: 1, name: "Lime" },
                                    { key: 2, name: "Tequilla" },
                                ]}
                                renderItem={({ item }) => (
                                    <MontText style={{ textAlign: "center" }}>
                                        {item.name}
                                    </MontText>
                                )}
                            />
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}
