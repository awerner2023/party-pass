import {Alert, ScrollView, TextInput} from "react-native";
import {containerStyle} from "../components/styles";
import ScreenWrapper from "../components/ScreenWrapper";
import Spacer from "../components/Spacer";
import CustomButton from "../components/CustomButton";
import {useNavigation} from "@react-navigation/native";
import {createUser} from "../Firebase/firebaseAuth";
import {useState} from "react";

const spacerSize = 10;

export default function CreateAccountScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const navigation = useNavigation();

    const handleCreateAccount = async () => {
        if (password !== passwordConfirm) {
            Alert.alert("Passwords do not match")
            return;
        }
        const {user, error} = await createUser(email, password)
        if (user) {
            navigation.navigate("MainScreen")
        } else {
            Alert.alert(error.message)
        }
    };

    return (<ScreenWrapper>
        <ScrollView style={containerStyle.scrollView}
                    contentContainerStyle={containerStyle.scrollViewPageAlignment}>
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
                       secureTextEntry={true}
            ></TextInput>
            <Spacer height={spacerSize}/>
            <TextInput style={containerStyle.textBoxContainer}
                       placeholder={'Confirm Password'}
                       value={passwordConfirm}
                       onChangeText={setPasswordConfirm}
                       secureTextEntry={true}
            ></TextInput>
            <Spacer height={spacerSize}/>
            <CustomButton title={"Create Account"} onPress={handleCreateAccount}/>
            <Spacer height={spacerSize}/>
            <CustomButton title={"Back to Login"} onPress={() => navigation.navigate("Login")}/>
        </ScrollView>
    </ScreenWrapper>)
}