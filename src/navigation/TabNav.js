import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Resources from '../screens/Resources';
import BasicInfo from '../screens/BasicInfo';

const tab = createBottomTabNavigator();

function TabNav(){
    return (
        <tab.Navigator initialRouteName="home">
            <tab.Screen name="Goals" component={Home}></tab.Screen>
            <tab.Screen name="Resources" component={Resources}></tab.Screen>
            <tab.Screen name="Profile" component={BasicInfo}></tab.Screen>
        </tab.Navigator>
    )
}

export default TabNav