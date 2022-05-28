import React from 'react';

const SingleReview = ({reviewInfo}) => {
     const {name,review, rating} = reviewInfo
    return (
        <div class="card w-96 bg-base-300 shadow-xl">
                            <div class="card-body">
                                <h2 class="card-title">{name}</h2>
                                <p>{review}</p>
                                <div class="card-actions justify-end">
                                <p>Ratings : {rating}/5</p>
                                </div>
                            </div>
                    </div>
    );
};

export default SingleReview;