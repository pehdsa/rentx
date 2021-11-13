import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { Splash } from '../screens/Splash';
import { Signin } from '../screens/Signin';
import { FirstStep } from '../screens/SignUp/FirstStep';
import { SecondStep } from '../screens/SignUp/SecondStep';
import { Confirmation } from '../screens/Confirmation';

export function AuthRoutes() {
    
    return (        
        <Navigator 
            initialRouteName="Splash"
            screenOptions={{ headerShown: false }}
        >
            
            <Screen name="Splash" component={ Splash } />

            <Screen 
                name="Signin" 
                component={ Signin } 
                options={{
                    gestureEnabled: false
                }}
            /> 
            <Screen name="FirstStep" component={ FirstStep } />     
            <Screen name="SecondStep" component={ SecondStep } />    

            <Screen name="Confirmation" component={ Confirmation } />

        </Navigator>        
    )
}
