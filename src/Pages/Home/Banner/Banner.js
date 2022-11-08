import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-5xl font-bold">Infinite Snaps</h1>
                    <p className="mb-5 text-lg">Internationally publidhed Photographer who brings exceptional knowledge and enthusiasm to every photo shoot. Committed to delivering promised results.</p>
                    <button className="btn btn-primary btn-sm">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;