import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className='contact flex items-center justify-center flex-col space-y-6'>
            <h2 className='text-3xl z-50 font-bold text-gray-100'>Contact</h2>
            <div className="btn btn-outline min-w-[200px] z-50 border-white hover:bg-white hover:text-slate-900 rounded-none btn-lg capitalize text-white font-bold text-xl">Contact Now</div>
        </div>
    );
};

export default Contact;