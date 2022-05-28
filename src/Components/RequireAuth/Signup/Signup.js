import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import Loading from '../Loading/Loading';

const Signup = () => {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const [token] = useToken(user || googleUser)
    const navigate = useNavigate()
    let signInError;
    if(loading || googleLoading || updating){
        return <Loading></Loading>
    }
    if(error || signInError || updateError){
        signInError = <small><p className='text-red-500'>{error?.message || googleError?.message || updateError?.message}</p></small>
    }
    if(token){
        navigate('/dashboard')
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName : data.name })
        
    };
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-300 shadow-xl">
                <div className="card-body">
                    <h2 className="text-xl font bold text-center">Sign Up</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/*============ Name ===================*/}
                    <div className="form-control w-full max-w-xs">
                        <input type="text" 
                        placeholder="Your Name" 
                        className="input input-primary input-bordered w-full max-w-xs" 
                        {...register("name",{
                            required :{
                                value: true,
                                message : 'Name is required.'
                            }
                          })}
                        />
                        <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    {/* =================Email================== */}
                    <div className="form-control w-full max-w-xs">
                        <input type="email" 
                        placeholder="Your Email" 
                        className="input input-primary input-bordered w-full max-w-xs" 
                        {...register("email",{
                            required :{
                                value: true,
                                message : 'Email is required.'
                            },
                            pattern: {
                              value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                              message: 'Enter a valid email.'
                            }
                          })}
                        />
                        <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                          {/* =====================Password===================== */}
                    <div className="form-control w-full max-w-xs">
                        <input type="password" 
                        placeholder="Password" 
                        className="input input-primary input-bordered w-full max-w-xs" 
                        {...register("password",{
                            required :{
                                value: true,
                                message : 'Password required.'
                            },
                            minLength: {
                              value: 6,
                              message: 'Password should be minimum 6 character or greater.'
                            }
                          })}
                        />
                        <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {signInError}
                        <input className="btn input-primary w-full max-w-xs" type="submit" value='Sign Up' />
                    </form>
                    <p><small>Already have an account ? <Link to='/login' className='text-primary'>Please login</Link></small></p>
                    <div className="divider">OR</div>
                    <button 
                   onClick={() => signInWithGoogle()}
                    className="btn btn-outline uppercase"
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;