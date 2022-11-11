import React from 'react';

const Notfound = () => {
    return (
        <div className='flex items-center justify-center min-h-screen flex-col'>
            <p className='text-3xl font-bold'>Sorry !!</p>
            <h2 className='text-xl font-bold'>Content You are searching for is not found!!!</h2>
        </div>
    );
};

export default Notfound;