import {Ionicons} from "@expo/vector-icons";
import {RFValue} from "react-native-responsive-fontsize";
import {containerStyle} from "./styles";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import {NavigationContainer} from "@react-navigation/native";
import PartyMapScreen from "../screens/PartyMapScreen";

const isAuthenticated = false;
const Stack = createNativeStackNavigator();

function TabNavigator() {
    const TabNavigator = createBottomTabNavigator();
    return (
            <TabNavigator.Navigator initialRouteName="Home"
                                    screenOptions = {({route}) => ({
                                        tabBarIcon: ({focused,color, size}) => {
                                            let iconName;

                                            if (route.name === 'Home') {
                                                iconName = focused ? 'home' : 'home-outline';
                                            } else if (route.name === 'Profile') {
                                                iconName = focused ? 'person' : 'person-outline';
                                            } else if (route.name === 'Map') {
                                                iconName = focused ? 'map' : 'map-o'
                                            }
                                            return <Ionicons name={iconName} color={color} size={RFValue(24)} />
                                        },
                                        ... containerStyle.tabNavigator
                                    })}>
                <TabNavigator.Screen name="Map" component={PartyMapScreen} options={{headerShown: false}} />
                <TabNavigator.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                <TabNavigator.Screen name='Home' component={HomeScreen} options={{headerShown: false}}/>
                <TabNavigator.Screen name='Profile' component={ProfileScreen} options={{headerShown: false}}/>
            </TabNavigator.Navigator>
    );
}

export default function RootNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="MainScreen" component={TabNavigator} />
                    <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}