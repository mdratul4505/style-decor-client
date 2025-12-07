import React from 'react';
import Hero from '../components/Hero';
import OurServices from '../components/OurServices';

const Home = () => {
    return (
        <div className='overflow-x-hidden'>
          <Hero></Hero>
          <OurServices></OurServices>
        </div>
    );
};

export default Home;