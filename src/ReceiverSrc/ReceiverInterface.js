import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import { firebase } from './receiverconfig';

import Login from './ReceiverLogin'
import Registration from './ReceiverRegister';
import DashBoard from '../DashBoard';
import Header from '../components/Header';



const Stack = createStackNavigator();

export default function ReceiverInterface(){
  const [initialising, setInitialising] = useState(true);
  const [user, setUser] = useState();
  
  // Handle user state changes

  function onAuthStateChanged(user){
    setUser(user);
    if(initialising) setInitialising(false);
  }
  
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[]);

  if(initialising) return null;
  if(!user){
    return (
      <Stack.Navigator>
        <Stack.Screen name = "Login"
        component={Login}
        options ={{
          headerTitle: () => <Header name ="DonationHub" />,
          headerStyle: {
            height:150,
            borderBottomLeftRadius:50,
            borderBottomRightRadius: 50,shadowColor: '#000'
            ,elevation:25,
           
          }
        }} />

<Stack.Screen name = 'Registration'
        component = {Registration}
        options ={{
          headerTitle: () => <Header name ="DonationHub" />,
          headerStyle: {
            height:200,
            borderBottomLeftRadius:50,
            borderBottomRightRadius: 50,shadowColor: '#000'
            ,elevation:25
          }
        }} />



      </Stack.Navigator>
    )
  }

  console.log("Entered Dashboard")
  return(
    
    <Stack.Navigator>
     <Stack.Screen name = 'Dashboard'
        component = {DashBoard}
        options ={{
          headerTitle: () => <Header name ="DonationHub" />,
          headerStyle: {
            height:150,
            borderBottomLeftRadius:50,
            borderBottomRightRadius: 50,shadowColor: '#000'
            ,elevation:25,
            
          },
          headerLeft : ()=>null
          
        }} />
    </Stack.Navigator>
  )

}

