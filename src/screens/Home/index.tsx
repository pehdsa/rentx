import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, BackHandler } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RectButton, PanGestureHandler } from 'react-native-gesture-handler';

import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedGestureHandler,
    withSpring
} from 'react-native-reanimated';

const ButtonAnimated = Animated.createAnimatedComponent(RectButton);

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList
} from './styles';

import Logo from '../../assets/logo.svg';
import { api } from '../../services/api';
import { CarDTO } from '../../dtos/CarDTO';
import { 
    CardCar,
    Load,
    LoadAnimation
} from '../../components';

export const Home = () => {

    const theme = useTheme();
    const navigation = useNavigation();

    const [ cars, setCars ] = useState<CarDTO[]>([]);
    const [ loading, setLoading ] = useState(true);
    const [ amount, setAmount ] = useState(0);

    const positionY = useSharedValue(0);
    const positionX = useSharedValue(0);

    const myCarsButtonStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: positionX.value },
                { translateY: positionY.value },
            ]
        }
    });

    const onGestureEvent = useAnimatedGestureHandler({
        onStart(_, ctx: any){
            ctx.positionX = positionX.value
            ctx.positionY = positionY.value
        },
        onActive(event, ctx: any){
            positionX.value = ctx.positionX + event.translationX;
            positionY.value = ctx.positionY + event.translationY;
        },
        onEnd(){
            positionX.value = withSpring(0);
            positionY.value = withSpring(0);
        }
    });

    useEffect(() => {        
        loadData();
    },[]);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => {
            return true;
        })
    },[]);

    async function loadData() {
        try {
            const { data } = await api.get('/cars');                        
            setCars(data);
            setAmount(data.length);            
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    function handleCarDetails(car: CarDTO) {
        //@ts-ignore
        navigation.navigate('CarDetails', { car })
    }

    function handleOpenMyCars() {
        //@ts-ignore
        navigation.navigate('MyCars')
    }

    return (
        <>
        <StatusBar 
            barStyle="light-content" 
            backgroundColor={ theme.colors.shape_dark }          
        />
        <Container>
            
            <Header>
                <HeaderContent>
                    <Logo width={ RFValue(108) } height={ RFValue(12) } />
                    <TotalCars>{ amount !== 0 ? `Total de ${ amount } carros` : 'Carregando...' }</TotalCars>
                </HeaderContent>
            </Header>
            
            { loading ? (
                <LoadAnimation />
            ) : (
                <CarList 
                    contentContainerStyle={{ padding: 24 }}
                    data={ cars }
                    renderItem={({ item }) => {                    
                        return (
                            <CardCar 
                                data={ item }                             
                                onPress={() => handleCarDetails(item)}
                            />
                        )
                    }}
                    ListEmptyComponent={() => {
                        return <></>
                    }}
                    keyExtractor={item => item.id}
                />
            ) }

            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View
                    style={[
                        myCarsButtonStyle,
                        {
                            position: 'absolute',
                            bottom: 13,
                            right: 22
                        }
                    ]}
                >
                    <ButtonAnimated 
                        onPress={ handleOpenMyCars }
                        style={[ styles.button, { backgroundColor: theme.colors.main } ]}
                    >
                        <Ionicons name="ios-car-sport" size={ 32 } color={ theme.colors.shape } />
                    </ButtonAnimated>
                </Animated.View>
            </PanGestureHandler>

        </Container>
        </>
    )
}


const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: getBottomSpace()
    }
});

