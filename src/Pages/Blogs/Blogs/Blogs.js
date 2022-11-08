import React from 'react';

const Blog = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h3 className='text-xl text-center'>Question And Answer:</h3>
            <div className='border rounded my-4 p-4'>
                <h4 className='font-bold'>1. Difference between SQL and NoSQL?</h4> <br />
                <p>
                    <li> SQL databases are relational, NoSQL databases are non-relational.</li>
                    <li> SQL databases use structured query language and predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
                    <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                    <li>
                        SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
                    <li>
                        SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
                </p>
            </div>
            <div className='border rounded my-4 p-4'>
                <h4 className='font-bold'>2. What is JWT, and how does it work?</h4> <br />
                <p>JWT or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. <br /> <br />
                    Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.
                    User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                    Resource server then verifies the authenticity of the token using the secret salt or public key.
                </p>
            </div>
            <div className='border rounded my-4 p-4'>
                <h4 className='font-bold'>3. What is the difference between javascript and NodeJS?</h4> <br />
                <p>
                    <li>JavaScript is a programming language used any browser that has the JavaScript Engine installed. Node. js is an interpreter or execution environment for the JavaScript.</li><br />
                    <li>JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Node.js is a V8-based server-side javascript runtime.</li>
                </p>
            </div>
            <div className='border rounded my-4 p-4'>
                <h4 className='font-bold'>4. How does NodeJS handle multiple requests at the same time? </h4> <br />
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. <br /><br />
                    NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                </p>
            </div>
        </div>
    );
};

export default Blog;