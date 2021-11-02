import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
    width: 100%;
    height: 126px;

    background: ${({ theme }) => theme.colors.background_secondary};
    border-radius: 5px;
    margin-bottom: 16px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const Details = styled.View`
    padding-left: 24px;
`

export const Brand = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_details};
    text-transform: uppercase;
`

export const Name = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
`;

export const About = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding-top: 16px;
`;

export const Rent = styled.View`
    padding-right: 24px;
`;

export const Period = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_details};
    text-transform: uppercase;
`;

export const Price = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.main};
`;

export const Type = styled.View``;

export const CarImg = styled.Image`
    width: 167px;
    height: 85px;
    margin-right: 24px;
`;
