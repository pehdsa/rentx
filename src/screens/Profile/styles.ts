import styled, { css } from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

type OptionProps = {
    active: boolean
}

export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.colors.background_primary};
`;

export const Header = styled.View`
    width: 100%;
    height: 227px;

    background-color: ${({ theme }) => theme.colors.header};
    padding: 0 24px;
    align-items: center;
`;

export const HeaderTop = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${ getStatusBarHeight() + 32 }px;
`;

export const HeaderTitle = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    color: ${({ theme }) => theme.colors.background_secondary};
`;

export const LogoutButton = styled(BorderlessButton)``;

export const PhotoContainer = styled.View`
    position: relative;
    width: 180px;
    height: 180px;

    border-radius: 90px;
    background-color: ${({ theme }) => theme.colors.shape};
    margin-top: 45px;
`;

export const Photo = styled.Image`
    width: 180px;
    height: 180px;
    border-radius: 90px;
`;

export const PhotoButton = styled(RectButton)`
    position: absolute;
    bottom: 10px;
    right: 0;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.main};
`;

export const Content = styled.View`
    flex-grow: 1;
    padding: 0 24px;
    margin-top: 122px;
`;

export const Options = styled.View`
    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.line};

    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
`;

export const Option = styled.View<OptionProps>`
    margin: 0 15px;
    border-bottom-width: 2px;
    border-bottom-color: ${({ theme, active }) => active ? theme.colors.main : 'transparent'};
    padding: 0 0 15px;
`;

export const OptionTitle = styled.Text<OptionProps>`
    font-size: ${RFValue(16)}px;
    font-family: ${({ theme, active }) => active ? theme.fonts.secondary_600 : theme.fonts.secondary_500};
    color: ${({ theme, active }) => active ? theme.colors.header : theme.colors.text_details };
`;

