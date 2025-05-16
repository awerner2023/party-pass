import {StyleSheet, Text, View} from 'react-native';
import CustomButton from '../components/CustomButton';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text>Party Pass</Text>
            <CustomButton title={'Login'}/>
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
});