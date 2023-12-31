import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="navbar bg-gray px-16 py-4 flex flex-col md:flex-row ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-base gap-6 font-semibold ">
                        <Link to='/'>Home</Link>
                        <Link to='/statistics'>Statistics</Link>
                        <Link to='/jobs'>Applied Jobs</Link>
                        <Link to='/blog'>Blog</Link>
                        </ul>
                    </div>
                    <a className="normal-case text-xl font-bold">Workwise</a>
                </div>
                <div className="navbar-center hidden lg:flex ">

                    <div className='flex text-base gap-6 font-semibold '>
                        <Link to='/'>Home</Link>
                        <Link to='/statistics'>Statistics</Link>
                        <Link to='/jobs'>Applied Jobs</Link>
                        <Link to='/blog'>Blog</Link>
                    </div>

                </div>
                <div className="navbar-end">
                    <Link to='/' className='btnn '>Star Applying</Link>
                </div>
            </div>
        </>
    );
};

export default Header;