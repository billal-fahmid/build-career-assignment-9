import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from './HeroSection';
import JobCategory from './JobCategory';

const Home = () => {
    return (
        <div className='px-16'>
           <HeroSection></HeroSection>
           <JobCategory></JobCategory>
        </div>
    );
};

export default Home;