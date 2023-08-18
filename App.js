import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import { firebase } from './src/DonorSrc/config';
import DonorInterface from './src/DonorSrc/DonorInterface';
import ReceiverInterface from './src/ReceiverSrc/ReceiverInterface';
import Entry from './src/Entry';
import Header from './src/components/Header';


const Stack = createStackNavigator();

function App(){




   return(
    <Stack.Navigator>
        
        <Stack.Screen name = "DonorInterface"
        component={DonorInterface}
        options={{
          headerLeft : ()=> null 
        }}
         />

<Stack.Screen name = "ReceiverInterface"
        component={ReceiverInterface}
         />

        </Stack.Navigator>
   )
}

export default () =>{
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}