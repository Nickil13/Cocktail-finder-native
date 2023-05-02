import React, { useCallback } from "react";
import { Linking, Pressable } from "react-native";
import MontText from "./MontText";

export default function OpenURLButton({ title, url, styleText, styleButton }) {
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);

        if (supported) {
            // Opening the link with some app, if the URL scheme is "http" the web link should be opened
            // by some browser in the mobile
            await Linking.openURL(url);
        } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    }, [url]);
    return (
        <Pressable onPress={handlePress} style={styleButton}>
            <MontText style={styleText}>{title}</MontText>
        </Pressable>
    );
}
