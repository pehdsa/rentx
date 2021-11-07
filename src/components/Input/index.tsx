import React, { useState } from 'react';
import { TextInputProps, TouchableWithoutFeedback } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
    Container,
    IconContainer,
    InputText,
    IconEyeContainer,
    BorderFocus
} from './styles';


type InputProps = TextInputProps & {
    iconName?: React.ComponentProps<typeof Feather>['name'],
    isPassword?: boolean,
    value?: string
}

export const Input = ({ iconName, isPassword = false, value, ...rest }: InputProps) => {
    const theme = useTheme();

    const [ secureText, setSecureText ] = useState(true);
    
    const [ isFocused, setIsFocused ] = useState(false);
    const [ isFilled, setIsFilled ] = useState(false);

    function handleInputFocus() {
        setIsFocused(true);
    }
    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value);
    }

    return (
        <>
        <Container>

            { iconName && (
                <IconContainer>
                    <Feather 
                        name={ iconName } 
                        size={ 24 } 
                        color={ (isFocused || isFilled) ? theme.colors.main : theme.colors.text } 
                    />
                </IconContainer>
            ) }
            
            { isPassword ? (
                <InputText 
                    { ...rest }
                    onFocus={ handleInputFocus }
                    onBlur={ handleInputBlur }
                    secureTextEntry={ secureText }
                />
            ) : (
                <InputText 
                    { ...rest }
                    onFocus={ handleInputFocus }
                    onBlur={ handleInputBlur }
                />
            ) }

            { isPassword && (
                <TouchableWithoutFeedback onPress={() => setSecureText(!secureText)}>
                    <IconEyeContainer>
                        <Feather name={ secureText ? 'eye' : 'eye-off' } size={ 24 } color={ theme.colors.text } />
                    </IconEyeContainer>
                </TouchableWithoutFeedback>
            ) }

        </Container>
        { isFocused && <BorderFocus /> }
        </>
    )
}