import React from 'react';
import Header from '../../shared/Header';
import Slider from './Slider';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div className='mt-12'>
           <Header/>
           <Slider/>
           <Navbar/>
        </div>
    );
};

export default Home;