import React, { useState, useEffect } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { CarDTO } from '../../dtos/CarDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { format } from 'date-fns';
import { api } from '../../services/api';



import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Accessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal
} from './styles';

import { 
    BackButton,
    ImageSlider,
    Accessory,
    Button
} from '../../components';

type Params = {
    car: CarDTO
    dates: Array<string>
}

type RentalPeriod = {
    start: string,
    end: string
}

export const SchedulingDetails = () => {

    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { car, dates } = route.params as Params;

    const [ rentalPeriod, setRentalPeriod ] = useState<RentalPeriod>({} as RentalPeriod);
    const [ totalPrice, setTotalPrice ] = useState(0);
    const [ daysPeriod, setDaysPeriod ] = useState(0);

    async function handleSchedulingComplete() {
        const schedulesByCar = await api.get(`/schedules_bycars/${ car.id }`);

        const unavailable_dates = [
            ...schedulesByCar.data.unavailable_dates,
            ...dates
        ];

        await api.post('schedules_byuser', {
            user_id: 1,
            car,
        });

        api.put(`/schedules_bycars/${ car.id }`, {
            id: car.id,
            unavailable_dates,
            startDate: rentalPeriod.start,
            endDate: rentalPeriod.end
        })
        .then(() => {
            //@ts-ignore
            navigation.navigate('SchedulingComplete')
        })
        .catch(() => {
            Alert.alert('Erro', 'Não possível finalizar o agendamento.')
        })        
        
    }

    useEffect(() => {
        setRentalPeriod({
            start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
            end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy')
        });
        setTotalPrice(car.rent.price * (dates.length - 1));
        setDaysPeriod(dates.length - 1);
    },[]);

    return (
        <>
        <StatusBar 
            barStyle="dark-content" 
            backgroundColor={ theme.colors.background_secondary }          
        />
        <Container>            
            
            <Header>
                <BackButton onPress={() => navigation.goBack()} />
            </Header>

            <CarImages>
                <ImageSlider imagesUrl={ car.photos } />
            </CarImages>

            <Content
                contentContainerStyle={{
                    padding: 24,
                    alignItems: 'center'
                }}
                showsVerticalScrollIndicator={ false }
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

                <RentalPeriod>
                    
                    <CalendarIcon>
                        <Feather 
                            name="calendar" 
                            size={RFValue(24)} 
                            color={theme.colors.shape} 
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>{ rentalPeriod.start }</DateValue>
                    </DateInfo>

                    <Feather 
                        name="chevron-right" 
                        size={RFValue(10)} 
                        color={theme.colors.text} 
                    />

                    <DateInfo>
                        <DateTitle>ATÈ</DateTitle>
                        <DateValue>{ rentalPeriod.end }</DateValue>
                    </DateInfo>

                </RentalPeriod>      

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ { car.rent.price } x{ daysPeriod }</RentalPriceQuota>
                        <RentalPriceTotal>R$ { totalPrice }</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>          

            </Content>
            
            <Footer>
                <Button 
                    title="Alugar agora"                     
                    onPress={ handleSchedulingComplete }   
                    color={ theme.colors.success }
                    loading={ false }
                />
            </Footer>

        </Container>
        </>
    )
}