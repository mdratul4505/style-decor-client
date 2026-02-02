import React from 'react';
import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import SimpleProcess from '../components/SimpleProcess';
import OurTeam from '../components/OurTeam';
import ClientRevew from '../components/ClientRevew';

const Home = () => {
    return (
        <div className='overflow-x-hidden '>
          <Hero></Hero>
          <OurServices></OurServices>
          <SimpleProcess></SimpleProcess>
          <OurTeam></OurTeam>
          <ClientRevew></ClientRevew>
        </div>
    );
};

export default Home;