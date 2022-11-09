import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='px-6'>
            <div className='text-center mb-16'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className='text-5xl font-bold'>My Service Area</h2>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 mb-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='flex justify-center mt-16 mb-36'>
                <button className="btn btn-outline btn-primary">See All</button>
            </div>
        </div>
    );
};

export default Services;