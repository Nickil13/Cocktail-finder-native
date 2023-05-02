import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { Colors } from "./Colors";

export const MyLightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: "white",
        primary: Colors.accentBlue200,
    },
};
export const MyDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: Colors.darkGrey,
        primary: Colors.primary,
    },
};
