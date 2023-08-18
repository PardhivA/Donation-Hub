import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import CategoryItem from './CategoryItem'
import { TouchableOpacity } from 'react-native'
import Colors from '../../Shared/Colors'

export default function CategoryList() {

    const categoryList=[
        {
            id:1,
            name:'Food',
            value:'Food',
            icon:require('./../../../assets/food.png')
        },
        {
            id:2,
            name:'Books',
            value:'Books',
            icon:require('./../../../assets/books.png')
        },
        {
            id:3,
            name:'Cloths',
            value:'Cloths',
            icon:require('./../../../assets/cloths.png')
        },
        {
            id:4,
            name:'Tools',
            value:'Tools',
            icon:require('./../../../assets/tools.png')
        },
        {
            id:5,
            name:'Sports',
            value:'Sports',
            icon:require('./../../../assets/sports.png')
        },
        {
            id:6,
            name:'Instruments',
            value:'Instruments',
            icon:require('./../../../assets/musical.png')
        },
    ]

  return (
    <View style={{marginTop: 20, backgroundColor: Colors.WHITE}}>
      <Text style={{fontSize: 20}}>Select Top Categories</Text>
      <FlatList
        data = {categoryList}
        renderItem={({item}) => (
            <TouchableOpacity onPress={() => console.log(item.name)}>
                <CategoryItem category={item}/>
            </TouchableOpacity>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{marginTop: 5}}
      />
    </View>
  )
}