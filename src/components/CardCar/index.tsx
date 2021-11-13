import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { CarDTO } from '../../dtos/CarDTO';

import {
    Container,
    Details,
    Brand,
    Name,
    About,
    Rent,
    Period,
    Price,
    Type,
    CarImg,
} from './styles';

type CardCarProps = RectButtonProps & {
    data: CarDTO
}

import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

export const CardCar = ({ data, ...rest }: CardCarProps) => {

    const Motoricon = getAccessoryIcon(data.fuel_type);

    return (
        <Container { ...rest }>
            
            <Details>

                <Brand>{ data.brand }</Brand>
                <Name>{ data.name }</Name>

                <About>
                    <Rent>
                        <Period>{ data.period }</Period>
                        <Price>{ `R$ ${data.price}` }</Price>
                    </Rent>
                    <Type>
                        <Motoricon 
                            width={ 20 } 
                            height={ 20 }
                        />
                    </Type>
                </About>

            </Details>

            <CarImg 
                source={{ uri: data.thumbnail }} 
                resizeMode="contain"
            />

        </Container>
    )
}