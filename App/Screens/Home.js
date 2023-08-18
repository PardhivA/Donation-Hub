import { View, Text } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Home/Header'
import GoogleMapView from '../Components/Home/GoogleMapView'
import CategoryList from '../Components/Home/CategoryList'
import Colors from '../Shared/Colors'

export default function Home() {
  
    const donarList = [
        [34.0522, -118.2437],
        [40.7128, -74.0060],
        [51.5074, -0.1278],
        [48.8566, 2.3522],
        [37.7749, -122.4194],
        [41.9028, 12.4964],
        [35.6895, 139.6917],
        [-33.8688, 151.2093],
        [55.7558, 37.6176],
        [-22.9068, -43.1729],
        [19.4326, -99.1332],
        [52.5200, 13.4050], 
        [37.9838, 23.7275],
        [25.2769, 55.2962],
        [30.0444, 31.2357],
        [-34.6037, -58.3816],
        [-12.0464, -77.0428],
        [31.5497, 74.3436],
        [6.5244, 3.3792],
        [35.6895, 139.6917]
      ];

  return (
    <View style={{padding:20, backgroundColor: Colors.WHITE}}>
      <Header/>
      <GoogleMapView donarList={donarList}/>
      <CategoryList />
    </View>
  )
}