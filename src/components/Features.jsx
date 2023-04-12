import React, { useContext, useEffect, useState } from 'react';
import { FeaturesContext } from '../App';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import Feature from './Feature';

const Features = () => {
    const allFeatures = useContext(FeaturesContext);
    const [arr, setArr] =useState([]);
   
    // console.log(defaultShowFeatures)
    // const [features ,setFeatures] = useState()
    // setFeatures(defaultShowFeatures)
    useEffect(()=>{
        const defaultShowFeatures = allFeatures.slice(0, 4);
        setArr(defaultShowFeatures)
    },[])
    
    const handleAllFeature =()=>{
        const defaultShowFeatures = allFeatures;
        setArr(defaultShowFeatures)
    }


    return (
        <div className='mt-6 mb-20'>
            <h1 className='text-center text-[#1A1919] text-5xl font-semibold py-6'>Featured Jobs</h1>
            <p className='text-center mb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className='grid sm:grid-cols-1 gap-6 lg:grid-cols-2 md:justify-between sm:px-5'>
                {
                    arr.map(feature => <Feature key={feature.id} feature={feature}></Feature>)
                }
            </div>
           {arr.length===4? <div className='text-center mt-8'>
                <button onClick={ handleAllFeature} className='btnn text-center'>See All Jobs</button>
            </div> :''}
        </div>
    );
};

export default Features;