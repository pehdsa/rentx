import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

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

type CarProps = {
    brand: string,
    name: string,
    rent: {
        period: string,
        price: number
    },
    thumbnail: string
}

type CardCarProps = RectButtonProps & {
    data: CarProps
}

import GasolineSvg from '../../assets/gasoline.svg';

export const CardCar = ({ data, ...rest }: CardCarProps) => {
    return (
        <Container { ...rest }>
            
            <Details>

                <Brand>{ data.brand }</Brand>
                <Name>{ data.name }</Name>

                <About>
                    <Rent>
                        <Period>{ data.rent.period }</Period>
                        <Price>{ `R$ ${data.rent.price}` }</Price>
                    </Rent>
                    <Type>
                        <GasolineSvg 
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