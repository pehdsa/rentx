import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

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

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

export const SchedulingDetails = () => {

    const theme = useTheme();
    const navigation = useNavigation();

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
                <ImageSlider 
                    imagesUrl={['https://w7.pngwing.com/pngs/853/38/png-transparent-2017-audi-r8-car-audi-rs5-audi-r8-lms-2016-audi-sedan-car-performance-car.png']}
                />
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
                        <Brand>Lamborguini</Brand>
                        <Name>Huracan</Name>
                    </Description>

                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 580</Price>
                    </Rent>

                </Details>

                <Accessories>
                    
                    <Accessory 
                        icon={ SpeedSvg } 
                        name="380Km/h" 
                    />
                    <Accessory 
                        icon={ AccelerationSvg } 
                        name="3.2s" 
                    />
                    <Accessory 
                        icon={ ForceSvg } 
                        name="800 HP" 
                    />
                    <Accessory 
                        icon={ GasolineSvg } 
                        name="Gasolina" 
                    />
                    <Accessory 
                        icon={ ExchangeSvg } 
                        name="Auto" 
                    />
                    <Accessory 
                        icon={ PeopleSvg } 
                        name="2 pessoas" 
                    />

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
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>

                    <Feather 
                        name="chevron-right" 
                        size={RFValue(10)} 
                        color={theme.colors.text} 
                    />

                    <DateInfo>
                        <DateTitle>PARA</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>

                </RentalPeriod>      

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 500 x3</RentalPriceQuota>
                        <RentalPriceTotal>R$ 1.500</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>          

            </Content>
            
            <Footer>
                <Button 
                    title="Confirmar" 
                    onPress={() => {}}                    
                />
            </Footer>

        </Container>
        </>
    )
}