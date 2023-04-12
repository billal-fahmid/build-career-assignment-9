import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FeaturesContext } from '../App';
import { CurrencyDollarIcon,MapPinIcon,PhoneIcon,AtSymbolIcon} from '@heroicons/react/24/solid'
import { addToDb } from './utils/fakedb';


const JobDetails = () => {
    const featuresData = useContext(FeaturesContext);
    const [features,setFeatures] = useState(featuresData)
    // console.log(features)
    const id = useParams();
    // console.log(id.id)
   const details= features.find(detail => detail.id == id.id);
   console.log(details)

   const handleApplyJob =id=>{
    addToDb(id)
   }

    return (
        <div className='md:px-16 py-32'>
            <h1 className='text-center text-[#1A1919] text-5xl font-semibold py-6 mb-16'>Job Details</h1>
            <div className='flex justify-center flex-col md:flex-row mt-12'>
                <div className="lg:w-2/3 px-5">
                    <p className='mb-6'><span className='font-bold'>Job Description:</span> {details.job_description}</p>
                    <p className='mb-6'> <span className='font-bold'>Job Responsibility:</span>{details.job_responsibility}</p>
                    <p className='font-bold'>Educational Requirements:</p>
                    <span className='mb-6'>{details.educational_requirement}</span>
                    <p className='font-bold mt-6'>Experiences:</p>
                    <span>{details.experiences}</span>
                </div>
                <div className='lg:w-1/3 px-5 '>
                    <div className='bg-blue-50 p-8 rounded-lg'>
                        <h3 className='text-xl font-bold text-gray-900 border-gray-400 border-b-2 pb-6'>Job Details</h3>
                        <hr />
                        <div>
                        <p className='text-xl mt-6 mb-4 flex items-center'> <CurrencyDollarIcon className='h-6 w-6 mr-2'></CurrencyDollarIcon> <span className='font-semibold'>Salary :</span>  {details.salary_range}</p>
                        </div>

                        <p className='text-xl mb-6 flex '>  <span className='font-semibold'>Job Title </span >{details.job_title}</p>

                        <h3 className='text-xl font-semibold text-gray-900 border-gray-400 border-b-2 pb-6 mb-6'>Contact Information</h3>
                        <p className='text-xl mb-6 flex items-center '><PhoneIcon className='mr-2 h-6 w-6'></PhoneIcon> <span className='font-semibold'>Phone :</span> {details.phone}</p>
                        <p className='text-xl mb-6 flex items-center'><AtSymbolIcon className='h-6 w-6 mr-2'></AtSymbolIcon> <span className='font-semibold'>Email:</span >{details.email}</p>
                        <p className='text-xl mb-6 flex items-center'><MapPinIcon className='h-6 w-6 mr-2'></MapPinIcon> <span className='font-semibold'>Address :</span> {details.location}</p>
                        
                    </div>
                     <button className='btnn w-full mt-4' onClick={() =>handleApplyJob(details.id)}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;