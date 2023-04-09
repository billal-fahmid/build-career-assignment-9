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
            <h1 className='text-center text-[#1A1919] text-5xl font-semibold py-4'>Job Category List</h1>
            <p className='text-center mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div>
                {
                    jobs.map(job => (
                        <div>
                            <img src={job.logo} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default JobCategory;