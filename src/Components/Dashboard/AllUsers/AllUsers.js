import React from 'react';
import { useQuery } from 'react-query';
import User from './User';

const AllUsers = () => {
    const {data : users, isLoading} = useQuery('users', ()=>fetch('http://localhost:5000/user').then(res => res.json()))
    if(isLoading){
        return <p>Loading...</p>
    }
   
    return (
        <div>
            <h1>All users {users.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                        
                   {
                       users.map((user, index) =><User index={index} key={user._id} user={user}></User>)
                   }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AllUsers;