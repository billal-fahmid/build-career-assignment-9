import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import Statistics from './components/Statistics';
import Jobs from './components/Jobs';
import Blog from './components/Blog';
import { getJobsAndFeature } from './components/loader/getJobs&Features';
import JobDetails from './components/JobDetails';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    loader:getJobsAndFeature,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'jobs',
        element:<Jobs></Jobs>
      },
      {
        path:'details/:id',
        element:<JobDetails></JobDetails>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
