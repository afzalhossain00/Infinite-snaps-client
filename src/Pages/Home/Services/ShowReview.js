import React from 'react';

const ShowReview = ({ review }) => {
    const { serviceName, message } = review;
    return (
        <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">
            <h2 className='text-xl font-semibold'>{serviceName}</h2>
            <h2>{message}</h2>
        </div>
    );
};

export default ShowReview;