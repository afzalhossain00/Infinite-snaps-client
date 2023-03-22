import React from 'react';
import useTitle from '../../../Hooks/Hooks';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import WorkProcess from '../WorkProcess/WorkProcess';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <WorkProcess></WorkProcess>
            <Reviews></Reviews>
            <Contact></Contact>
        </div>
    );
};

export default Home;