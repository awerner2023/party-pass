import {containerStyle, colors} from "./styles";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screens/ProfileScreen";
import {Ionicons} from '@expo/vector-icons'
import {RFValue} from "react-native-responsive-fontsize";

export default function NavigationBar() {
    const TabNavigator = createBottomTabNavigator();
    return (<NavigationContainer>
            <TabNavigator.Navigator initialRouteName="Home"
                screenOptions = {({route}) => ({
                    tabBarIcon: ({focused,color, size}) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        return <Ionicons name={iconName} color={color} size={RFValue(24)} />
                    },
            ... containerStyle.tabNavigator
            })}>
                <TabNavigator.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
                <TabNavigator.Screen name='Profile' component={ProfileScreen} options={{headerShown: false}}/>
            </TabNavigator.Navigator>
        </NavigationContainer>
    );
}