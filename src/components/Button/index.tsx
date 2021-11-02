import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Title
} from './styles';

type Props = RectButtonProps & {
    title: string,
    color?: string,
}

export const Button = ({ title, color, ...rest }: Props) => {
    return (
        <Container { ...rest } color={ color }>
            <Title>{ title }</Title>
        </Container>
    )
}