import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FeaturesContext } from '../App';

const JobDetails = () => {
    const features = useContext(FeaturesContext);
    // console.log(features)
    const id = useParams();
    // console.log(id.id)
   const details= features.find(detail => detail.id == id.id);
   console.log(details)
    return (
        <div className='px-16 py-32'>
            <h1 className='text-center text-[#1A1919] text-5xl font-semibold py-6 mb-16'>Job Details</h1>
            <div className='flex mt-12'>
                <div className="w-2/3">
                    <p className='mb-6'><span className='font-bold'>Job Description:</span> {details.job_description}</p>
                    <p className='mb-6'> <span className='font-bold'>Job Responsibility:</span>{details.job_responsibility}</p>
                    <p className='font-bold'>Educational Requirements:</p>
                    <span className='mb-6'>{details.educational_requirement}</span>
                    <p className='font-bold mt-6'>Experiences:</p>
                    <span>{details.experiences}</span>
                </div>
                <div className='w-1/3 '>
                    <div className='bg-blue-50 p-8'>
                        <h3 className='text-xl font-bold text-gray-900 border-gray-400 border-b-2 pb-6'>Job Details</h3>
                        <hr />
                        <p className='text-xl mt-6 mb-4'><span className='font-semibold'>Salary :</span> {details.salary_range}</p>

                        <p className='text-xl mb-6'><span className='font-semibold'>Job Title :</span > {details.job_title}</p>

                        <h3 className='text-xl font-semibold text-gray-900 border-gray-400 border-b-2 pb-6 mb-6'>Contact Information</h3>
                        <p className='text-xl mb-6'> <span className='font-semibold'>Phone :</span> {details.phone}</p>
                        <p className='text-xl mb-6'><span className='font-semibold'>Email :</span > {details.email}</p>
                        <p className='text-xl mb-6'><span className='font-semibold'>Address :</span> {details.location}</p>
                        
                    </div>
                     <button className='btnn w-full mt-4'>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;