import {View, Text, TouchableOpacity} from "react-native";
import {containerStyle, textStyles} from "../components/styles";
import ScreenWrapper from "../components/ScreenWrapper";
import CustomButton from "../components/CustomButton";
import {RFValue} from "react-native-responsive-fontsize";

export default function ProfileScreen() {
    return (
        <ScreenWrapper>
            <View style={[containerStyle.header,{position: 'relative'}]}>
                <Text style ={textStyles.headerText}>My Profile</Text>
            </View>
            <View style={containerStyle.container}>
                <CustomButton title={'Log Out'}></CustomButton>
            </View>
        </ScreenWrapper>
    )
}