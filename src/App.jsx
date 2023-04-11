import React, { createContext } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

export const FeaturesContext = createContext([]);

const App = () => {
  const features = useLoaderData()
  // console.log(features)

  return (

    <FeaturesContext.Provider value={features}>
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer></ToastContainer>
    </FeaturesContext.Provider>

  );
};

export default App;