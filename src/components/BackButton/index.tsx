import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { BorderlessButtonProps } from 'react-native-gesture-handler';

import {
    Container
} from './styles';

type BackButtonProps = BorderlessButtonProps & {
    color?: string
}

export const BackButton = ({ color, ...rest }: BackButtonProps) => {
    const theme = useTheme();

    return (
        <Container { ...rest }>
            <MaterialIcons 
                name="chevron-left"
                size={ 24 }
                color={ color ? color: theme.colors.text }
            />
        </Container>
    )
}