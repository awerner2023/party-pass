import {StyleSheet, Text, TextInput, View} from 'react-native';
import CustomButton from '../components/CustomButton';
import Spacer from '../components/Spacer';
export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <TextInput style = {styles.textBox}
                       placeholder={'Username'}
            ></TextInput>
            <Spacer height={5} />
            <TextInput style = {styles.textBox}
                       placeholder={'Password'}
            ></TextInput>
            <Spacer height={5} />
            <CustomButton title={'Login'}/>
            <Spacer height={5} />
            <CustomButton title={'Create Account'}/>
        </View>
    )
}

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