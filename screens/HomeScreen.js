import {View, Text, ScrollView} from 'react-native';
import {containerStyle, textStyles} from "../components/styles";
import EventButton from "../components/EventButton";
import ScreenWrapper from "../components/ScreenWrapper";

const data = [
    {}
]
export default function HomeScreen() {
    return (
        <ScreenWrapper>
            <View style={containerStyle.header}>
                <Text style={textStyles.headerText}>My Events</Text>
            </View>
            <View style={containerStyle.eventView}>
                <ScrollView style={containerStyle.scrollView}
                            contentContainerStyle={containerStyle.scrollViewButtonAlignment}>
                    <EventButton title={"AGR FROSH"} date={'May 20, 2025'}/>
                </ScrollView>
            </View>
        </ScreenWrapper>
    );
}