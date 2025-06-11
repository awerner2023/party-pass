import {View, Text, TouchableOpacity} from "react-native";
import {containerStyle} from "../components/styles";
import ScreenWrapper from "../components/ScreenWrapper";
import CustomButton from "../components/CustomButton";

export default function ProfileScreen() {
    return (
        <ScreenWrapper>
            <CustomButton title={'Log Out'}></CustomButton>
        </ScreenWrapper>
    )
}