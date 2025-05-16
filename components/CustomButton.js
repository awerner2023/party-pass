import {StyleSheet, Text, TouchableOpacity} from 'react-native';

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
        padding: 15,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'System',
    },
        })