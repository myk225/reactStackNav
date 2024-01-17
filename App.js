import { StatusBar } from 'expo-status-bar';
import {  Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/screens/home';
import { Profile } from './src/screens/profile';
import { Orders } from './src/screens/order';
const Tabs=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
          <Tabs.Screen name='Home' component={Home} options={{title:"Welcome"}}>

          </Tabs.Screen>
          <Tabs.Screen name='Profile' component={Profile} >

          </Tabs.Screen>
          <Tabs.Screen name='Orders' component={Orders} options={{title:"New Orders"}}/>
      </Tabs.Navigator>
    </NavigationContainer>
  );
}


