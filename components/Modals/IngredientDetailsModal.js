import React, { useState, useEffect } from "react";

import { Modal, Pressable, ScrollView, View } from "react-native";
import BebasText from "../BebasText";
import Button from "../Button";

import MontText from "../MontText";
import { Colors } from "../../styles/Colors";
import { globalStyles } from "../../styles/globalStyles";
import { useTheme } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { getIngredient } from "../../api/cocktails";

const IngredientDetailsModal = ({ ingredient, showing, close }) => {
    const MAX_TEXT_LENGTH = 200;
    const [ingredientDetails, setIngredientDetails] = useState(null);
    const [readMore, setReadMore] = useState(false);
    const { colors } = useTheme();

    useEffect(() => {
        if (ingredient) {
            getIngredient(ingredient.name).then((res) => {
                if (res?.length > 0 && res[0]) {
                    const details = res[0];

                    const obj = {
                        id: details.idIngredient,
                        description: details.strDescription,
                        name: ingredient.name,
                        alcoholic: details.strAlcohol,
                    };
                    setIngredientDetails(obj);
                }
            });
        }
    }, [ingredient]);

    function formatDescription(data) {
        return data.slice(0, 200) + "...";
    }

    function reset() {
        setReadMore(false);
        setIngredientDetails(null);
    }
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={showing}
            onRequestClose={() => {
                close();
                reset();
            }}
        >
            <View
                style={{
                    alignItems: "center",
                    flex: 1,
                    justifyContent: "center",
                }}
            >
                <View
                    style={{
                        backgroundColor: colors.nav,
                        maxWidth: 400,
                        width: "90%",
                        minHeight: 100,
                        ...globalStyles.shadow,
                        borderRadius: 2,
                        borderWidth: 5,
                        padding: 20,
                        borderColor: colors.primary,
                        gap: 20,
                    }}
                >
                    <Pressable
                        style={{
                            alignSelf: "flex-end",
                        }}
                        onPress={() => {
                            close();
                            reset();
                        }}
                    >
                        <Ionicons
                            name="md-close"
                            size={24}
                            color={colors.primary}
                        />
                    </Pressable>
                    <View>
                        <BebasText
                            style={{
                                fontSize: 48,
                                textAlign: "center",
                                color: colors.primary,
                                textTransform: "uppercase",
                            }}
                        >
                            {ingredientDetails?.name}
                        </BebasText>
                        <MontText
                            style={{
                                textAlign: "center",
                                color: Colors.accentBlue100,
                            }}
                        >
                            Fruit -0%
                        </MontText>
                    </View>
                    <ScrollView style={{ maxHeight: 300 }}>
                        <MontText style={{ textAlign: "center" }}>
                            {!readMore &&
                            ingredientDetails?.description?.length >
                                MAX_TEXT_LENGTH
                                ? formatDescription(
                                      ingredientDetails.description
                                  )
                                : ingredientDetails?.description}
                        </MontText>
                    </ScrollView>
                    {!readMore &&
                        ingredientDetails?.description?.length >
                            MAX_TEXT_LENGTH && (
                            <Button
                                title="Read More"
                                onPress={() => setReadMore(true)}
                            />
                        )}
                    {readMore && (
                        <Button
                            title="Read Less"
                            onPress={() => setReadMore(false)}
                        />
                    )}
                </View>
            </View>
        </Modal>
    );
};

export default IngredientDetailsModal;
