import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import Spacer from '../components/Spacer';
import {RFValue} from "react-native-responsive-fontsize";
import {colors, containerStyle} from '../components/styles'

export default function LoginScreen() {
    return (
        <SafeAreaView style={containerStyle.container}>
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
            <CustomButton title={'Login'}/>
            <Spacer height={spacerSize}/>
            <Text style={{color: colors.blueText, fontSize: RFValue(12)}}>First time using Party Pass</Text>
            <Spacer height={3}/>
            <CustomButton title={'Create Account'}/>
        </SafeAreaView>
    )
}

const spacerSize = 10;