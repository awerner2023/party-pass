import {Alert, Text, TextInput} from 'react-native';
import CustomButton from '../components/CustomButton';
import Spacer from '../components/Spacer';
import {RFValue} from "react-native-responsive-fontsize";
import {colors, containerStyle} from '../components/styles'
import ScreenWrapper from "../components/ScreenWrapper";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import {loginUser} from "../Firebase/firebaseAuth";


const spacerSize = 10;

export default function LoginScreen() {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation();

    const handleLogin = async () => {
        const {user, error} = await loginUser(email, password)
        if(user) {
            navigation.navigate('MainScreen')
        } else {
            Alert.alert('Login Failed!', error)
        }
    };

    return (
        <ScreenWrapper>
                <TextInput style={containerStyle.textBoxContainer}
                           placeholder={'Email'}
                           value={email} onChangeText={setEmail}
                ></TextInput>
                <Spacer height={spacerSize}/>
                <TextInput style={containerStyle.textBoxContainer}
                           placeholder={'Password'} secureTextEntry={true}
                           value={password} onChangeText={setPassword}
                ></TextInput>
                <Spacer height={spacerSize}/>
                <Text style={{color: colors.blueText, fontSize: RFValue(12)}}> Forgot your password?</Text>
                <Spacer height={3}/>
                <CustomButton title={'Login'} onPress={handleLogin}/>
                <Spacer height={spacerSize}/>
                <Text style={{color: colors.blueText, fontSize: RFValue(12)}}>First time using Party Pass</Text>
                <Spacer height={3}/>
                <CustomButton title={'Create Account'} onPress={()=> navigation.navigate('CreateAccount')}/>
        </ScreenWrapper>
    )
}
