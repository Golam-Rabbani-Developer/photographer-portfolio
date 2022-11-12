import React from 'react';

const questionData = [
    {id:1, name:'How Node Handle multiple request', ans:'NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.'}
]

const Questions = () => {
    return (
        <div>
            
        </div>
    );
};

export default Questions;