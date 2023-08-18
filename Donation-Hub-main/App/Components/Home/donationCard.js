import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from "../../Shared/Colors"
import { Dimensions } from "react-native";
import DonationDetails from './donationDetails';

export default function DonationCard({categoryItem, categoryImage}){

    const [isShown, setIsShown] = React.useState(false);

    return(
        <View>
        <TouchableOpacity
        onPress={()=>{
            setIsShown(current =>!current);
        }}>
        <View
        style={{
        margin: 5,
        width: Dimensions.get("screen").width * 0.89,
        height: 70,
        backgroundColor:Colors.GRAY,
        elevation: 0.2,
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        gap: 5,
      }}
    >
            <Image source={categoryImage} style={{ width:50, height: 50, margin: 10 }}></Image>
            <View style={{margin: 15, marginLeft: 0}}>
            <Text>DONOR NAME</Text> 
            <Text>Type of Item Donated: {categoryItem} </Text>  
            </View>
        
            </View>
        </TouchableOpacity>
        {isShown && <DonationDetails profilePhoto={categoryImage}
        profileName={"TEJA"}
        profileDonation={"NIGGA"}
        profileLocation={"HYD"}/>}
        </View>
    );
}