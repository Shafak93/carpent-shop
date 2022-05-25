import React from 'react';
import { useQuery } from 'react-query';

const AllUsers = () => {
    const {data : users, isLoading} = useQuery('users', ()=>fetch('http://localhost:5000/user').then(res => res.json()))
    console.log(users);
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
                       users.map((user, index) =>
                        <tr>
                        <th>{index+1}</th>
                        <td>{user.email}</td>
                        <td><button class="btn btn-outline btn-primary">Make Admin</button></td>
                        <td><button class="btn btn-outline btn-primary">Remove User</button></td>
                    </tr>
                        )
                   }
                    </tbody>
                </table>
                </div>
        </div>
    );
};

export default AllUsers;