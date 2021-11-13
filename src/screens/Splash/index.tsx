import React, { useEffect } from 'react';
import { View, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/core';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    Easing,
    interpolate,
    Extrapolate,
    runOnJS
} from 'react-native-reanimated';

import {
    Container
} from './styles';

import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

const { width: WIDTH, height: HEIGHT } = Dimensions.get('window');

export const Splash = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    const splashAnimation = useSharedValue(0);
    
    const brandStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0,50], [1,0]),
            transform: [
                { 
                    translateX: interpolate(splashAnimation.value,
                        [0,50],
                        [0,-50],
                        Extrapolate.CLAMP
                    )
                }
            ]            
        }
    });

    const logoStyle = useAnimatedStyle(() => {
        return {
            opacity: interpolate(splashAnimation.value, [0,25,50], [0,.3,1]),
            transform: [
                { 
                    translateX: interpolate(splashAnimation.value,
                        [0,50],
                        [-50,0],
                        Extrapolate.CLAMP
                    )
                }
            ]  
        }
    });

    function startApp() {
        //@ts-ignore
        navigation.navigate('Signin');
    }

    useEffect(() => {
        splashAnimation.value = withTiming(
            50,
            { duration: 1000 },
            () => {
                'worklet'
                runOnJS(startApp)();                
            }
        )
    },[]);

    return (
        <>
        <StatusBar 
            barStyle="light-content" 
            backgroundColor={ theme.colors.header }          
        />
        <Container>
            
            <Animated.View style={[ styles.box, {  zIndex: 10, ...brandStyle }]}>
                <BrandSvg 
                    width={80}
                    height={50}
                />
            </Animated.View>


            <Animated.View style={[ styles.box, {  zIndex: 5, ...logoStyle }]}>
                <LogoSvg 
                    width={ 180 }
                    height={ 20 }
                />
            </Animated.View>

        </Container>
        </>
    )
}

const styles = StyleSheet.create({

    box: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: WIDTH,
        height: HEIGHT,
        alignItems: 'center',
        justifyContent: 'center'
    }

})