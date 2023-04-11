import React, { useEffect, useState } from 'react';
import { getShoppingCart } from './utils/fakedb';
import { Link, useLoaderData } from 'react-router-dom';
import { CurrencyDollarIcon,MapPinIcon} from '@heroicons/react/24/solid'

const Jobs = () => {
    const features = useLoaderData();
    console.log(features)

    const [apply2, setApply] = useState([]);

    useEffect(() => {
        let arr = []
        const applyJobs = getShoppingCart()
        // console.log(applyJobs)
        for (const job in applyJobs) {
            const apply = features.find(feature => feature.id == job);
            if (apply) (
                arr.push(apply)
            )
        }
        // console.log(arr)
        setApply(arr)

    }, [])

    console.log(apply2)

    return (
        <div className='px-16 py-32'>
            <h1 className='text-center text-[#1A1919] text-5xl font-semibold py-6 mb-16'>Applied Jobs</h1>

            <div className='flex flex-col gap-6'>
                {
                    apply2.map(job => (
                        <div className='p-7 bg-slate-100 rounded-lg flex'>
                            <img className='h-48 w-48 bg-white rounded-lg' src={job.company_logo} alt="" />
                            <div className='flex justify-around items-center'>
                                <div className='ml-8 w-[500px]'>
                                    <h2 className='text-2xl font-bold mb-2'>{job.job_title}</h2>
                                    <p className='text-xl font-semibold mb-4'>{job.company_name}</p>
                                    <div className='flex'>
                                        <button className='outline-btn'>{job.job_type}</button>
                                        <button className='outline-btn'>{job.type}</button>
                                    </div>
                                    <div className='flex mt-6'>
                                        <p className='flex items-center mr-8 font-semibold'><MapPinIcon className='h-5 w-5 mr-2'></MapPinIcon> {job.location}</p>
                                        <p className='flex items-center font-semibold'><CurrencyDollarIcon className='h-5 w-5 mr-2'></CurrencyDollarIcon> {job.salary_range}</p>
                                    </div>
                                </div>
                                <div className=''>
                                    <Link to={`/details/:${job.id}`} className='btnn'>View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Jobs;