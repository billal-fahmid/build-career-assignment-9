import React from 'react';

const Categroy = ({job}) => {
    return (
        <div className='h-[240px]  bg-violet-100 p-8 rounded-lg'>
            <img className='h-16 bg-violet-200 p-4' src={job.logo} alt="" />
            <h2 className='text-xl text-gray-800 font-semibold pt-8'>{job.jobSector}</h2>
            <p className='pt-2 text-gray-800'>{job.availableJobs}</p>
        </div>
    );
};

export default Categroy;