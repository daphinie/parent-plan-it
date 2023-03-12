import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from '../screens/Home';
import Resources from '../screens/Resources';
import BasicInfo from '../screens/BasicInfo';

const tab = createBottomTabNavigator();

function TabNav(){
    return (
        <tab.Navigator initialRouteName="home">
            <tab.Screen 
              name="Goals" 
              component={Home} 
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Image ta
                    source={require('../../assets/goaltab.png')} 
                    style={{ width: size, height: size }} 
                    resizeMode="contain" 
                  />
                )
              }}
            />
            <tab.Screen 
              name="Resources" 
              component={Resources} 
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Image 
                    source={require('../../assets/resources active.png')} 
                    style={{ width: size, height: size }} 
                    resizeMode="contain" 
                  />
                )
              }}
            />
            <tab.Screen 
              name="Profile" 
              component={BasicInfo} 
              options={{
                tabBarIcon: ({ focused, color, size }) => (
                  <Image 
                    source={require('../../assets/profile active.png')} 
                    style={{ width: size, height: size }} 
                    resizeMode="contain" 
                  />
                )
              }}
            />
        </tab.Navigator>
    )
}

export default TabNav