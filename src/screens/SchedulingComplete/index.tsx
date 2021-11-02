import React from 'react';
import { StatusBar } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';


import LogoSvg from '../../assets/logo_background_gray.svg';
import DoneSvg from '../../assets/done.svg';

import {
    Container,
    Content,
    Title,
    Message,
    Footer
} from './styles';

import { ConfirmButton } from '../../components';

export const SchedulingComplete = () => {
    const { width } = useWindowDimensions();
    const theme = useTheme();
    const navigation = useNavigation()

    function handleGoToHome() {
        //@ts-ignore
        navigation.navigate('Home')
    }

    return (
        <>
        <StatusBar 
            barStyle="light-content" 
            backgroundColor={ theme.colors.header }          
        />
        <Container>
            
            <LogoSvg width={ width } />

            <Content>
                <DoneSvg width={80} height={80} />
                <Title>Carro alugado!</Title>

                <Message>
                    Agora você só precisa ir{'\n'}
                    até a concessionária da RENTX{'\n'}
                    pegar o seu automóvel.
                </Message>

            </Content>

            <Footer>
                <ConfirmButton 
                    title="Ok" 
                    onPress={handleGoToHome}
                />
            </Footer>

        </Container>
        </>
    )
}