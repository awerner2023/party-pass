import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
  const TabNavigator = createBottomTabNavigator();
    return (
        <SafeAreaProvider>
          <NavigationContainer>
            <TabNavigator.Navigator>
                <TabNavigator.Screen name = 'Home' component={HomeScreen} options={{headerShown: false}} />
                <TabNavigator.Screen name = 'Login' component={LoginScreen} options={{headerShown: false}} />
            </TabNavigator.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
  );
}


