import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from '../../styles/theme';

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

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

export const CarDetails = () => {

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

                <About>
                    Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla. É um belíssimo carro para quem gosta de acelerar.
                </About>

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