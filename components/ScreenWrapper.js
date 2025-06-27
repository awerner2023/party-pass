import {containerStyle} from './styles';
import {SafeAreaView} from "react-native-safe-area-context";

export default function ScreenWrapper({children}) {
    return (
        <SafeAreaView style={containerStyle.container}>
            {children}
        </SafeAreaView>
    );
}