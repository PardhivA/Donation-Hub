import { View, Text } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

export default function PlaceMarker({ item }) {
  return (
    <View>
      <Marker title="Donar" coordinate={
        {
            latitude: item[0],
            longitude: item[1],
            latitudeDelta: 0.051,
            longitudeDelta: 0.041,
        }
      } />
    </View>
  );
}
