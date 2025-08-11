import {Alert, TextInput} from "react-native";
import {containerStyle} from "../components/styles";
import ScreenWrapper from "../components/ScreenWrapper";
import Spacer from "../components/Spacer";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {createUser} from "../Firebase/firebaseAuth";
import {useState} from "react";

const spacerSize = 10;

export default function CreateAccountScreen() {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();

    const handleCreateAccount = async() => {
        const {user,error} = await createUser({email,password})
        if(user){
            navigation.navigate("MainScreen")
        }else {
            Alert.alert(error.message)
        }
    };

    return (
        <ScreenWrapper>
            <TextInput style={containerStyle.textBoxContainer}
                       placeholder={'Email'}
                       value={email}
                       onChangeText={setEmail}
            ></TextInput>
            <Spacer height={spacerSize}/>
            <TextInput style={containerStyle.textBoxContainer}
                       placeholder={'Password'}
                       value={password}
                       onChangeText={setPassword}
            ></TextInput>
            <Spacer height={spacerSize}/>
            <CustomButton title={"Create Account"} onPress={handleCreateAccount}/>
            <Spacer height={spacerSize}/>
            <CustomButton title={"Back to Login"} onPress = {()=>navigation.navigate("Login")}/>
        </ScreenWrapper>
    )
}