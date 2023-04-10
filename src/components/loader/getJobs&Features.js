export const getJobsAndFeature = async() =>{
    const jobsFeatures = await fetch ('jobsData.json')
    const features = await jobsFeatures.json();
    return features
}