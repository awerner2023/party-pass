import {SafeAreaProvider} from "react-native-safe-area-context";
import RootNavigator from "./components/RootNavigator";

export default function App() {
    return (
        <SafeAreaProvider>
            <RootNavigator/>
        </SafeAreaProvider>
  );
}


