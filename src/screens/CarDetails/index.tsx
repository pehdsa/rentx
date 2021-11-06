import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { CarDTO } from '../../dtos/CarDTO';

import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    interpolate,
    Extrapolate
} from 'react-native-reanimated';

import {
    Container,
    Header,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    About,
    Accessories,
    Footer
} from './styles';

import { 
    BackButton,
    ImageSlider,
    Accessory,
    Button
} from '../../components';

type Params = {
    car: CarDTO
}

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

export const CarDetails = () => {

    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params;

    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler(event => {
        scrollY.value = event.contentOffset.y
    });

    const headerStyleAnimation = useAnimatedStyle(() => {
        return {
            height: interpolate(
                scrollY.value,
                [0,220],
                [220,80],
                Extrapolate.CLAMP
            )
        }
    });

    const sliderCarsStyleAnimation = useAnimatedStyle(() => {
        return {
            opacity: interpolate(
                scrollY.value,
                [0,150],
                [1,0],
                Extrapolate.CLAMP
            )
        }
    })

    function handleScheduling() {
        //@ts-ignore
        navigation.navigate('Scheduling', {
            car
        })
    }

    return (
        <>
        <StatusBar 
            barStyle="dark-content" 
            backgroundColor={ theme.colors.background_secondary }          
        />
        <Container>            
            
            <Animated.View style={[ 
                styles.header, 
                headerStyleAnimation,
                { backgroundColor: theme.colors.background_secondary }
            ]}>
                <Header>
                    <BackButton onPress={() => navigation.goBack()} />
                </Header>

                <Animated.View style={[ sliderCarsStyleAnimation, {
                    paddingTop: getStatusBarHeight() + 32
                } ]}>
                    <ImageSlider imagesUrl={ car.photos } />
                </Animated.View>
            </Animated.View>

            <Animated.ScrollView
                contentContainerStyle={{
                    padding: 24,
                    paddingTop: getStatusBarHeight() + 200,
                    alignItems: 'center'
                }}
                showsVerticalScrollIndicator={ false }
                scrollEventThrottle={ 16 }
                onScroll={ scrollHandler }
            >
                
                <Details>
                    
                    <Description>
                        <Brand>{ car.brand }</Brand>
                        <Name>{ car.name }</Name>
                    </Description>

                    <Rent>
                        <Period>{ car.rent.period }</Period>
                        <Price>R$ { car.rent.price }</Price>
                    </Rent>

                </Details>

                <Accessories>

                    { car.accessories.map(accessory => {
                        return (
                            <Accessory 
                                key={ accessory.type }
                                name={ accessory.name } 
                                icon={ getAccessoryIcon(accessory.type) } 
                            />
                        )
                    }) }

                </Accessories>

                <About>
                    { car.about }
                    { car.about }
                    { car.about }
                    { car.about }
                    { car.about }
                    { car.about }
                </About>

            </Animated.ScrollView>
            
            <Footer>
                <Button 
                    title="Escolher período do aluguel"                     
                    onPress={ handleScheduling }
                />
            </Footer>

        </Container>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        overflow: 'hidden',
        zIndex: 1
    },
    back: {
        marginTop: 24
    }
})