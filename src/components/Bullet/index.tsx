import React from 'react';
import { View } from 'react-native';

import {
    Container
} from './styles';

type Props = {
    active?: boolean
}

export const Bullet = ({ active = false }: Props) => {
    return <Container active={ active } />
}