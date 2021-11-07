import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { BackButton } from '../../../components';

import {
    Container,
    Header,
    HeaderTitle,
    HeaderSubtitle
} from './styles';

export const FirstStep = () => {
    const navigation = useNavigation()

    return (
        <Container>

            <Header>
                <BackButton onPress={() => navigation.goBack()} />
                <HeaderTitle>
                    Crie sua{'\n'}
                    conta
                </HeaderTitle>
                <HeaderSubtitle>
                    Faça seu cadastro de{'\n'}
                    forma rápida e fácil.
                </HeaderSubtitle>
            </Header>

        </Container>
    )
}