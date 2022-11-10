import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewDetails from './ReviewDetails';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`http://localhost:5000/userReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-3xl text-center font-semibold mb-14'>My Reviews</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 mb-6'>

                {
                    reviews.map(review => <ReviewDetails
                        key={review._id}
                        review={review}
                    ></ReviewDetails>)
                }
            </div>
        </div>
    );
};

export default MyReviews;