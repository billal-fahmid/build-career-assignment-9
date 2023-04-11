import React from 'react';

const Blog = () => {
    return (
        <div className='px-16 pt-20 pb-16' >
            <h1 className='text-center text-[#1A1919] text-5xl font-semibold py-6 mb-16'>Some Q/A</h1>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    When Should you use context API ?
                </div>
                <div className="collapse-content">
                    <p tabIndex={0}> Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is custom hook ?
                </div>
                <div className="collapse-content">
                    <p tabIndex={1}> Custom hooks are reusable functions that a React JS software developer can use to add special and unique functionality to the React applications. </p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is useRef() ?
                </div>
                <div className="collapse-content">
                    <p tabIndex={2}> useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current .</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is useMemo() ?
                </div>
                <div className="collapse-content">
                    <p tabIndex={3}> React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;