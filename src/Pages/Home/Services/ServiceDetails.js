import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const { title, img, price, description } = useLoaderData()
    return (
        <div>
            <div className="card card-compact w-9/12 mx-auto bg-base-100 shadow-xl">

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
                            <button className="btn btn-primary btn-sm text-black-600 font-medium">Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;