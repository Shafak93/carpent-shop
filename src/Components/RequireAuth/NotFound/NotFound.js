import React from 'react';
import notfound from '../../../banner/notfound.png'

const NotFound = () => {
    return (
        <div className='flex flex-col'>
            <h1 className='text-5xl font-bold text-center'>404 Not Found</h1>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;