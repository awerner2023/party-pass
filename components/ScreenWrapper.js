import {View} from 'react-native';
import {containerStyle} from './styles';
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context";

export default function ScreenWrapper({children}) {
    return (
        <SafeAreaView style={containerStyle.container}>
            {children}
        </SafeAreaView>
    );
}