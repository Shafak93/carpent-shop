import React from 'react';
import { FaBitcoin } from "react-icons/fa";

const ChooseUs = () => {
    return (
        <div className='p-12'>
            <h1 className='text-5xl text-center font-bold py-10'>WHY CHOSE US</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div>
                    
                    <h2 className='text-center text-2xl font-mono my-5'>25 YEARS OF EXPERINCE</h2>
                    <p className='font-thin font-mono'>We have 25 years of woodcraft experience right to your residential, office, restaurants hospital and etc…</p>
                </div>
                <div>
                    <h2 className='text-center text-2xl font-mono my-5'>CREATIVE DESIGNERS</h2>
                    <p className='font-thin font-mono'>Our designing team designs with your taste, space, and budget, Also our team will guide you to choose ...</p>
                </div>
                <div>
                    <h2 className='text-center text-2xl font-mono my-5'>QUALITY PRODUCTS</h2>
                    <p className='font-thin font-mono'>We provide high quality products only to our customers, our prodcuts are certified with WI organization usa.</p>
                </div>
                <div>
                    <h2 className='text-center text-2xl font-mono my-5'>AWARDS WINNING TEAM</h2>
                    <p className='font-thin font-mono'>In 1984 we have won the best resedential carpenter awrard from worlds carpernter organization in usa.</p>
                </div>
                <div>
                    <h2 className='text-center text-2xl font-mono my-5'>FREE CONSULTATION</h2>
                    <p className='font-thin font-mono'>We provide free consultation about designs, quality, space, budget and etc you can get it all of them ...</p>
                </div>
                <div>
                    <h2 className='text-center text-2xl font-mono my-5'>24/7 CUSTOMER SUPPORT</h2>
                    <p className='font-thin font-mono'>Whenever & wherever you need our support you can contact ourcustomer support team by 24/7, they will guide ...</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;