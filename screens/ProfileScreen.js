import {View, Text} from "react-native";
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
            </View>
            <View style={[containerStyle.container, {position: 'absolute', bottom: RFValue(100)}]}>
                <CustomButton style={{width: '60%'}} title={'Event Mode'}></CustomButton>
            </View>
            <View style={[containerStyle.container, {position: 'absolute', bottom: RFValue(40)}]}>
                <CustomButton style={{width: '60%'}} title={'Log Out'}></CustomButton>
            </View>
        </ScreenWrapper>
    )
}