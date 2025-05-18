import {View, Text, Pressable, ScrollView, Platform, SafeAreaView} from 'react-native';
import {colors, containerStyle, textStyles} from "../components/styles";
import {RFValue} from "react-native-responsive-fontsize";

export default function HomeScreen() {
    return (
        <SafeAreaView style={containerStyle.container}>
            <View style={containerStyle.header}>
                <Text style ={textStyles.headerText}>My Events</Text>
            </View>
        <ScrollView></ScrollView>
        </SafeAreaView>
    )
}