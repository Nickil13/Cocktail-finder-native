import RootStackNavigator from "./navigation/RootStackNavigator";
import { ThemeProvider } from "./context/ThemeContext";

export default function App() {
    return (
        <ThemeProvider>
            <RootStackNavigator />
        </ThemeProvider>
    );
}
