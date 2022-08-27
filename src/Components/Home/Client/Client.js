import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import client1 from '../../../banner/client/client-1.avif';
import client2 from '../../../banner/client/client-2.webp';
import client3 from '../../../banner/client/client-3.avif';
import client4 from '../../../banner/client/client-4.webp';
import client5 from '../../../banner/client/client-5.avif';
import client6 from '../../../banner/client/client-6.avif';

const Client = () => {
    return (
        <div>
            <h1 className='text-5xl text-center mb-10 font-bold'>Our Happy Clients</h1>
            <Carousel centerMode showArrows={false} showStatus={false} centerSlidePercentage='20' autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <img src={client1} alt="" />
                <img src={client2} alt="" />
                <img src={client3} alt="" />
                <img src={client4} alt="" />
                <img src={client5} alt="" />
                <img src={client6} alt="" />
            </Carousel>
            
        </div>
    );
};

export default Client;