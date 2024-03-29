import React from 'react';

const WorkProcess = () => {
    return (
        <div className="hero my-20 px-6 rounded">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <ul className="steps steps-vertical font-semibold">
                    <li className="step step-primary">Prepare Gear</li>
                    <li className="step step-primary">Create a Plan</li>
                    <li className="step  step-primary">Capture Images </li>
                    <li className="step">Sort and edit Photos</li>
                    <li className="step">Deliver Final Photos</li>
                </ul>
                <div className='w-4/6 mr-4'>
                    <h1 className="my-5 text-5xl font-bold">
                        My Work <br />
                        Process</h1>
                    <p className="py-6 text-lg">Workflows are essential for any project, and the number of steps included in each depends on the complexity of the project.</p>
                    <p className="py-6 text-lg">Providing goods and services isn’t all my business does; My real mission is to satisfy and delight my clients.</p>
                    <button className="btn btn-primary btn-md">Start Project</button>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;