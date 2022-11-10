import React, { useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import ReviewDetails from './ReviewDetails';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`https://infinite-snaps-server.vercel.app/userReview?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete this review.')
        if (proceed) {
            fetch(`https://infinite-snaps-server.vercel.app/userReview/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Deleted successfully')
                        const remaining = reviews.filter(rev => rev._id !== id);
                        setReviews(remaining)
                    }
                })
        }
    }

    const handleReviewUpdate = id => {
        fetch(`https://infinite-snaps-server.vercel.app/userReview/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify('update')
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='text-3xl text-center font-semibold mb-14'>My Reviews</h2>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 mb-6'>

                {
                    reviews.map(review => <ReviewDetails
                        key={review._id}
                        review={review}
                        handleDelete={handleDelete}
                        handleReviewUpdate={handleReviewUpdate}
                    ></ReviewDetails>)
                }
            </div>
        </div>
    );
};

export default MyReviews;