import { View, Text } from 'react-native'
import React from 'react'
import Colors from "../../Shared/Colors";
import { TouchableOpacity } from 'react-native'
import DonationCard from './donationCard';
import { FlatList } from 'react-native'
import DonationDetails from './donationDetails';

function take5ele(array){
    var info=[];
    for(var i=0; i<5; i++){
        info[i]=array[i];
    }
    return info;
}

export default function SelectedCategoryList({categoryName, categoryImage}){
    const Food = ["biryani", "pulav", "rice", "testing","salad"];
    const Books = ["1", "2", "3", "4", "5"];
    const Cloths = ["a", "d", "s", "f", "g", "h"];
    var info;
    if(categoryName=="Food"){
        info = take5ele(Food);
    }
    else if(categoryName=="Books"){
        info = take5ele(Books);
    }
    else if(categoryName=="Cloths"){
        info = take5ele(Cloths);
    }
    return(
        
        <View style={{marginTop: 15, backgroundColor: Colors.WHITE}}>
        <Text style={{fontSize: 20}}>Nearby {categoryName} Donations</Text>
   
        <FlatList
        data = {info}
        renderItem={({item}) =>(
            <TouchableOpacity
            onPress={() =>{
                
            }}
            >
                
                <DonationCard categoryItem={item} categoryImage={categoryImage}/>
                
            </TouchableOpacity>
            
            
        )
        }
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 5}}
        
      />
        
        </View>
    );
}