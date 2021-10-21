import React from 'react';
import ListMoviePage from "../ListMoviePage";
import Carousel from '../Carousel'
import Footer from '../_components/Footer';
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
            <Footer />
        </div>
    )
}
