import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import theme from '../../styles/theme';

import ArrowLeft from '../../assets/arrow.svg';

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DetaValue,
    Content,
    Footer,
} from './styles';

import { 
    BackButton,
    Button,
    Calendar
} from '../../components';

export const Scheduling = () => {
    const navigation = useNavigation();

    return (
        <>
        <StatusBar 
            barStyle="light-content" 
            backgroundColor={ theme.colors.header }          
        />
        <Container>

            <Header>
                <BackButton 
                    color={ theme.colors.shape }
                    onPress={() => navigation.goBack()} 
                />

                <Title>
                    Escolha uma{'\n'}
                    data de início e{'\n'}
                    fim do aluguel
                </Title>

                <RentalPeriod>
                    
                    <DateInfo selected={ false }>
                        <DateTitle>DE</DateTitle>
                        <DetaValue>                 
                        </DetaValue>
                    </DateInfo>

                    <ArrowLeft />

                    <DateInfo selected={ false }>
                        <DateTitle>ATÉ</DateTitle>
                        <DetaValue>                            
                        </DetaValue>
                    </DateInfo>

                </RentalPeriod>

            </Header>

            <Content
                contentContainerStyle={{ padding: 24 }}
                showsVerticalScrollIndicator={ false }
            >
                
                <Calendar />

            </Content>

            <Footer>
                <Button 
                    title="Confirmar" 
                    //@ts-ignore
                    onPress={() => navigation.navigate('SchedulingDetails')}
                />
            </Footer>

        </Container>
        </>
    )
}