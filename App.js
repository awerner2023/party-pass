import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';
import NavigationBar from "./components/NavigationBar";
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SafeAreaProvider} from "react-native-safe-area-context";


export default function App() {
    return (
        <SafeAreaProvider>
          <NavigationBar/>
        </SafeAreaProvider>
  );
}


