import React from 'react';

const ShowReview = ({ review }) => {
    const { message, customer } = review;
    return (
        <div className='border rounded-lg mb-3 p-4'>
            <h2 className='text-xl'>Name: {customer}</h2>
            <h2 className='text-xl'>Review: {message}</h2>
        </div>
    );
};

export default ShowReview;