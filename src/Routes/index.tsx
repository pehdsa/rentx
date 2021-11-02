import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const { Navigator, Screen } = createStackNavigator();

import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator 
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                
                <Screen name="Home" component={ Home } />
                <Screen name="CarDetails" component={ CarDetails } />

            </Navigator>
        </NavigationContainer>
    )
}
