import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyProducts = () => {
    const [products, setProducts] = useState([])
    
    const [user] = useAuthState(auth)
    const navigate = useNavigate();
    useEffect(()=>{
        if (user) {
            
            fetch(`https://obscure-crag-61698.herokuapp.com/purchasing?userEmail=${user.email}`,{
                method : 'GET',
                headers : {
                    'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
        .then(res => {
            if(res.status === 401 || res.status === 403){
                signOut(auth)
                localStorage.removeItem('accessToken');
                navigate('/')
            }
            return res.json()
        })
        .then(data => {
            setProducts(data)
        })
        }
    }, [user])
    
    return (
        <div>
            <h1>My products {products.length}</h1>
            <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Product Name</th>
                    <th>Email</th>
                    <th>Order Quantity</th>
                </tr>
                </thead>
                <tbody>
                
                    {
                        products.map(product => 
                    <tr>
                    <th>1</th>
                    <td>{product.name}</td>
                    <td>{user.email}</td>
                    <td>{product.orderQuantity}</td>
                    <td><button className='btn'>Cancel</button></td>
                    </tr>)
                    }
                    
                
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default MyProducts;