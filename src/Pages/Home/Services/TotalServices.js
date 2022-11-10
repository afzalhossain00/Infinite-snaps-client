import { useLoaderData } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const TotalServices = () => {
    const services = useLoaderData()
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

export default TotalServices;