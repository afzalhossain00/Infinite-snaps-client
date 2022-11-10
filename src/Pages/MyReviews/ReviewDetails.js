import React from 'react';

const ReviewDetails = ({ review, handleDelete, handleReviewUpdate }) => {
    const { serviceName, message, _id } = review;

    return (
        <div>
            <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-semibold">{serviceName}</h2>
                    <p className='text-lg'>{message}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleReviewUpdate(_id)} className="btn btn-primary btn-sm">Edit</button>
                        <button onClick={() => handleDelete(_id)} className="btn btn-warning btn-sm">Delete</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ReviewDetails;