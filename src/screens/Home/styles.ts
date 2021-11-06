import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { CarDTO } from '../../dtos/CarDTO';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 113px;

    background: ${({ theme }) => theme.colors.shape_dark};
    justify-content: center;

    padding-top: ${ getStatusBarHeight() ? getStatusBarHeight() : 0 }px;
`;

export const HeaderContent = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;  

    padding-left: 24px;
    padding-right: 24px;
`;

export const TotalCars = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text};
`;


export const CarList = styled(FlatList as new () => FlatList<CarDTO>)``;
