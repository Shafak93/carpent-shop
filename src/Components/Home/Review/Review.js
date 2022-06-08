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
        <div className='py-12'>
            <h1 className='text-center text-5xl font-bold pb-12'>Client's feedback</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
            {
                reviews.map(review =>
                    <SingleReview key={review._id} reviewInfo ={review}></SingleReview>
                    )
            }
            </div>
        </div>
    );
};

export default Reviews