import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';

const Purchase = () => {
    const [user] = useAuthState(auth)
    const {productId} = useParams()
    const [product, setProduct] = useState({});
    const {_id, name, img, description,minOrder,availableProduct,price} = product;
    

    useEffect(()=>{
        const url = `http://localhost:5000/product/${productId}`
        fetch(url)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])

    const handlePurchase = (event) =>{
        event.preventDefault();
        const order = event.target.order.value;
        const newQuantity = availableProduct - order;
        const updateProduct = {...product, availableProduct:newQuantity}
        setProduct(updateProduct)

    }
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 p-12'>
            <div>
                <img className='w-40 pb-3 rounded' src={img} alt="" />
                <h1 className='text-xl'>Product Name: {name}</h1>
                <p>Description: {description}</p>
                <p>Mimimum-Order :{minOrder}</p>
                <p>Availbale Prodcut{availableProduct}</p>
                <p>Price: {price}</p>
                <div >
                    <form className='grid grid-cols-1 gap-2' onSubmit={handlePurchase}>
                        <label>Order</label>
                        <input type="number" name='order' class="input input-bordered input-primary w-32 max-w-xs" />
                        <button class="btn btn-outline btn-primary w-32">Purchase</button>
                    </form>
                </div>
            </div>
            <div className='grid grid-cols-1'>
            <h1 className='text-xl'>Provide your information to receive the product</h1>
                <input type="text" placeholder={user ? user.displayName : 'Enter your name'} readOnly class="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder={user ? user.email : 'Enter your email'} readOnly class="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder={product.name} readOnly class="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Address" class="input input-bordered input-primary w-full max-w-xs" />
            </div>
        </div>
    );
};

export default Purchase;