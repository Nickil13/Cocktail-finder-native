import React, { forwardRef } from "react";
import { View, Image } from "react-native";

import MontText from "../components/MontText";
import BebasText from "../components/BebasText";
import { Colors } from "../styles/Colors";

const defaultImage = {
    uri: "https://images.unsplash.com/photo-1601925088924-aad72e86b894?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
};

const Section = forwardRef(function Section(
    { title, description, recipes, image },
    ref
) {
    return (
        <View style={{ gap: 40 }} ref={ref}>
            <View style={{ backgroundColor: Colors.accentPink100 }}>
                <View
                    style={{
                        width: "100%",
                        maxHeight: 200,
                        overflow: "hidden",
                    }}
                >
                    <Image
                        source={image || defaultImage}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                        resizeMode="cover"
                    />
                </View>
                <BebasText style={{ fontSize: 48, textAlign: "center" }}>
                    {title}
                </BebasText>
            </View>

            <MontText>{description}</MontText>
            <View>
                <MontText
                    style={{
                        textTransform: "uppercase",
                        marginBottom: 20,
                        textAlign: "center",
                    }}
                >
                    {title} recipes to try:
                </MontText>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 20,
                    }}
                >
                    {recipes.map((recipe, index) => {
                        return (
                            <MontText
                                key={index}
                                style={{
                                    color: Colors.accentPink200,
                                    width: "45%",
                                    textAlign: "center",
                                }}
                            >
                                {recipe}
                            </MontText>
                        );
                    })}
                </View>
            </View>
        </View>
    );
});

export default Section;
