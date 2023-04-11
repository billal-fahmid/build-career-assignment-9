import React, { useEffect, useState } from 'react';
import { getShoppingCart } from './utils/fakedb';
import { useLoaderData } from 'react-router-dom';

const Jobs = () => {
    const features = useLoaderData();
    console.log(features)

    const [apply2 , setApply] = useState([]);
    
    useEffect(() => {
        let arr =[]
        const applyJobs = getShoppingCart()
        console.log(applyJobs)
        for(const job in applyJobs){
          const apply=  features.find(feature => feature.id == job);
            if(apply)(
                arr.push(apply)
            )
        }
        // console.log(arr)
        setApply(arr)

    }, [])

    console.log(apply2)

    return (
        <div>
            <h2>all Jobs here</h2>
        </div>
    );
};

export default Jobs;