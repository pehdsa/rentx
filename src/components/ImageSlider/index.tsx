import React, { useState, useRef } from 'react';
import { FlatList, ViewToken } from 'react-native';

import {
    Container,
    ImageIndexes,
    ImageIndex,
    CarImageWrapper,
    CarImage,
} from './styles';

import { Bullet } from '../Bullet'

type Props = {
    imagesUrl: Array<{
        id: string,
        photo: string
    }>
}

type ChangeImageProps = {
    viewableItems: ViewToken[];
    changed: ViewToken[];
}

export const ImageSlider = ({ imagesUrl }: Props) => {

    const [ imageIndex, setImageIndex ] = useState(0);

    const indexChanged = useRef((info: ChangeImageProps) => {
        const index = info.viewableItems[0].index!;
        setImageIndex(index);
    });

    return (
        <Container>
            
            <ImageIndexes>
                { imagesUrl.map((item, index) => (
                    <Bullet 
                        key={String(item.id)}
                        active={ imageIndex === index } 
                    />
                )) }
            </ImageIndexes>            

            <FlatList 
                data={ imagesUrl }
                keyExtractor={ item => item.id }
                renderItem={({ item }) => (
                    <CarImageWrapper>
                        <CarImage                             
                            source={{ uri: item.photo }} 
                            resizeMode="contain"
                        />
                    </CarImageWrapper>
                )}
                horizontal
                showsHorizontalScrollIndicator={ false }
                onViewableItemsChanged={ indexChanged.current }
            />

        </Container>
    )
}