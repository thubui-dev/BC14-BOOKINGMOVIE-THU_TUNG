import React from 'react';
import ListMoviePage from "../ListMoviePage";
import Carousel from '../Carousel';
import data from '../Carousel/data';

export default function HomePage() {
    return (
        <div>
            <Carousel
                data={data}
                control={true}
                auto={true}
                timeOut={3000}
            />
            <ListMoviePage />
        </div>
    )
}
