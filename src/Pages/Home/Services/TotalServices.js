import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const ServiceDetails = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-3 mb-6'>
            {
                services.map(service => <ServiceCard
                    key={service.service_id}
                    service={service}
                ></ServiceCard>)
            }
        </div>
    );
};

export default ServiceDetails;