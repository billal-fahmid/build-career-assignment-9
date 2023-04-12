import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link, useLoaderData } from 'react-router-dom';


const Job = ({job}) => {
    return (
        <div className='p-7 bg-slate-100 rounded-lg flex flex-col md:flex-row'>
            <img className='h-48 md:w-48 bg-white rounded-lg' src={job.company_logo} alt="" />
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='lg:ml-8 lg:w-[500px]'>
                    <h2 className='text-2xl font-bold mb-2'>{job.job_title}</h2>
                    <p className='text-xl font-semibold mb-4'>{job.company_name}</p>
                    <div className='flex gap-4'>
                        <button className='outline-btn'>{job.job_type}</button>
                        <button className='outline-btn'>{job.type}</button>
                    </div>
                    <div className='flex flex-col md:flex-row mt-6'>
                        <p className='flex items-center mr-8 font-semibold'><MapPinIcon className='h-5 w-5 mr-2'></MapPinIcon> {job.location}</p>
                        <p className='flex items-center font-semibold'><CurrencyDollarIcon className='h-5 w-5 mr-2'></CurrencyDollarIcon> {job.salary_range}</p>
                    </div>

                </div>
                <div className='lg:ml-36 overflow-hidden'>
                    <Link to={`/details/${job.id}`} className='btnn'>View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Job;