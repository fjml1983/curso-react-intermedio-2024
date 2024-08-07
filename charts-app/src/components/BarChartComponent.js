import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../App.css';

const BarChartComponent = ({data}) => {
    return (
        <ResponsiveContainer className="ResponsiveChartContainer">
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#8884d8" />
                <Bar dataKey="pv" fill="red" />
                <Bar dataKey="amt" fill="green" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;