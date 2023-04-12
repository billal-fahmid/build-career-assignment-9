import React, { useEffect, useState } from 'react';
import { getShoppingCart } from './utils/fakedb';
import { Link, useLoaderData } from 'react-router-dom';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import Job from './Job';

const Jobs = () => {
    const features = useLoaderData();
    // console.log(features)
    const [app, setApp] = useState([]);

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
        setApp(arr)

    }, [])
    const handleFullTime = () => {
        const fullTime = app.filter(apply => apply.job_type == 'Full-time');
        setApply(fullTime)
    }
    const handlePartTime = () => {
        const partTime = app.filter(apply => apply.job_type == 'Part-time');
        setApply(partTime)
    }
    console.log(app)
    // console.log(apply2)

    return (
        <div className='lg:px-16 px-5 py-32'>
            <h1 className='text-center text-[#1A1919] text-5xl font-semibold py-6 mb-16'>Applied Jobs</h1>
            <div className='flex mb-5 gap-5 items-center text-right'>
                <h1 className='text-2xl font-bold'>Fitler :</h1>
                <div>
                    <button onClick={handleFullTime} className='outline-btn'>Full Time</button>
                    <button onClick={handlePartTime} className='outline-btn'>Part Time</button>
                </div>
            </div>
            <div className='flex flex-col gap-6'>
                {
                    apply2.map(job => <Job key={job.id} job={job}></Job> )
                }
            </div>
        </div>
    );
};

export default Jobs;