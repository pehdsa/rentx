import React from 'react';
import { View } from 'react-native';

import LottieView from 'lottie-react-native';

import loadCar from '../../assets/loadCar.json';

import {
    Container
} from './styles';

export const LoadAnimation = () => {
    return (
        <Container>
            
            <LottieView 
                source={ loadCar }
                autoPlay
                style={{ height: 200 }}
                resizeMode="contain"
                loop
            />

        </Container>
    )
}