import ScreenWrapper from "../components/ScreenWrapper";
import {useEffect, useState} from "react";
import MapView, {Marker} from "react-native-maps";
import * as Location from "expo-location"
import {containerStyle, colors} from "../components/styles";
import {ActivityIndicator, View} from "react-native";

export default function PartyMapScreen() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
            (async () => {
                let {status} = await Location.requestForegroundPermissionsAsync()
                if (status !== 'granted') {
                    setErrorMsg("Permission to access location was denied")
                }

                let currentLocation = await Location.getCurrentPositionAsync()
                setLocation(currentLocation.coords);
            })();
        },
        []);
    if (!location) {
        return (
            <View style={containerStyle.loadingScreen}>
                <ActivityIndicator size={'large'} color={colors.purpleBackground} />
            </View>
        )
    }
    return (
        <ScreenWrapper>
            <MapView style={containerStyle.map}
                     showsUserLocation={true}
                     initialRegion={{
                         latitude: location.latitude,
                         longitude: location.longitude,
                         latitudeDelta: 0.05,
                         longitudeDelta: 0.05,
                     }}>

            </MapView>
        </ScreenWrapper>
    )
}