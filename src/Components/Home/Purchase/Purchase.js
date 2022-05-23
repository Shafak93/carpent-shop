import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {productId} = useParams()
    console.log(productId);
    const [product, setProduct] = useState({});
    // console.log(product);

    useEffect(()=>{
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-12'>
            <div>
                <img className='w-40 pb-3 rounded' src={product.img} alt="" />
                <h1 className='text-xl'>Product Name: {product.name}</h1>
                <p>Description: {product.description}</p>
                <p>Mimimum-Order :{product.minOrder}</p>
                <p>Availbale Prodcut{product.availableProduct}</p>
                <p>Price: {product.price}</p>
                <div className='grid grid-cols-1 gap-2'>
                <label>Order</label>
                <input type="number" class="input input-bordered input-primary w-32 max-w-xs" />
                <button class="btn btn-outline btn-primary w-32">Purchase</button>
                </div>
            </div>
            <div className='grid grid-cols-1'>
                <input type="text" placeholder="Your Name" class="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Address" class="input input-bordered input-primary w-full max-w-xs" />
            </div>
        </div>
    );
};

export default Purchase;