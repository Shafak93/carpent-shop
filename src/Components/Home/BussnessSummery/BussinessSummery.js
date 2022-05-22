import React from 'react';
import CountUp from 'react-countup';

const BussinessSummery = () => {
    return (
        <div className='p-12'>
            <h1 className='text-center text-6xl font-bold '>We have</h1>
            <div class="divider"></div> 
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>

                    <div>
                    <CountUp className='text-6xl'start={400} end={500} /><span className='text-5xl'>+</span>
                    <h1 className='text-5xl'>Customers</h1>
                    </div>
                    
                <div>
                <CountUp className='text-6xl' end={120} /><span className='text-5xl'>M+</span>
                <h1 className='text-5xl'>Annual Reveneu</h1>
                </div>

                <div>
                <CountUp className='text-6xl' end={33} /><span className='text-5xl'>K+</span>
                <h1 className='text-5xl'>Reviews</h1>
                </div>
                
                <div>
                <CountUp className='text-6xl' end={50} /><span className='text-5xl'>+</span>
                <h1 className='text-5xl'>Tools</h1>
                </div>
        </div>
        </div>
    );
};

export default BussinessSummery;