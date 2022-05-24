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
        const orderQuantity = event.target.order.value;
        if(orderQuantity >10 && orderQuantity < availableProduct){
            const purchasing ={
                purchaseId : _id,
                userName : user.displayName,
                userEmail : user.email,
                phone : event.target.phone.value,
                address : event.target.address.value,
                orderQuantity : event.target.order.value,
                name
            }
            fetch(`http://localhost:5000/purchasing`,{
                method: 'POST',
                headers :{
                    'content-type' : 'application/json'
                },
                body : JSON.stringify(purchasing)
            })
            .then(res => res.json())
            .then(data =>{
                console.log('success', data)
                alert('Order succesfully placed')
                event.target.reset()
            })
        }else if(orderQuantity> availableProduct){
            alert(`You can't order more than availble product`)
           
        }else{
            alert('You have to order minimum 10 products')
        }
        


        // const order = event.target.order.value;
        // const newQuantity = availableProduct - order;
        // const updateProduct = {...product, availableProduct:newQuantity}
        // setProduct(updateProduct)
        // //Send data to the server
        // const url = `http://localhost:5000/product/${productId}`
        // fetch(url,{
        //     method: 'PUT',
        //     headers: {
        //         'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(updateProduct)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log('success', data)
        //     alert('product updated')
        //     event.target.reset()
        // })
    }
    return (
        <div className='grid  sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-12'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Mimimum-Order :{minOrder}</p>
                    <p>Availbale Prodcut{availableProduct}</p>
                    <p>Price: {price}</p>
                    <div >
                    {/* <form className='grid grid-cols-1 gap-2' onSubmit={handlePurchase}>
                        <label>Add your quantity</label>
                        <input type="number" name='order' class="input input-bordered input-primary w-32 max-w-xs" />
                        <button class="btn btn-outline btn-primary w-32">Purchase</button>
                    </form> */}
                </div>
                </div>
            </div>
            <div className='grid grid-cols-1'>
            <div class="card card-compact w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title">Provide your information to receive the product</h2>
                    <form onSubmit={handlePurchase}>
                    <input type="text" placeholder={user ? user.displayName : 'Enter your name'} readOnly class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder={user ? user.email : 'Enter your email'} readOnly class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder={product.name} readOnly class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" name='phone' placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" name='address' placeholder="Address" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="number" placeholder='Add your quantity' name='order' class="input input-bordered input-primary w-full max-w-xs" />
                    <button class="btn btn-outline btn-primary w-32">Purchase</button>
                    </form>
                </div>
            </div>
            {/* <h1 className='text-xl'>Provide your information to receive the product</h1>
                <input type="text" placeholder={user ? user.displayName : 'Enter your name'} readOnly class="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder={user ? user.email : 'Enter your email'} readOnly class="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder={product.name} readOnly class="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Phone Number" class="input input-bordered input-primary w-full max-w-xs" />
                <input type="text" placeholder="Address" class="input input-bordered input-primary w-full max-w-xs" /> */}
            </div>
        </div>
    );
};

export default Purchase;