import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/Hooks';

const AddService = () => {
    useTitle('Add Service')

    const { user } = useContext(AuthContext);
    useTitle('Add-Service')

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.image.value
        const email = user?.email || 'unregistered';
        const price = form.price.value;
        const description = form.details.value;

        const review = {
            email,
            title,
            img,
            price,
            description,
        }
        fetch(' https://infinite-snaps-server.vercel.app/all-services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Your Review is Submitted');
                    form.reset();
                }
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <h2 className='text-3xl text-center font-semibold mb-14'>Add Custom Service</h2>
            <div className=' w-10/12 mx-auto'>
                <form onSubmit={handleReview} className='py-5'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-5'>
                        <input name='title' type="text" placeholder="Photography name" className="input input-bordered w-full" required />
                        <input name='image' type="text" placeholder="Image URL" className="input input-bordered w-full" required />
                        <input name='price' type="number" placeholder="Price" className="input input-bordered w-full" />
                        <input name='email' type="text" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                    </div>
                    <div className='p-5'>
                        <textarea name='details' className="textarea textarea-bordered h-24 w-full" placeholder="Please text details of the service" requ></textarea>
                        <div className='flex justify-center'>
                            <input className='btn btn-outline btn-info mt-2 btn-sm' type="submit" name="" id="" value='Review Submit' />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddService;