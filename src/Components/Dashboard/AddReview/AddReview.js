import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const onSubmit = async data => {
        const email = user.email
        const reviewInfo = {
            name : user.displayName,
            review : data.review,
            rating : data.rating
        }
        console.log(reviewInfo);
        fetch(`https://obscure-crag-61698.herokuapp.com/review`,{
            method : 'POST',
            headers : {
                    'content-type' : 'application/json'
                },
            body : JSON.stringify(reviewInfo)
            
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            reset();
            toast.success('Your review added successfully')
        })
    };
    return (
        <div>
            <h1 className='text-xl'>Add A Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                      {/* ==============User Name ====================*/}
                      <div className="form-control w-full max-w-xs">
                        <input type="name" 
                        readOnly 
                        value={user.displayName}
                        className="input input-primary input-bordered w-full max-w-xs" 
                        {...register("name",{
                            required :{
                                value: true,
                                
                            }
                          })}
                        />
                        <label className="label">
                        {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">{errors.address.message}</span>}
                        </label>
                    </div>
                    {/*====================== Review ================*/}
                    <div className="form-control w-full max-w-xs">
                    <textarea className="textarea h-24 textarea-primary input-bordered w-full max-w-xs"
                    placeholder="Add your address" 
                    {...register("review",{
                        required :{
                            value: true,
                            message : 'Address is required.'
                        }
                      })}
                    ></textarea>
                    </div>
                    {/*====================== Reatings ================*/}
                    <div className="form-control w-full max-w-xs">
                    <input type="number"
                     {...register("rating", 
                     {   min: {
                        value: 1,
                        message: 'Minimum rating is 1' // JS only: <p>error message</p> TS only support string
                      },
                      max: {
                        value: 5,
                        message: 'Maximum rating is 5' // JS only: <p>error message</p> TS only support string
                      }
                    })} 
                      placeholder="Ratings" 
                      class="input input-bordered input-primary w-full max-w-xs" />
                      <label className="label">
                        {errors.rating?.type === 'min'  && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                        {errors.rating?.type === 'max'  && <span className="label-text-alt text-red-500">{errors.rating.message}</span>}
                        </label>
                    </div>
                    <input className="btn input-primary w-full max-w-xs" type="submit" value='Add' />
                  </form>
        </div>
    );
};

export default AddReview;