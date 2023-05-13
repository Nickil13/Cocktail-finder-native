import React, { useState, useEffect } from "react";
import { View, Image, FlatList, ScrollView } from "react-native";

import MontText from "../components/MontText";
import { Colors } from "../styles/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import BebasText from "../components/BebasText";
import { globalStyles } from "../styles/globalStyles";
import { getCocktails } from "../api/cocktails";
import InputField from "../components/InputField";
import { storeRecentSearches } from "../api/recentSearches";

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

export default function SearchResults({ route }) {
    const { colors } = useTheme();
    const { params } = route;
    const [data, setData] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        const value = searchValue || params?.value || "";
        if (value) {
            getCocktails(value).then((res) => {
                if (res) {
                    setData(res);
                }
            });
        }
    }, [params, searchValue]);

    const onSubmit = (e) => {
        // storeRecentSearches(value);
        setSearchValue(e.nativeEvent.text);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={[globalStyles.container, { flex: 1 }]}>
                <InputField placeholder="Cocktail name" onSubmit={onSubmit} />
                <View>
                    {searchValue ? (
                        <MontText>{searchValue}</MontText>
                    ) : (
                        params?.value && <MontText>{params.value}</MontText>
                    )}
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => <Card item={item} />}
                    ItemSeparatorComponent={() => (
                        <View style={{ height: 20 }}></View>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const Card = ({ item }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                borderWidth: 4,
                borderRadius: 3,
                borderColor: Colors.accentBlue50,
                backgroundColor: Colors.accentBlue100,
                height: 140,
                ...globalStyles.shadow,
            }}
        >
            <View style={{ width: "50%" }}>
                <Image
                    source={{ uri: item.strDrinkThumb }}
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
                <BebasText style={{ fontSize: 30 }}>{item.strDrink}</BebasText>

                {/* <FlatList
            data={[
                { key: 1, name: "Lime" },
                { key: 2, name: "Tequilla" },
            ]}
            renderItem={({ item }) => (
                <MontText
                    style={{ textAlign: "center" }}
                >
                    {item.name}
                </MontText>
            )}
        /> */}
            </View>
        </View>
    );
};
