import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import MapView, { Marker, PROVIDER_GOOGLE, Callout } from "react-native-maps";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import { UserLocationContext } from "../../Context/UserLocationContext";
import { useEffect } from "react";

export default function GoogleMapView() {
    const [mapRegion, setMapRegion] = useState({
      latitude: 0,
      longitude: 0,
      latitudeDelta: 0.091,
      longitudeDelta: 0.081,
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
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, marginBottom: 10, fontWeight: "600" }}>
          Top Near by Places
        </Text>
        <View style={styles.mp}>
          <MapView
            style={{
              width: Dimensions.get("screen").width * 0.89,
              height: Dimensions.get("screen").height * 0.23,
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
            <Marker
              title="You"
              coordinate={mapRegion}
            
            >
              <Callout>
                <Text>You are here!</Text>
              </Callout>
            </Marker>
          </MapView>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    mp: {
      borderRadius: 20,
      overflow: "hidden",
    },
  });