import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Donar from './Donar';
import Profile from './Profile';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function DTabNavigation() {

  return (
    <Tab.Navigator screenOptions={{
        headerShown: false
    }}>
      <Tab.Screen name="Donar" component={Donar} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({color, size}) => (
            <Ionicons name="home" size={24} color="black" />
        )
      }}
      />
     
      
      <Tab.Screen name="Profile" component={Profile} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({color, size}) => (
            <FontAwesome name="user-circle-o" size={24} color="black" />
        )
      }}
      />
    </Tab.Navigator>
  );
}