import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const { Navigator, Screen } = createStackNavigator();

import { Splash } from '../screens/Splash';
import { Home } from '../screens/Home';
import { CarDetails } from '../screens/CarDetails';
import { Scheduling } from '../screens/Scheduling';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { MyCars } from '../screens/MyCars';

import { Signin } from '../screens/Signin';
import { FirstStep } from '../screens/SignUp/FirstStep';


export function Routes() {
    return (
        <NavigationContainer>
            <Navigator 
                initialRouteName="Signin"
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
                <Screen 
                    name="Home" 
                    component={ Home } 
                    options={{
                        gestureEnabled: false
                    }}
                />
                <Screen name="CarDetails" component={ CarDetails } />
                <Screen name="Scheduling" component={ Scheduling } />
                <Screen name="SchedulingDetails" component={ SchedulingDetails } />
                <Screen name="SchedulingComplete" component={ SchedulingComplete } />
                <Screen name="MyCars" component={ MyCars } />

            </Navigator>
        </NavigationContainer>
    )
}
