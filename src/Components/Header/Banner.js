import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import slider4 from '../../banner/screw-slider.jpg';
import slider1 from '../../banner/slider-1.webp';
import slider2 from '../../banner/slider-2.webp';
import slider3 from '../../banner/slider-3.webp';


const Banner = () => {
    
    return (
        <div style={{ marginTop:65 }} >
            <Carousel animationHandler="fade" showArrows={true} autoPlay={true} infiniteLoop={true} interval={3000} showThumbs={false} transitionTime={2000} verticalSwipe={'natural'} dynamicHeight={true}>
                <div>
                    <img className='h-36 md:h-60 lg:h-96 ' src={slider1} />
                </div>
                <div>
                    <img className='h-36 md:h-60 lg:h-96' src={slider2} />
                    
                </div>
                <div>
                    <img className='h-36 md:h-60 lg:h-96' src= {slider3} />
                    
                </div>
                <div>
                    <img className='h-36 md:h-60 lg:h-96' src={slider4} />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;