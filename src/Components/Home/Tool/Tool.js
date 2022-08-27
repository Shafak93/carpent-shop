import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {_id, name, img, description, minOrder, availableProduct, price } = tool
    const navigate = useNavigate();
    const navigateToPurchase = _id =>{
        navigate(`/product/${_id}`)
    }

    return (
        <div>
            <div>
                <div class="bg-white shadow-xl shadow-gray-400 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 ">
                    <figure className='overflow-hidden'>
                            <img class="hover:transform hover:scale-110 hover:transition hover:duration-500 duration-500 rounded mx-auto w-full max-h-64" src={img} alt="product image" />
                        </figure>
                    <div class="px-5 pb-5">
                        <a href="#">
                            <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">{name}</h3>
                        </a>
                        <p className='mb-5 text-white h-14'>{description}</p>
                        <p className='text-white'>Min-Order: {minOrder}</p>
                        <p className='text-white'>Available Product: {availableProduct}</p>
                        <div class="flex items-center justify-between mt-5">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white">${ price}</span>
                            <button onClick={() => navigateToPurchase(_id)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Purchase Now</button>
                        </div>
                    </div>
                </div>


                {/* <p class="mt-5">This card component is part of a larger, open-source library of Tailwind CSS components. Learn
                    more
                    by going to the official <a class="text-blue-600 hover:underline"
                        href="#" target="_blank">Flowbite Documentation</a>.
                </p> */}
            </div>
            {/* <div className="card gap-4 w-96 bg-base-300 shadow-2xl">
                <figure><img style={{ width: '228px', height: '228px' }} src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-xl text-center">{name}</h2>
                    <p className='justify-start'>{description}</p>
                    <p >Min-Orde: {minOrder}</p>
                    <p>Available Product: {availableProduct}</p>
                    <div className="card-actions justify-center">
                    <button onClick={()=>navigateToPurchase(_id)} className="btn btn-primary">Purchase Now</button>   
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Tool;