import {containerStyle} from "./styles";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import {Ionicons} from '@expo/vector-icons'

export default function NavigationBar() {
    const TabNavigator = createBottomTabNavigator();
    return (<NavigationContainer>
            <TabNavigator.Navigator
                screenOptions={containerStyle.tabNavigator}>
                <TabNavigator.Screen name='Home' component={HomeScreen} options={{headerShown: false} }
                    <Ionicons name={'home'} size = '24' color={'black'}/>
                />
                <TabNavigator.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
                <TabNavigator.Screen name='Profile' component={ProfileScreen} options={{headerShown: false}}/>
            </TabNavigator.Navigator>
        </NavigationContainer>
        );
}