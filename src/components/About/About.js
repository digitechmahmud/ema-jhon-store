import React from 'react';
import { useLoaderData } from 'react-router-dom';

const About = () => {
    const { count } = useLoaderData();
    return (
        <div>
            <h2>About us page:{count}</h2>
        </div>
    );
};

export default About;