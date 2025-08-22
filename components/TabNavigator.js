import {Ionicons} from "@expo/vector-icons";
import {RFValue} from "react-native-responsive-fontsize";
import {containerStyle} from "./styles";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import PartyMapScreen from "../screens/PartyMapScreen";

export default function TabNavigator() {
    const TabNavigator = createBottomTabNavigator();
    return (<TabNavigator.Navigator initialRouteName="Home"
                                    screenOptions={({route}) => ({
                                        tabBarIcon: ({focused, color, size}) => {
                                            let iconName;

                                            if (route.name === 'Home') {
                                                iconName = focused ? 'home' : 'home-outline';
                                            } else if (route.name === 'Profile') {
                                                iconName = focused ? 'person' : 'person-outline';
                                            } else if (route.name === 'Map') {
                                                iconName = focused ? 'map' : 'map-outline';
                                            }
                                            return <Ionicons name={iconName} color={color} size={RFValue(24)}/>
                                        }, ...containerStyle.tabNavigator
                                    })}>
            <TabNavigator.Screen name="Map" component={PartyMapScreen} options={{headerShown: false}}/>
            <TabNavigator.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <TabNavigator.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
        </TabNavigator.Navigator>);
};