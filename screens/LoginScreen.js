import { Text, TextInput} from 'react-native';
import CustomButton from '../components/CustomButton';
import Spacer from '../components/Spacer';
import {RFValue} from "react-native-responsive-fontsize";
import {colors, containerStyle} from '../components/styles'
import ScreenWrapper from "../components/ScreenWrapper";
import {useNavigation} from "@react-navigation/native";

const spacerSize = 10;
export default function LoginScreen() {
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
                <Text style={{color: colors.blueText, fontSize: RFValue(12)}}> Forgot your password?</Text>
                <Spacer height={3}/>
                <CustomButton title={'Login'} onPress={() => navigation.navigate("Home")}/>
                <Spacer height={spacerSize}/>
                <Text style={{color: colors.blueText, fontSize: RFValue(12)}}>First time using Party Pass</Text>
                <Spacer height={3}/>
                <CustomButton title={'Create Account'} onPress={()=> navigation.navigate('CreateAccount')}/>
        </ScreenWrapper>
    )
}
