import React from 'react';
import Review from './Review';
import people1 from '../../../assets/images/reviews/people1.png'
import people2 from '../../../assets/images/reviews/people1.png'
import people3 from '../../../assets/images/reviews/people1.png'


const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
        },
        {
            _id: 2,
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
        },
        {
            _id: 3,
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
        },
    ]


    return (
        <section className='my-16'>
            <div className='text-center mb-16'>
                <p className="text-2xl font-bold text-orange-600">Reviews</p>
                <h2 className='text-5xl font-bold'>Our Client Say</h2>
            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;