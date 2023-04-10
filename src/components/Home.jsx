import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import JobCategory from './JobCategory';
import Features from './Features';

const Home = () => {
    return (
        <div className='px-16'>
           <HeroSection></HeroSection>
           <JobCategory></JobCategory>
           <Features></Features>
        </div>
    );
};

export default Home;