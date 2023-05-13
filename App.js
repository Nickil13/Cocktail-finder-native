import RootStackNavigator from "./navigation/RootStackNavigator";
import { ThemeProvider } from "./context/ThemeContext";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
    return (
        <ThemeProvider>
            <SafeAreaProvider>
                <RootStackNavigator />
            </SafeAreaProvider>
        </ThemeProvider>
    );
}
