import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Title
} from './styles';

type Props = RectButtonProps & {
    title: string,
    color?: string,
    enabled?: boolean,
    loading?: boolean
}

export const Button = ({ title, color, enabled = true, loading = false, ...rest }: Props) => {
    return (
        <Container 
            { ...rest } 
            color={ color }
            enabled={ enabled }
            style={{ opacity: enabled ? 1 : .5 }}
        >
            { loading ? <ActivityIndicator size="small" color="#FFFFFF" /> : <Title>{ title }</Title> }
        </Container>
    )
}