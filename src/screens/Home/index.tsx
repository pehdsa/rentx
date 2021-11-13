import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, BackHandler } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';

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
    LoadAnimation
} from '../../components';

export const Home = () => {

    const theme = useTheme();
    const navigation = useNavigation();

    const [ cars, setCars ] = useState<CarDTO[]>([]);
    const [ loading, setLoading ] = useState(true);
    const [ amount, setAmount ] = useState(0);

    useEffect(() => {  
        let isMounted = true;
        async function loadData() {
            try {
                const { data } = await api.get('/cars');
                if( isMounted ) {
                    setCars(data);
                    setAmount(data.length);
                }
            } catch (err) {
                console.log(err);
            } finally {
                if( isMounted ) {
                    setLoading(false);
                }
            }
        }
        loadData();

        return () => {
            isMounted = false;
        }
    },[]);

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

        </Container>
        </>
    )
}


