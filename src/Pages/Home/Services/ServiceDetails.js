import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../../Hooks/Hooks';
import ReviewDisplay from './ReviewDisplay';

const ServiceDetails = () => {
    useTitle('Service Details')
    const { _id, title, img, price, description } = useLoaderData()
    const { user } = useContext(AuthContext)

    const handleReview = event => {
        event.preventDefault()
        const form = event.target;
        const name = `${form.name.value}`;
        const email = user?.email || 'unregisterd';
        const message = form.message.value;

        const review = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            message
        }

        fetch('https://infinite-snaps-server.vercel.app/userReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Added Review successfully')
                    form.reset()
                }
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='mb-8'>
            <div className="card card-compact w-9/12 mx-auto bg-base-100 shadow-xl pb-8">

                <PhotoProvider>
                    <PhotoView src={img}>
                        <figure><img className='rounded-md' src={img} alt="" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-lg'>   {description} </p>
                    <br />
                    <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <Link to='/'>
                            <button className="btn btn-primary btn-md text-black-600 font-medium">Home</button>
                        </Link>
                    </div>
                </div>
            </div>

            <ReviewDisplay></ReviewDisplay>

            {
                user ?
                    <div div className="w-9/12 mx-auto mt-28 text-center">
                        <h2 className="text-3xl mb-8 font-semibold">Give Review For: {title}</h2>
                        <form onSubmit={handleReview}>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                <input name='name' type="text" placeholder="Name" className="input input-bordered input-ghost mb-4 w-full" required />
                                <input name='email' type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost input-bordered w-full" readOnly />
                            </div>
                            <textarea name='message' className="textarea textarea-bordered h-24 mb-4 w-full" placeholder="Your message" required></textarea>
                            <input name='' className='btn btn-outline btn-info' type="submit" value="Add Review" />
                        </form>
                    </div>
                    :
                    <div className='text-center text-2xl mt-8'>
                        Please <Link to='/login'>
                            <button className='btn btn-info btn-sm mr-2 btn-outline'>login</button>
                        </Link>
                        to add review.
                    </div>
            }
        </div >
    );
};

export default ServiceDetails;