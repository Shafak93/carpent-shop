import React from 'react';
import { toast } from 'react-toastify';

const User = ({user,index, refetch}) => {
    const {email, roll} = user

    const makeAdmin = () =>{
        fetch(`https://obscure-crag-61698.herokuapp.com/user/admin/${email}`,{
            method : 'PUT',
            headers : {
                    authorization : `Bearer ${localStorage.getItem('accessToken')}`
                   
                }
            
        })
        .then(res => {
            console.log(res);
            if(res.status === 403){
                toast.error('Sorry!! You have no authorize to make an admin')
            }
            return res.json()
        })
        .then(data =>{
            if(data.modifiedCount > 0){
                refetch();
                toast.success('You have successfully made admin!!!')
        }
        })
    }
    return (
        
            <tr>
                <th>{index+1}</th>
                <td>{email}</td>
                <td>{roll !== 'admin' && <button onClick={makeAdmin} class="btn btn-outline btn-primary">Make Admin</button>}</td>
                <td><button class="btn btn-outline btn-primary">Remove User</button></td>
            </tr>
        
    );
};

export default User;