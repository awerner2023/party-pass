import {SafeAreaView} from 'react-native';
import {containerStyle} from './styles';

export default function ScreenWrapper(children) {
    return (
        <SafeAreaView style={containerStyle.container}>
            {children}
        </SafeAreaView>
    )
}