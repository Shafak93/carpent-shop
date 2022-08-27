import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import banner1 from '../../banner/banner-1.png';
import banner2 from '../../banner/banner-2.png';
import banner3 from '../../banner/banner-3.png';

const Banner = () => {
    return (
        <div className='mt-16'>
            
            {/* <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full" /> / 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full" /> / 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full" /> / 
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                </div> */}

                <Carousel animationHandler="fade" autoPlay={true}>
                <div>
                    <img src={banner1} />
                    
                </div>
                <div>
                    <img src={banner2} />
                    
                </div>
                <div>
                    <img src={banner3} />
                    
                </div>
            </Carousel>

        </div>
    );
};

export default Banner;