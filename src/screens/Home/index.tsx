import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList
} from './styles';

import Logo from '../../assets/logo.svg';
import theme from '../../styles/theme';

import { CardCar } from '../../components'

type CarProps = {
    brand: string,
    name: string,
    rent: {
        period: string,
        price: number
    },
    thumbnail: string
}

export const Home = () => {

    const navigation = useNavigation();

    const [ cars, setCars ] = useState<CarProps[]>([
        {
            brand: 'AUDI',
            name: 'RS 5 Coupe',
            rent: {
                period: 'Ao dia',
                price: 120
            },
            thumbnail: 'https://w7.pngwing.com/pngs/853/38/png-transparent-2017-audi-r8-car-audi-rs5-audi-r8-lms-2016-audi-sedan-car-performance-car.png'
        }
    ]);

    function handleCarDetails() {
        //@ts-ignore
        navigation.navigate('CarDetails')
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
                    <TotalCars>Total de 12 carros</TotalCars>
                </HeaderContent>
            </Header>


            <CarList 
                data={[1,2,3,4,5,6]}
                renderItem={({ item }) => {                    
                    return (
                        <CardCar 
                            data={cars[0]}                             
                            onPress={() => handleCarDetails()}
                        />
                    )
                }}
                contentContainerStyle={{
                    padding: 24
                }}
                //@ts-ignore
                keyExtractor={item => item}
            />

        </Container>
        </>
    )
}




