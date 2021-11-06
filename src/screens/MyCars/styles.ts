import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { CarDTO } from '../../dtos/CarDTO';


export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.colors.background_primary};   
`;

export const Header = styled.View`
    width: 100%;
    height: 273px;
    background-color: ${({ theme }) => theme.colors.header};

    justify-content: flex-end;
    padding: 25px;
    padding-top: ${ getStatusBarHeight() ? getStatusBarHeight() + 25 : 25 }px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(30)}px;

    margin-top: 20px;
    margin-bottom: 15px;
`

export const Subtitle = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.secondary_400};
    font-size: ${RFValue(15)}px;

    margin-top: 20px;
    margin-bottom: 15px;
`

type CarProps = {
    id: number,
    user_id:string,
    car: CarDTO,
    startDate: string,
    endDate: string
}

export const CarList = styled(FlatList as new () => FlatList<CarProps>)``;

export const Content = styled.View`
    flex: 1;
`

export const Appointments = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`

export const AppointmentsTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
`

export const AppointmentsAmount = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
`

export const CarWrapper = styled.View`
    margin-bottom: 16px;
`

export const CarFooter = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.colors.background_secondary};
    margin-top: -12px;
    padding: 12px;
    
`
export const CarFooterTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text_details};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
`

export const CarFooterPeriod = styled.View`
    flex-direction: row;
    align-items: center;
`

export const CarFooterDate = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(11)}px;
`