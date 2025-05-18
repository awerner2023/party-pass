import {StyleSheet} from 'react-native';
import {RFValue} from "react-native-responsive-fontsize";

export const colors = {
    purpleBackground: "#6C5CE7",
    blueText: "#007AFF",
    whiteBackground: "#FAFAFA",
    borderColorBlack: "#333333",
}

export const textStyles = {
    headerText: {
        fontStyle: 'System',
        fontWeight: 700,
        fontSize: RFValue(30),
        color: colors.whiteBackground
    }
}

export const containerStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.whiteBackground,
    },
    eventContainer: {
        backgroundColor: colors.whiteBackground,
    },
    textBoxContainer: {
        height: RFValue(40),
        width: '45%',
        borderWidth: RFValue(1),
        borderColor: colors.borderColorBlack,
        borderRadius: RFValue(20),
        textAlign: 'center',
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.purpleBackground,
        height: RFValue(60),
        width: '100%',
        padding: RFValue(5),
    }
})