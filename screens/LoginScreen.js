import {StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import Spacer from '../components/Spacer';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textBox}
                       placeholder={'Username'}
            ></TextInput>
            <Spacer height={spacerSize} />
            <TextInput style={styles.textBox}
                       placeholder={'Password'}
            ></TextInput>
            <Spacer height={spacerSize}/>
            <Text style = {{color : '#007AFF', fontSize: 12}}> Forgot your password?</Text>
            <Spacer height={3}/>
            <CustomButton title={'Login'}/>
            <Spacer height={spacerSize}/>
            <Text style = {{color : '#007AFF', fontSize: 12}}>First time using Party Pass</Text>
            <Spacer height={3}/>
            <CustomButton title={'Create Account'}/>
        </View>
    )
}

const spacerSize = 10

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBox: {
        height: 40,
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        width: '45%',
        borderRadius: 20,
        textAlign: 'center',
    }
});