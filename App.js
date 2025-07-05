
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeAreaProvider} from "react-native-safe-area-context";
import RootNavigator from "./components/RootNavigator";

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <RootNavigator/>
            </NavigationContainer>
        </SafeAreaProvider>
  );
}


