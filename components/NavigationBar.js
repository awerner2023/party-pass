import {containerStyle} from "./styles";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";

export default function NavigationBar() {
    const TabNavigator = createBottomTabNavigator();
    return (<NavigationContainer>
            <TabNavigator.Navigator
                screenOptions={containerStyle.tabNavigator}>
                <TabNavigator.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
                <TabNavigator.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
                <TabNavigator.Screen name='Profile' component={ProfileScreen} options={{headerShown: false}}/>
            </TabNavigator.Navigator>
        </NavigationContainer>
        );
}