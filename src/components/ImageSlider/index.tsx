import React from 'react';

import {
    Container,
    ImageIndexes,
    ImageIndex,
    CarImageWrapper,
    CarImage,
} from './styles';

type Props = {
    imagesUrl: string[]
}

export const ImageSlider = ({ imagesUrl }: Props) => {
    return (
        <Container>
            
            <ImageIndexes>
                <ImageIndex active={ true } />
                <ImageIndex active={ false } />
                <ImageIndex active={ false } />
                <ImageIndex active={ false } />
            </ImageIndexes>

            <CarImageWrapper
                
            >

                { imagesUrl.map((image, index) => {
                    return (
                        <CarImage 
                            key={ `image_${index}` }
                            source={{ uri: image }} 
                            resizeMode="contain"
                        />
                    )
                }) }

            </CarImageWrapper>

        </Container>
    )
}