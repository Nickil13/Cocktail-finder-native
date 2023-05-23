import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import MontText from "../components/MontText";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { globalStyles } from "../styles/globalStyles";
import { getCocktails } from "../api/cocktails";
import InputField from "../components/InputField";
import Card from "../components/Card";

export default function SearchResults({ route, navigation }) {
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
                } else {
                    setData([]);
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
                {/* <View>
                    {searchValue ? (
                        <MontText>{searchValue}</MontText>
                    ) : (
                        params?.value && <MontText>{params.value}</MontText>
                    )}
                </View> */}
                {data?.length > 0 ? (
                    <FlatList
                        data={data}
                        renderItem={({ item }) => (
                            <Card
                                item={item}
                                onPress={() =>
                                    navigation.navigate("Cocktail Details", {
                                        id: item.idDrink,
                                    })
                                }
                            />
                        )}
                        ItemSeparatorComponent={() => (
                            <View style={{ height: 20 }}></View>
                        )}
                    />
                ) : (
                    <MontText>No results found.</MontText>
                )}
            </View>
        </SafeAreaView>
    );
}
