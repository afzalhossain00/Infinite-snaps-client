import React from 'react';

const ReviewDetails = ({ review }) => {
    const { serviceName, message } = review;

    return (
        <div>
            <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{message}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary btn-sm">Edit</button>
                        <button className="btn btn-warning btn-sm">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;