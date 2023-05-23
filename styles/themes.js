import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { Colors } from "./Colors";

export const MyLightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: Colors.white,
        nav: Colors.white,
        primary: Colors.accentBlue200,
        text: Colors.darkGrey,
    },
};
export const MyDarkTheme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        background: Colors.extraDarkGrey,
        nav: Colors.darkGrey,
        primary: Colors.primary,
        text: Colors.grey,
    },
};
