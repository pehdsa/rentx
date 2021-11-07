import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

type ColorProps = {
    color?: string
}

export const Container = styled(RectButton)<ColorProps>`
    width: 100%;
    padding: 19px;
    align-items: center;
    justify-content: center;
    height: 60px;

    background-color: ${({ theme, color }) => color ? color : theme.colors.main };
`;

type TitleProps = {
    light: boolean
}

export const Title = styled.Text<TitleProps>`
    font-family: ${({ theme }) => theme.fonts.primary_500};
    color: ${({ light, theme }) => light ? theme.colors.title : theme.colors.shape};
    font-size: ${RFValue(14)}px;    
`;