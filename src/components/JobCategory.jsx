import React, { useEffect, useState } from 'react';
import Categroy from './categroy';

const JobCategory = () => {
    const [jobs, setJob] = useState([]);
    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])
    // console.log(jobs)

    return (
        <div className='mt-32'>
            { /* //category section  */}
            <div>
                <h1 className='text-center text-[#1A1919] text-5xl font-semibold py-6'>Job Category List</h1>
                <p className='text-center mb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:justify-between gap-6 mb-16'>
                    {
                        jobs.map(job => <Categroy key={job.id} job={job}></Categroy>)
                    }
                </div>
            </div>

            
            
        </div>
    );
};

export default JobCategory;