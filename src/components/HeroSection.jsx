import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
       
             <div className='flex items-center justify-center'>
                <div className='w-1/2 '>
                    <h2 className='text-7xl line-h mt-12 font-semibold text-[#1A1919]p-0 m-0'>One Step <br /> Closer To Your <br /> <span className='text-[#7E90FE]'>Dream Job</span></h2>
                    <p className='mt-6 text-gray-900'>
                    Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                    </p>
                    <div className='mt-12'>
                    <Link className='btnn'>Get Started</Link>
                    </div>
                </div>
                <div className='w-1/2'>
                    <img className='object-cover p-6 mt-6' src="mans-2.jpg" alt="" />
                </div>
            </div>
        
    );
};

export default HeroSection;