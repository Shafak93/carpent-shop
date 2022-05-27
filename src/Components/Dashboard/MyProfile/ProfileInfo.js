import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ProfileInfo = () => {
    const [user] = useAuthState(auth)
    const [profile, setProfile] = useState({})
    const email = user.email
    useEffect(()=>{
        fetch(`http://localhost:5000/profile/${email}`)
        .then(res => res.json())
        .then(data =>setProfile(data))
    },[profile])
    return (
        
            <div class="card-body">
                <h2 class="card-title">My Profile</h2>
                <h2 className='text-xl'>Name : {user.displayName}</h2>
                <p>Email : {user.email}</p>
                <p>Phone: {profile.phone}</p>
                <p>Address: {profile.address}</p>
                <p>Education: {profile.education}</p>
            </div>
            
    );
};

export default ProfileInfo;