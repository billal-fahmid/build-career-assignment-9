import React, { useContext, useState } from 'react';
import { FeaturesContext } from '../App';

const Features = () => {
    const allFeatures = useContext(FeaturesContext);
    const defaultShowFeatures = allFeatures.slice(0, 4);
    console.log(defaultShowFeatures)
    // const [features ,setFeatures] = useState()
    // setFeatures(defaultShowFeatures)


    return (
        <div className='mt-6'>
            <h1 className='text-center text-[#1A1919] text-5xl font-semibold py-6'>Featured Jobs</h1>
            <p className='text-center mb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid sm:grid-cols-1 gap-6 lg:grid-cols-2 justify-between'>
                {
                    defaultShowFeatures.map(feature => (
                        <div className=' border border-gray-200 p-10'>
                            <img className='object-cover h-10 w-36 mb-8' src={feature.company_logo} alt="" />
                            <h2 className='text-2xl font-semibold pb-2'>{feature.job_title}</h2>
                            <p className='text-xl'>{feature.company_name}</p>
                            <div className='flex mt-4 gap-4'>
                                <button className='outline-btn'>Full Time</button>
                                <button className='outline-btn'>Remote</button>
                            </div>
                            <div className='flex '>
                                <p>{feature.location}</p>
                                <p>{feature.salary_range}</p>
                            </div>
                            <button className='btnn'>View Details</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Features;