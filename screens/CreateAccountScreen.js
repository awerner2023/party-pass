import {TextInput} from "react-native";
import {containerStyle} from "../components/styles";
import ScreenWrapper from "../components/ScreenWrapper";
import Spacer from "../components/Spacer";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";

const spacerSize = 10;

export default function CreateAccountScreen() {
    const navigation = useNavigation();
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
            <CustomButton title={"Back to Login"} onPress = {() =>navigation.navigate("Login")}/>
        </ScreenWrapper>
    )
}