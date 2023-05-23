import React from "react";
import {
    View,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
} from "react-native";
import MontText from "../components/MontText";
import { Colors } from "../styles/Colors";
import BebasText from "../components/BebasText";
import { globalStyles } from "../styles/globalStyles";
import { getIngredients } from "../utils/functions";

export default function Card({ item, onPress }) {
    const ingredients = getIngredients(item);

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.cardContainer}>
                <View style={{ width: "40%" }}>
                    <Image
                        source={{ uri: item?.strDrinkThumb }}
                        style={styles.thumb}
                        resizeMode="cover"
                    />
                </View>
                <View
                    style={{
                        alignItems: "center",
                        padding: 20,
                        width: "60%",
                        gap: 10,
                    }}
                >
                    <BebasText style={styles.headerText} numberOfLines={2}>
                        {item?.strDrink}
                    </BebasText>

                    <View style={{ flex: 1, width: "100%" }}>
                        {ingredients?.length > 0 &&
                            ingredients.map((ingredient, index) => {
                                return (
                                    <MontText
                                        style={[
                                            styles.text,
                                            { color: Colors.darkGrey },
                                        ]}
                                        key={index}
                                        numberOfLines={1}
                                    >
                                        {ingredient.name}
                                    </MontText>
                                );
                            })}
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        borderWidth: 4,
        borderRadius: 3,
        borderColor: Colors.accentBlue50,
        backgroundColor: Colors.accentBlue100,
        height: 200,
        ...globalStyles.shadow,
    },
    headerText: {
        fontSize: 30,
        width: "90%",
        textAlign: "center",
    },
    text: {
        textAlign: "center",
        flex: 1,
        maxHeight: 30,
    },
    thumb: { height: "100%", width: "100%" },
});
