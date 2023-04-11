import React from 'react';
import { CurrencyDollarIcon,MapPinIcon} from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const Feature = ({feature}) => {
    return (

        <div className=' border border-gray-200 p-10'>
            <img className='object-cover h-10 w-36 mb-8' src={feature.company_logo} alt="" />
            <h2 className='text-2xl font-semibold pb-2'>{feature.job_title}</h2>
            <p className='text-xl'>{feature.company_name}</p>
            <div className='flex my-4 gap-4'>
                <button className='outline-btn'>{feature.job_type}</button>
                <button className='outline-btn'>{feature.type}</button>
            </div>
            <div className='flex gap-6 mb-6 sm:flex-col flex-col md:flex-row'>
                <p className='flex'>      <MapPinIcon className='h-5 w-5 mr-2'></MapPinIcon>
                    {feature.location}

                </p>
                <p className='flex'>Salary : <div className='flex items-center'>
                    <CurrencyDollarIcon className='h-5 w-5 mx-2'></CurrencyDollarIcon>
                    {feature.salary_range}</div></p>
            </div>
            <Link className='btnn' to={`/details/${feature.id}`}>View Details</Link>
        </div>

    );
};

export default Feature;