import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FeaturesContext } from '../App';

const JobDetails = () => {
    const features = useContext(FeaturesContext);
    // console.log(features)
    const id = useParams();
    // console.log(id.id)
   const details= features.find(detail => detail.id == id.id);
   console.log(details)
    return (
        <div className='px-16'>
            <h1 className='text-center text-[#1A1919] text-5xl font-semibold py-6 mb-16'>Job Details</h1>
            <div className='flex'>
                <div className="w-2/3 ">
                    <p>Job Description: <span>{details.job_description}</span></p>
                    <p>Job Responsibility: <span>{details.job_responsibility}</span></p>
                    <p>Educational Requirements:</p>
                    <span>{details.educational_requirement}</span>
                    <p>Experiences:</p>
                    <span>{details.experiences}</span>
                </div>
                <div className='w-1/3'></div>
            </div>
        </div>
    );
};

export default JobDetails;