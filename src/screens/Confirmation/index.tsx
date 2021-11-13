import React from 'react';
import { StatusBar } from 'react-native';
import { useWindowDimensions } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation, useRoute } from '@react-navigation/native';


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

type Params = {
    title: string,
    message: string,
    nextScreenRoute: string
}

export const Confirmation = () => {
    const { width } = useWindowDimensions();
    const theme = useTheme();
    const navigation = useNavigation();

    const route = useRoute();
    const { title, message, nextScreenRoute } = route.params as Params;

    function handleGoToHome() {
        //@ts-ignore
        navigation.navigate(nextScreenRoute);
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
                <Title>{ title }</Title>

                <Message>
                    { message }
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