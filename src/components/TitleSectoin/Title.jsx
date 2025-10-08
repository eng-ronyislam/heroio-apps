import React from 'react';

const Title = ({ title, subtitle }) => {
    return (
        <div className="py-10">
            <h1 className="text-4xl font-bold text-center">{title}</h1>
            <h2 className="text-2xl font-medium text-center text-gray-500">{subtitle}</h2>
        </div>
    );
};

export default Title;