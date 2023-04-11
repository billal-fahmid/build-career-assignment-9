import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import JobCategory from './JobCategory';
import Features from './Features';

const Home = () => {
    return (
        <div className='lg:px-16 sm:mx-5'>
           <HeroSection></HeroSection>
           <JobCategory></JobCategory>
           <Features></Features>
        </div>
    );
};

export default Home;