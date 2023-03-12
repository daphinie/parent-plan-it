import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './TabNav';

export default function Routes () {
    return (
        <NavigationContainer>
            <TabNav/>
        </NavigationContainer>
    )
}