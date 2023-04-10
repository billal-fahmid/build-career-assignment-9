import React, { useEffect, useState } from 'react';

const JobCategory = () => {
    const [jobs , setJob] = useState([]);
    useEffect(() =>{
        fetch('jobCategory.json')
        .then(res => res.json())
        .then(data => setJob(data))
    },[])
    console.log(jobs)

    return (
        <div className='mt-32'>
            <h1 className='text-center text-[#1A1919] text-5xl font-semibold py-6'>Job Category List</h1>
            <p className='text-center mb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 justify-between gap-6 mb-16'>
                {
                    jobs.map(job => (
                        <div className='h-[240px]  bg-violet-100 p-8 rounded-lg'>
                            <img className='h-16 bg-violet-200 p-4'  src={job.logo} alt="" />
                            <h2 className='text-xl text-gray-800 font-semibold pt-8'>{job.jobSector}</h2>
                            <p className='pt-2 text-gray-800'>{job.availableJobs}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default JobCategory;