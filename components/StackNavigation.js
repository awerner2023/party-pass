import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from "@react-navigation/native";
import CreateAccountScreen from "../screens/CreateAccountScreen";

export default function StackNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Create Account'} component={CreateAccountScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}