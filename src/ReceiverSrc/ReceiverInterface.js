import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { firebase } from './receiverconfig';

import Login from './ReceiverLogin'
import Registration from './ReceiverRegister';
import DashBoard from '../DashBoard';
import Header from '../components/Header';
import TabNavigation from '../../App/Navigations/TabNavigation';
import { UserLocationContext } from '../../App/Context/UserLocationContext';


const Stack = createStackNavigator();

export default function ReceiverInterface(){
  const [initialising, setInitialising] = useState(true);
  const [user, setUser] = useState();
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  
  // Handle user state changes

  function onAuthStateChanged(user){
    setUser(user);
    if(initialising) setInitialising(false);
  }
  
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[]);


  useEffect(() => {
    (async () => {  
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);




  if(initialising) return null;
  if(!user){
    return (
      <Stack.Navigator>
        <Stack.Screen name = "Login"
        component={Login}
        options={{
          headerLeft : ()=> null 
        }}
        />

<Stack.Screen name = 'Registration'
        component = {Registration}
        options={{
          headerLeft : ()=> null 
        }}``
        />



      </Stack.Navigator>
    )
  }

  console.log("Entered Dashboard")
  return(
    <UserLocationContext.Provider value={{location, setLocation}}> 
    <Stack.Navigator>
     <Stack.Screen name = 'TabNavigation'
        component = {TabNavigation}
       />
    </Stack.Navigator>
    </UserLocationContext.Provider>
  )

}

