import React from 'react';
import Banner from './HomeElements/Banner';
import Tabsection from './HomeElements/Tabsection';
import TourType from './HomeElements/TourType';
import Testimonial from './HomeElements/Testimonial';
import { useLoaderData } from 'react-router-dom';


const Home = () => {

    const loadedData = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <Tabsection loadedData={loadedData}></Tabsection>
            <TourType></TourType>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;