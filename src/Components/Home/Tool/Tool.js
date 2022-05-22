import React from 'react';

const Tool = ({tool}) => {
    const {name, img, description, minOrder, availableProduct, price } = tool
    return (
        <div>
            <div class="card w-96 bg-base-300 shadow-2xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p className='justify-start'>{description}</p>
                    <p>Min-Orde: {minOrder}</p>
                    <p>Available Product: {availableProduct}</p>
                    <div class="card-actions justify-center">
                    <button class="btn btn-primary">Purchase Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;