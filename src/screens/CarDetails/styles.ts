import styled from 'styled-components/native';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.colors.background_secondary};    
`;

export const Header = styled.View`
    width: 100%;
    z-index: 100;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    position: absolute;


    padding-top: ${ getStatusBarHeight() ? getStatusBarHeight() + 18 : 0 }px;
    margin-left: 24px;
`;


export const CarImages = styled.View`
    padding-top: ${ getStatusBarHeight() ? getStatusBarHeight() + 32 : 32 }px;
`;

export const Content = styled.ScrollView`
    flex-grow: 1;
`

export const Details = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;

    margin-top: 38px;
`

export const Description = styled.View``

export const Brand = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_details};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(25)}px;
`

export const Rent = styled.View``

export const Period = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_details};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`

export const Price = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.main};
    font-size: ${RFValue(25)}px;
`

export const About = styled.Text`
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text_details};
    font-size: ${RFValue(12)}px;    
    margin-top: 23px;
    line-height: 25px;
`;

export const Accessories = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-between;
    margin-top: 16px;
`;

export const Footer = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_secondary};
    padding: 24px;
    padding-bottom: ${getBottomSpace() + 24}px;
`;