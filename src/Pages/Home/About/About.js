import React from 'react';
import model from '../../../assets/images/Model.jpg';

const About = () => {
    return (
        <div className="hero my-20 px-6">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='relative w-1/2'>
                    <img alt='' src={model} className="h-full rounded-lg shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <p className="text-xl text-orange-600 font-bold">About Me</p>
                    <h1 className="my-5 text-5xl font-bold">
                        Experience <br />
                        in this field</h1>
                    <p className="py-6 text-lg">Certified Professional Photographer with 5+ years of experience. Skilled in portrait photography, landscape, wedding photography and many more.</p>
                    <p className="py-6 text-lg">Admin at Infinite snaps. Finalist, Sony World Photography Competition 2021.</p>
                    <button className="btn btn-primary btn-sm">More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;