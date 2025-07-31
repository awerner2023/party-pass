import ScreenWrapper from "../components/ScreenWrapper";
import {useEffect, useState} from "react";
import MapView from "react-native-maps";
import * as Location from "expo-location"
import {containerStyle} from "../components/styles";
import ActivityScreen from "./ActivityScreen";
import {Alert} from "react-native";

export default function PartyMapScreen() {

    const [location, setLocation] = useState(null);

    useEffect(() => {
            (async () => {
                let {status} = await Location.requestForegroundPermissionsAsync()
                if (status !== 'granted') {
                    Alert.alert("Permission to access location was denied")
                    return;
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
                     provider={null}
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