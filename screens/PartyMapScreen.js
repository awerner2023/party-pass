import ScreenWrapper from "../components/ScreenWrapper";
import {useEffect, useState} from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location"
import {containerStyle} from "../components/styles";
import ActivityScreen from "./ActivityScreen";

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
            <ActivityScreen/>
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