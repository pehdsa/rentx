import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    padding: 0 32px;    
    background-color: ${({theme}) => theme.colors.background_primary};

    align-items: center;
    justify-content: center;
`;
export const Header = styled.View`
    width: 100%;
`;

export const HeaderTitle = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(40)}px;

    margin-bottom: 16px;
`;

export const HeaderSubtitle = styled.Text`
    color: ${({ theme }) => theme.colors.text_details};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;

    line-height: ${RFValue(25)}px;
`;

export const Form = styled.View`
    width: 100%;
    margin: 64px 0;
`;

export const Footer = styled.View`
    width: 100%;
`;