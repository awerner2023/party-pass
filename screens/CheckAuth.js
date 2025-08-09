import {auth} from '../Firebase/firebase'
import {useEffect, useState} from "react";
import ActivityScreen from "./ActivityScreen"
import {useNavigation} from "@react-navigation/native";
import {onAuthStateChanged} from "firebase/auth";

export default function (AuthCheck) {
    const [loading,setLoading] = useState(true);
    const navigation = useNavigation();

    useEffect(() => {
        const checkUser = onAuthStateChanged(auth,(user)=>{
            if(user){
                navigation.navigate("MainScreen")
            } else {
                navigation.navigate("Login")
                setLoading(false);
            }
        });
        return () => checkUser();
    },[]);

    if (loading)
        return <ActivityScreen />;

    return null;
}