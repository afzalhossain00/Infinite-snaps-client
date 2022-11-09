import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({ service }) => {
    const { service_id, img, price, title, description } = service;
    return (
        <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl">

            <PhotoProvider>
                <PhotoView src={img}>
                    <figure><img src={img} alt="" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-xl text-orange-600 font-semibold'>Price: ${price}</p>
                <p className='text-lg'>
                    {description.length > 100 ?
                        <>{description.slice(0, 100) + '...'}
                        </>
                        :
                        description
                    }
                </p>
                <div className="card-actions justify-end">
                    <Link to={`/service/${service_id}`}>
                        <button className="btn btn-primary btn-sm text-black-600 font-medium">View Details <FaArrowRight></FaArrowRight></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;