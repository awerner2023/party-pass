import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {colors, containerStyle} from "./styles";
import {Ionicons} from "@expo/vector-icons";
import {RFValue} from "react-native-responsive-fontsize";
import ButtonHandler from "./EventButtonHandler";

export default function EventButton({title, date}) {
    return (
        <TouchableOpacity style={[containerStyle.eventButton, containerStyle.iosShadow]}>
            <View>
                <Text>{title}</Text>
                <Text>{date}</Text>
            </View>
            <Pressable style={{height:'100%', justifyContent:'center', alignItems: 'center'}}>
                <Ionicons name={'ellipsis-vertical'} size={RFValue(20)} color={colors.pureBlack}></Ionicons>
            </Pressable>
        </TouchableOpacity>
    )
}