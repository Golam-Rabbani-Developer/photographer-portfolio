import React from 'react';

const questionData = [
    { id: 1, name: 'How Node Handle multiple request', ans: 'NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.' },
    { id: 2, name: 'How jwt works ?', ans: 'JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesnt have to completely rely on a datastore(database) to save session information.' },
    { id: 3, name: 'What is Higher Order Components ?', ans: "Higher-order components (HOCs) in React were inspired by higher-order functions in JavaScript. A HOC is an advanced technique for reusing logic in React components. It is a pattern created out of React’s compositional nature. HOCs basically incorporate the don’t-repeat-yourself (DRY) principle of programming, which you’ve most likely come across at some point in your career as a software developer. It is one of the best-known principles of software development, and observing it is very important when building an application or writing code in general." }
]

const Questions = () => {
    return (
        <div className='mx-auto w-[94%] md:w-[85%] pt-20'>
            {
                questionData.map((question, index) =>
                    <div>
                        <p className='font-bold text-xl'>{index + 1}. {question.name}</p>
                        <p className='text-lg mt-5'>--- {question.ans}</p>
                    </div>
                )
            }
        </div>
    );
};

export default Questions;