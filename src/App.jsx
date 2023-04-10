import React, { createContext } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';

export const FeaturesContext = createContext([]);

const App = () => {
  const features = useLoaderData()
  // console.log(features)

  return (

    <FeaturesContext.Provider value={features}>
      <Header></Header>
      <Outlet></Outlet>
    </FeaturesContext.Provider>

  );
};

export default App;