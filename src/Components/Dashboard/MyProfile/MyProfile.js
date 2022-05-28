import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import ProfileInfo from './ProfileInfo';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    
    // console.log(profile);
    const email = user.email;
    const onSubmit = async data => {
       
        const userInfo = {
            email : user.email,
            phone : data.phone,
            address : data.address,
            education : data.education
        }
        fetch(`https://obscure-crag-61698.herokuapp.com/profile/${email}`,{
            method : 'PUT',
            headers : {
                    'content-type' : 'application/json'
                },
            body : JSON.stringify(userInfo)
            
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            reset();
        })
    };
   
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-12'>
            <div class="card w-96 bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
                <h2 class="card-title">Name: {user.displayName}</h2>
                <p>Email: {user.email}</p>
                  <form onSubmit={handleSubmit(onSubmit)}>
                      {/* ==============Phone Number ====================*/}
                  <div className="form-control w-full max-w-xs">
                        <input type="phone" 
                        placeholder="Your Phone Number" 
                        className="input input-primary input-bordered w-full max-w-xs" 
                        {...register("phone",{
                            required :{
                                value: true,
                                message : 'Phone number is required.'
                            }
                          })}
                        />
                        <label className="label">
                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">{errors.phone.message}</span>}
                        </label>
                    </div>
                    {/*====================== Address ================*/}
                    <div className="form-control w-full max-w-xs">
                    <textarea className="textarea h-24 textarea-primary input-bordered w-full max-w-xs"
                    placeholder="Add your address" 
                    {...register("address",{
                        required :{
                            value: true,
                            message : 'Address is required.'
                        }
                      })}
                    ></textarea>
                    </div>
                    {/*====================== Education ================*/}
                    <div className="form-control w-full max-w-xs">
                        <input type="education" 
                        placeholder="Your education" 
                        className="input input-primary input-bordered w-full max-w-xs" 
                        {...register("education",{
                            required :{
                                value: true,
                                message : 'Education is required.'
                            }
                          })}
                        />
                        <label className="label">
                        {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                        </label>
                    </div>
                    <input className="btn input-primary w-full max-w-xs" type="submit" value='Add' />
                  </form>
            </div>
            </div>

            <div class="card w-96 bg-neutral text-neutral-content">
            <ProfileInfo></ProfileInfo>
            </div>
        </div>
    );
};

export default MyProfile;