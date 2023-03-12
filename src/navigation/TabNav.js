import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Resources from '../screens/Resources';

const tab = createBottomTabNavigator();

function TabNav(){
    return (
        <tab.Navigator initialRouteName="home">
            <tab.Screen name="home" component={Home}></tab.Screen>
            <tab.Screen name="resources" component={Resources}></tab.Screen>
        </tab.Navigator>
    )
}

export default TabNav