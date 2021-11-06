import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { CarDTO } from '../../dtos/CarDTO';

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

type Params = {
    car: CarDTO
}

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

export const CarDetails = () => {

    const theme = useTheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params

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

                <About>{ car.about }</About>

            </Content>
            
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