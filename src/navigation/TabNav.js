import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Resources from '../screens/Resources';
import BasicInfo from '../screens/BasicInfo';

const tab = createBottomTabNavigator();

function TabNav(){
    return (
        <tab.Navigator initialRouteName="home">
            <tab.Screen name="home" component={Home}></tab.Screen>
            <tab.Screen name="resources" component={Resources}></tab.Screen>
            <tab.Screen name="your info" component={BasicInfo}></tab.Screen>
        </tab.Navigator>
    )
}

export default TabNav