import {TextInput} from "react-native";
import {containerStyle} from "../components/styles";
import ScreenWrapper from "../components/ScreenWrapper";
import Spacer from "../components/Spacer";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {signOut} from "firebase/auth";
import {auth} from "../Firebase/firebase";

const spacerSize = 10;

export default function CreateAccountScreen() {
    const navigation = useNavigation();
    const logOut = async () => {
        try {
            await signOut(auth);
            navigation.navigate('Login');
        } catch (error) {
            return error;
        }
    }
    return (
        <ScreenWrapper>
            <TextInput style={containerStyle.textBoxContainer}
                       placeholder={'Username'}
            ></TextInput>
            <Spacer height={spacerSize}/>
            <TextInput style={containerStyle.textBoxContainer}
                       placeholder={'Password'}
            ></TextInput>
            <Spacer height={spacerSize}/>
            <CustomButton title={"Create Account"} onPress={()=>navigation.navigate("MainScreen")}/>
            <Spacer height={spacerSize}/>
            <CustomButton title={"Back to Login"} onPress = {logOut()}/>
        </ScreenWrapper>
    )
}