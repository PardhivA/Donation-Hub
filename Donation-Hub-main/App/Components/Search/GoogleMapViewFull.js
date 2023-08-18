import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from "react-native-maps";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { UserLocationContext } from "../../Context/UserLocationContext";
import { useEffect } from "react";
import PlaceMarker from '../Home/PlaceMarker';

export default function GoogleMapViewFull({donarList}) {
  const [mapRegion, setMapRegion] = useState({
    latitude: 0,
    longitude: 0,
  });

  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    if (location) {
      setMapRegion((prevRegion) => ({
        ...prevRegion,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }));
    }
  }, [location]);

  return (
    <View >
      <View style={styles.mp}>
        <MapView
          style={{
            width: Dimensions.get("screen").width,
            height: Dimensions.get("screen").height
          }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          region={mapRegion}
          onUserLocationChange={(event) => {
            const { latitude, longitude } = event.nativeEvent.coordinate;
            setMapRegion((prevRegion) => ({
              ...prevRegion,
              latitude,
              longitude,
            }));
          }}
        >
          <Marker title="You" coordinate={mapRegion}>
            <Callout>
              <Text>You are here!</Text>
            </Callout>
          </Marker>

          {donarList.map((item, id) => (
                <PlaceMarker item={item} id={id}/>
          ))}

        </MapView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mp: {
    overflow: "hidden",
  },
});