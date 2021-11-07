import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: 0 32px;    
    background-color: ${({theme}) => theme.colors.background_primary};
`;
export const Header = styled.View`
    width: 100%;
    padding-top: ${getStatusBarHeight() + 20}px;
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