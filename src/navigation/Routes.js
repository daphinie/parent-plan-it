import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNav from './TabNav';
import { auth } from '../../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

export default function Routes() {
    const Stack = createNativeStackNavigator();
    const[initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);

    const onAuthStateChangedHandler = (user) => {
        setUser(user);
        if (initializing) {
            setInitializing(false);
        }
    };
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, onAuthStateChangedHandler);
    
        return unsubscribe;
    }, []);
    
    if (initializing) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <NavigationContainer>
            {user ? (
                <TabNav/>
            ) : (
                <Stack.Navigator>
                <>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="SignUp" component={SignUp}/>
                </>
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
});
