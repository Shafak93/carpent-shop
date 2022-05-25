import React from 'react';

const User = ({user,index}) => {
    const {email} = user

    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`,{
            method : 'PUT',
            headers :{
                headers : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    }
    return (
        
            <tr>
                <th>{index+1}</th>
                <td>{email}</td>
                <td><button onClick={makeAdmin} class="btn btn-outline btn-primary">Make Admin</button></td>
                <td><button class="btn btn-outline btn-primary">Remove User</button></td>
            </tr>
        
    );
};

export default User;