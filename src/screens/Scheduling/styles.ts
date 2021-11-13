import styled, { css } from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    width: 100%;
    height: 325px;
    background-color: ${({ theme }) => theme.colors.header};

    justify-content: flex-end;
    padding: 25px;
    padding-top: ${ getStatusBarHeight() ? getStatusBarHeight() + 25 : 25 }px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(34)}px;

    margin-top: 24px;
    margin-bottom: 24px;
`
export const RentalPeriod = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`;

type DateValueProps = {
    selected: boolean
}

export const DateInfo = styled.View<DateValueProps>`
    width: 32%;
    ${({ selected, theme }) => !selected && css`
        border-bottom-width: 1px;
        border-bottom-color: ${ theme.colors.text };
        padding-bottom: 5px;
    `}
`;

export const DateTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
    margin-bottom: 3px;
`;



export const DetaValue = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;
`;


export const Content = styled.ScrollView``;

export const Footer = styled.View`
    width: 100%;    
    padding: 24px;
    padding-bottom: 24px;
`;