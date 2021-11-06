import React, { useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';

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
    Button
} from '../../components';

import { Calendar, DayProps, generateInterval, MarkedDatesProps } from '../../components/Calendar';
import { getPlatformDate } from '../../utils/getPlatformDate';
import { CarDTO } from '../../dtos/CarDTO';

type RentalPeriodProps = {    
    startFormatted: string,    
    endFormatted: string
}

type Params = {
    car: CarDTO
}

export const Scheduling = () => {

    const [ lastSelectedDate, setLastSelectedDate ] = useState<DayProps>({} as DayProps);
    const [ markedDates, setMarkedDates ] = useState<MarkedDatesProps>({} as MarkedDatesProps);
    const [ rentalPeriod, setRentalPeriod ] = useState<RentalPeriodProps>({} as RentalPeriodProps)

    const navigation = useNavigation();
    const route = useRoute();
    const { car } = route.params as Params

    function handleChangeDate(date: DayProps) {
        let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
        let end = date;

        if (start.timestamp > end.timestamp) {
            start = end;
            end = start;
        }

        setLastSelectedDate(end);
        const interval = generateInterval(start, end);
        setMarkedDates(interval);

        const firstDate = Object.keys(interval)[0];
        const lastDate = Object.keys(interval)[Object.keys(interval).length - 1];

        setRentalPeriod({
            startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
            endFormatted: format(getPlatformDate(new Date(lastDate)), 'dd/MM/yyyy'),
        })
    }

    function handleConfirmRental() {
        if(!rentalPeriod.startFormatted || !rentalPeriod.endFormatted){
            Alert.alert('Erro', 'Selecione um intervalo para alugar');
            return;
        }
        //@ts-ignore
        navigation.navigate('SchedulingDetails', {
            car,
            dates: Object.keys(markedDates)
        })
    }

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
                    
                    <DateInfo selected={ !!rentalPeriod.startFormatted }>
                        <DateTitle>DE</DateTitle>
                        <DetaValue>
                            { rentalPeriod.startFormatted }
                        </DetaValue>
                    </DateInfo>

                    <ArrowLeft />

                    <DateInfo selected={ !!rentalPeriod.endFormatted }>
                        <DateTitle>ATÉ</DateTitle>
                        <DetaValue>
                            { rentalPeriod.endFormatted }                         
                        </DetaValue>
                    </DateInfo>

                </RentalPeriod>

            </Header>

            <Content
                contentContainerStyle={{ padding: 24 }}
                showsVerticalScrollIndicator={ false }
            >
                
                <Calendar 
                    markedDates={ markedDates }
                    onDayPress={ handleChangeDate }
                />

            </Content>

            <Footer>
                <Button 
                    title="Confirmar"                     
                    onPress={ handleConfirmRental }
                    enabled={ !!rentalPeriod.startFormatted }
                />
            </Footer>

        </Container>
        </>
    )
}