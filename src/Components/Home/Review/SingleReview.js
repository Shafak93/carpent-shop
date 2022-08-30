import React from 'react';
import profile from '../../../banner/profile.png';

const SingleReview = ({reviewInfo}) => {
     const {name,review, rating} = reviewInfo
    return (
      
        <div data-aos="zoom-in" data-aos-duration="1000">
                <div>
                <div class="group w-64 h-64  dark:bg-gray-800  relative flex flex-col items-center hover:bg-accent cursor-pointer shadow-md md:p-12 p-6">
                        <div class=" dark:text-gray-200   group-hover:text-gray-800 flex flex-col items-center">
                            <svg width="26" height="27" viewBox="0 0 26 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z" fill="currentColor" />
                                    <path d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z" fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24.5767" height="27" fill="white" transform="translate(25.2578 27) rotate(-180)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        <p class=" text-base leading-normal text-center mt-4">{review}</p>
                        </div>
                        <div class="text-white dark:text-gray-800 group-hover:text-indigo-700 absolute bottom-0 -mb-6">
                            <svg width="34" height="28" viewBox="0 0 34 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_dd)">
                                    <path d="M17 19L28.2583 3.25H5.74167L17 19Z" fill="currentColor" />
                                </g>
                                <defs>
                                    <filter id="filter0_dd" x="0.741699" y="0.25" width="32.5167" height="27.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect1_dropShadow" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="3" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                                        <feOffset dy="2" />
                                        <feGaussianBlur stdDeviation="2.5" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                                        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div class="flex flex-col items-center justify-center mt-10">
                    <img src={profile} alt="profile pictre" class="w-12 h-12" />
                    <p class="text-base font-semibold leading-4 my-2">{name}</p>
                    </div>
                </div>

            </div>


        // <div class="card sm:w-48 md:w-56 lg:w-96 bg-base-300 px-12">
        //                     <div class="card-body">
        //                         <h2 class="card-title">{name}</h2>
        //                         <p>{review}</p>
        //                         <div class="card-actions justify-end">
        //                         <p>Ratings : {rating}/5</p>
        //                         </div>
        //                     </div>
        //             </div>
    );
};

export default SingleReview;