import React from 'react';
import CountUp from 'react-countup';
import { AiFillCustomerService } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { FcCustomerSupport, FcPlanner } from "react-icons/fc";
import './BussinessSummery.css';

const BussinessSummery = () => {
    return (
        <div className='p-12'>
            <h1 className='text-center text-6xl font-bold '>We have</h1>
            <div class="divider"></div> 
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>

                <div data-aos="flip-left" data-aos-duration="1500" className='summery-box flex flex-col justify-center items-center'>
                        <FcCustomerSupport size={100}></FcCustomerSupport>
                        <div>
                        <CountUp className='text-6xl'start={400} end={500} /><span className='text-5xl'>+</span>
                        </div>
                        <h1 className='text-5xl'>Customers</h1>
                    </div>
                    
                <div data-aos="flip-left" data-aos-duration="1500" className='summery-box flex flex-col  items-center'>
                    <FcPlanner size={100}></FcPlanner>
                    <div>
                    <CountUp className='text-6xl' end={120} /><span className='text-5xl'>M+</span>
                    </div>
                    <h1 className='text-5xl ml-12'>Annual Reveneu</h1>
                </div>

                <div data-aos="flip-left" data-aos-duration="1500" className='summery-box flex flex-col  items-center'>
                    <AiFillCustomerService size={100}></AiFillCustomerService>
                    <div>
                    <CountUp className='text-6xl' end={33} /><span className='text-5xl'>K+</span>
                    </div>
                <h1 className='text-5xl'>Reviews</h1>
                </div>
                
                <div data-aos="flip-left" data-aos-duration="1500" className='summery-box flex flex-col  items-center'>
                    <BsTools size={100}></BsTools>
                    <div>
                    <CountUp className='text-6xl' end={50} /><span className='text-5xl'>+</span>
                    </div>
                    <h1 className='text-5xl'>Tools</h1>
                </div>
        </div>
        </div>
    );
};

export default BussinessSummery;