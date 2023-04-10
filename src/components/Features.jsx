import React, { useContext, useState } from 'react';
import { FeaturesContext } from '../App';
import { CurrencyDollarIcon,MapPinIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

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
                            <div className='flex my-4 gap-4'>
                                <button className='outline-btn'>Full Time</button>
                                <button className='outline-btn'>Remote</button>
                            </div>
                            <div className='flex gap-6 mb-6'>
                                <p className='flex'>      <MapPinIcon className='h-5 w-5 mr-2'></MapPinIcon>
                                    {feature.location}
                                    
                                </p>
                                <p className='flex'>Salary : <div className='flex items-center'>
                                    <CurrencyDollarIcon className='h-5 w-5 mx-2'></CurrencyDollarIcon>
                                     {feature.salary_range}</div></p>
                            </div>
                            <Link className='btnn' to={`/details/${feature.id}`}>View Details</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Features;