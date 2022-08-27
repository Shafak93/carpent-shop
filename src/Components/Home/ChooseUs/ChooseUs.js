import React from 'react';
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { MdHighQuality } from "react-icons/md";
import { SiConsul } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import './ChooseUs.css'

const ChooseUs = () => {
    return (
        <div className='p-12'>
            <h1 className='text-5xl text-center font-bold py-10'>WHY CHOSE US</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='choose-box flex flex-col justify-center items-center'>
                    <BsFillBriefcaseFill size={70}></BsFillBriefcaseFill>
                    <h2 className='text-center text-2xl font-mono my-5'>25 YEARS OF EXPERINCE</h2>
                    <p className='font-thin font-mono'>We have 25 years of woodcraft experience right to your residential, office, restaurants hospital and etc…</p>
                </div>
                <div className='choose-box flex flex-col justify-center items-center'>
                    <MdDesignServices size={70}></MdDesignServices>
                    <h2 className='text-center text-2xl font-mono my-5'>CREATIVE DESIGNERS</h2>
                    <p className='font-thin font-mono'>Our designing team designs with your taste, space, and budget, Also our team will guide you to choose ...</p>
                </div>
                <div className='choose-box flex flex-col justify-center items-center'>
                    <MdHighQuality size={70}></MdHighQuality>
                    <h2 className='text-center text-2xl font-mono my-5'>QUALITY PRODUCTS</h2>
                    <p className='font-thin font-mono'>We provide high quality products only to our customers, our prodcuts are certified with WI organization usa.</p>
                </div>
                <div className='choose-box flex flex-col justify-center items-center'>
                    <FaAward size={70}></FaAward>
                    <h2 className='text-center text-2xl font-mono my-5'>AWARDS WINNING TEAM</h2>
                    <p className='font-thin font-mono'>In 1984 we have won the best resedential carpenter awrard from worlds carpernter organization in usa.</p>
                </div>
                <div className='choose-box flex flex-col justify-center items-center'>
                    <SiConsul size={70}></SiConsul>
                    <h2 className='text-center text-2xl font-mono my-5'>FREE CONSULTATION</h2>
                    <p className='font-thin font-mono'>We provide free consultation about designs, quality, space, budget and etc you can get it all of them ...</p>
                </div>
                <div className='choose-box flex flex-col justify-center items-center'>
                    <BiSupport size={70}></BiSupport>
                    <h2 className='text-center text-2xl font-mono my-5'>24/7 CUSTOMER SUPPORT</h2>
                    <p className='font-thin font-mono'>Whenever & wherever you need our support you can contact ourcustomer support team by 24/7, they will guide ...</p>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;