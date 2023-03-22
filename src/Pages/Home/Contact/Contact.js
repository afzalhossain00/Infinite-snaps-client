import React from 'react';

const Contact = () => {
    return (
        <div style={{ background: `url(${'https://images.unsplash.com/photo-1521193089946-7aa29d1fe776?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'})` }} className='text-center px-5 py-10 mt-10'>
            <div className='text-center mb-16'>
                <p className="text-2xl font-bold text-orange-600">Contact Us</p>
                <h2 className='text-5xl font-bold'>Stay connected with us</h2>
            </div>
            <form className='lg:w-2/3 mx-auto mt-6'>
                <input name='name' type="text" placeholder="Your name" className="input mb-5 input-bordered w-full" required />
                <input name='email' type="email" placeholder="Email Address" className="input mb-5 input-bordered w-full" required />
                <textarea name='message' className="textarea h-32 textarea-bordered w-full" placeholder="Your message" required></textarea>
                <input className='mt-8 btn btn-primary  border-none text-white' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Contact;