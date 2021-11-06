import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { api } from '../../services/api';
import { useTheme } from 'styled-components';
import { AntDesign } from '@expo/vector-icons';
import { CarDTO } from '../../dtos/CarDTO';

import { BackButton, LoadAnimation, CardCar } from '../../components';

import {
    Container,
    Header,
    Title,
    Subtitle,
    CarList,
    Content,
    Appointments,
    AppointmentsTitle,
    AppointmentsAmount,
    CarWrapper,
    CarFooter,
    CarFooterTitle,
    CarFooterPeriod,
    CarFooterDate,
} from './styles';

type CarProps = {
    id: number,
    user_id:string,
    car: CarDTO,
    startDate: string,
    endDate: string
}

export const MyCars = () => {

    const navigation = useNavigation();
    const theme = useTheme();
    const [ cars, setCars ] = useState<CarProps[]>([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {        
        loadData();
    },[]);

    async function loadData() {
        try {
            const response = await api.get('schedules_byuser?user_id=1');            
            setCars(response.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    function handleCarDetails(car: CarDTO) {
        //@ts-ignore
        navigation.navigate('CarDetails', { car })
    }

    return (
        <>
        <StatusBar 
            barStyle="light-content" 
            backgroundColor={ theme.colors.shape_dark }          
        />
        <Container>

            <Header>
                
                <BackButton 
                    color={ theme.colors.shape }
                    onPress={() => navigation.goBack()} 
                />

                <Title>
                    Seus agendamentos,{'\n'}
                    estão aqui.
                </Title>

                <Subtitle>
                    Conforto, segurança e praticidade.
                </Subtitle>

            </Header>

            { loading ? (
                <LoadAnimation />
            ) : (
                <Content>                    
                    <CarList 
                        contentContainerStyle={{ padding: 24 }}
                        data={ cars }
                        ListHeaderComponent={() => (
                            <Appointments>
                                <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
                                <AppointmentsAmount>{ String(cars.length).padStart(2, '0') }</AppointmentsAmount>
                            </Appointments>
                        )}
                        renderItem={({ item }) => {                    
                            return (
                                <CarWrapper>
                                    <CardCar 
                                        data={ item.car }                             
                                        onPress={() => handleCarDetails(item.car)}
                                    />
                                    <CarFooter>
                                        <CarFooterTitle>Período</CarFooterTitle>
                                        <CarFooterPeriod>
                                            <CarFooterDate>{ item.startDate }</CarFooterDate>
                                            <AntDesign 
                                                name="arrowright"
                                                size={20}
                                                color={ theme.colors.text }
                                                style={{ marginHorizontal: 10 }}
                                            />
                                            <CarFooterDate>{ item.endDate }</CarFooterDate>
                                        </CarFooterPeriod>
                                    </CarFooter>
                                </CarWrapper>
                            )
                        }}
                        ListEmptyComponent={() => {
                            return <></>
                        }}
                        keyExtractor={item => String(item.id)}
                    />
                </Content>
            ) }

        </Container>
        </>
    )
}