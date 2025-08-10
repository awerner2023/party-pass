import {TextInput} from "react-native";
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
            <CustomButton title={"Create Account"} onPress={createUser(email,password)}/>
            <Spacer height={spacerSize}/>
            <CustomButton title={"Back to Login"} onPress = {navigation.navigate("Login")}/>
        </ScreenWrapper>
    )
}