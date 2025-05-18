import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";

export default function CustomButton({title}) {
    return(
        <TouchableOpacity style={styles.button} onPress={ () => {}}>
            <Text style={[styles.text]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#6C5CE7',
        borderRadius: 20,
        padding: 10,
        width: '45%',
    },
    text: {
        fontSize: RFValue(15),
        fontFamily: 'System',
    },
        })