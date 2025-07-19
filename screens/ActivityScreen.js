import {View, ActivityIndicator} from 'react-native'
import {colors, containerStyle} from "../components/styles";

export default function ActivityScreen() {
    return (
        <View style={containerStyle.loadingScreen}>
            <ActivityIndicator size={'large'} color={colors.purpleBackground} />
        </View>)
};