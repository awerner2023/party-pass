import {View, Text, Pressable, ScrollView, SafeAreaView} from 'react-native';
import {colors, containerStyle, textStyles} from "../components/styles";
import {RFValue} from "react-native-responsive-fontsize";
import EventButton from "../components/EventButton";

const data = [
    {}
]
export default function HomeScreen() {
    return (
        <SafeAreaView style={containerStyle.container}>
            <View style={containerStyle.header}>
                <Text style ={textStyles.headerText}>My Events</Text>
            </View>
            <View style = {containerStyle.eventView}>
            <ScrollView style = {containerStyle.scrollView} contentContainerStyle= {containerStyle.scrollViewButtonAlignment}>
                <EventButton title = {"AGR FROSH"} date = {'May 20, 2025'}/>
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}