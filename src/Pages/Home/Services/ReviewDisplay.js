import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ShowReview from './ShowReview';

const ReviewDisplay = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://infinite-snaps-server.vercel.app/userReview')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 mb-6'>
            {
                reviews.map(review => <ShowReview
                    key={review._id}
                    review={review}
                ></ShowReview>)
            }
        </div>
    );
};

export default ReviewDisplay;