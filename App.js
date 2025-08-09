import {SafeAreaProvider} from "react-native-safe-area-context";
import {useEffect, useState} from "react";
import {NavigationContainer, useNavigation} from "@react-navigation/native";
import {onAuthStateChanged} from "firebase/auth";
import {auth} from "./Firebase/firebase";
import ActivityScreen from "./screens/ActivityScreen";
import LoginScreen from "./screens/LoginScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabNavigator from "./components/RootNavigator";

const Stack = createNativeStackNavigator();

export default function App() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = onAuthStateChanged(auth,(u)=>{
            if(u) {
                setUser(u);
                console.log(u.email)
            } else {
                console.log("user not found");
            }
            setLoading(false);
        })
        return () => checkAuth()
    },[]);

    if (loading) {
        return (
            <ActivityScreen/>
        )}

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{headerShown: false}}>
                    {user ? (
                        <Stack.Screen name="MainScreen" component={TabNavigator}/>
                    ) : (
                        <>
                        <Stack.Screen name="Login" component={LoginScreen}/>
                        <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
                        </>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
};


