import React from 'react';
// import React, { PureComponent } from 'react';
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
    const data = [
        {
            id: 1,
            marks: 60,
            assignment: 'Build your new year new mission website',
        },
        {
            id: 2,
            marks: 59,
            assignment: 'Create a responsive G3-Architects website',
        },
        {
            id: 3,
            marks: 60,
            assignment: 'CSS Framework Ed Tech landing page assignment',
        },
        {
            id: 4,
            marks: 60,
            assignment: 'Basic Javascript Problem Solving assignment',
        },
        {
            id: 5,
            marks: 59,
            assignment: 'Geometry Genius Assignment requirements and private repo',
        },
        {
            id: 6,
            marks: 60,
            assignment: 'AI Universe API and ES6 related Assignment',
        },
        {
            id: 7,
            marks: 60,
            assignment: ' Make Quiz Hero a great quiz website',
        },
    ];
    return (
        <div className='px-6 py-16 '>
            <h1 className='text-center text-[#1A1919] text-5xl font-semibold py-6 mb-16'>Assignment Marks</h1>
            <div className='mx-auto'>
                <ComposedChart
                    width={800}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area dataKey="marks"></Area>
                    <XAxis dataKey="id" ></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis dataKey=""></YAxis>
                    <Scatter dataKey="assignment"></Scatter>
                </ComposedChart>
            </div>
        </div>
    );
};

export default Statistics;