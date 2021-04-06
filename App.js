import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Scanner from './src/Components/Scanner'
import MyQrCode from './src/Components/MyQrCode'
import CouponSelector from './src/Components/CouponSelector'

const Stack = createStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='MyQrCodeScreen'
        screenOptions={{ headerShown: false}}
      >

        <Stack.Screen name='MyQrCodeScreen' component={MyQrCode}/>
        <Stack.Screen name='ScannerScreen' component={Scanner}/>
        <Stack.Screen name='CouponSelectorScreen' component={CouponSelector}/>

      </Stack.Navigator>
    </NavigationContainer>


  );
}
