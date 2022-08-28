import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch(`https://obscure-crag-61698.herokuapp.com/review`)
        .then(res => res.json())
        .then(data =>setReviews(data))
    },[])

    return (
        <div className='p-12'>
            {/* <h1 className='text-center text-5xl font-bold pb-12'>Client's feedback</h1> */}
            <h1 class="md:text-4xl text-2xl font-semibold px-4   mt-6 text-center">What our client says</h1>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  px-20 py-20 gap-6">
            {
                reviews.map(review =>
                    <SingleReview key={review._id} reviewInfo ={review}></SingleReview>
                    )
            }
            </div>
        </div>
    );
};
//className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'

export default Reviews