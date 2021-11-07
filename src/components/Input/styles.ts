import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    position: relative;
    flex-direction: row;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const IconContainer = styled.View`
    width: 55px;
    height: 56px;
    align-items: center;
    justify-content: center;
    border-right-width: 2px;
    border-color: ${({theme}) => theme.colors.background_primary};
`;

export const InputText = styled.TextInput`
    flex: 1;
    padding: 0 15px;

    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${RFValue(14)}px;
`;

export const IconEyeContainer = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    width: 55px;
    height: 60px;
    align-items: center;
    justify-content: center;
`;

export const BorderFocus = styled.View`
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.main};
`;