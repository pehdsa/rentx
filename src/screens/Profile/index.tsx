import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons';

import { BackButton } from '../../components';

import {
    Container,
    Header,
    HeaderTop,
    HeaderTitle,
    LogoutButton,
    PhotoContainer,
    Photo,
    PhotoButton,
    Content,
    Options,
    Option,
    OptionTitle,
} from './styles';

export const Profile = () => {
    const theme = useTheme();
    const navigation = useNavigation();

    const [ option, setOption ] = useState<'dataEdit' | 'passwordEdit'>('dataEdit')

    function handleBack() {
        navigation.goBack();
    }

    function handleLogout() {

    }

    return (
        <Container>
            
            <Header>
                
                <HeaderTop>
                    <BackButton color={ theme.colors.shape } onPress={ handleBack } />
                    <HeaderTitle>Editar Perfil</HeaderTitle>
                    <LogoutButton onPress={ handleLogout }>
                        <Feather name="power" size={24} color={ theme.colors.shape } />
                    </LogoutButton>
                </HeaderTop>

                <PhotoContainer>
                    <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/3328835?v=4' }} />
                    <PhotoButton onPress={() => {}}>
                        <Feather name="camera" size={24} color={ theme.colors.shape } />
                    </PhotoButton>
                </PhotoContainer>

            </Header>

            <Content>
                
                <Options>
                    <TouchableWithoutFeedback onPress={() => setOption('dataEdit')}>
                        <Option active={ option === 'dataEdit' }>
                            <OptionTitle active={ option === 'dataEdit' }>Dados</OptionTitle>
                        </Option>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={() => setOption('passwordEdit')}>
                        <Option active={ option === 'passwordEdit' }>
                            <OptionTitle active={ option === 'passwordEdit' }>Trocar Senha</OptionTitle>
                        </Option>
                    </TouchableWithoutFeedback>
                </Options>

            </Content>

        </Container>
    )
}