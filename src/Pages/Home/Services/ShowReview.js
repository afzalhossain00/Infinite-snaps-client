import React from 'react';

const ShowReview = ({ review }) => {
    const { serviceName, message } = review;
    return (
        <div className='border rounded-lg mb-3 text-center'>
            <h2 className='text-xl font-semibold'>{serviceName}</h2>
            <h2>{message}</h2>
        </div>
    );
};

export default ShowReview;