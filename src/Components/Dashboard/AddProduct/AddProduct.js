import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imgStorageKey = '7cb3b56e4877ff4722a871c2d10f529f';

    const onSubmit = async data => {
        const image = data.img[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`
        fetch(url, {
            method : 'POST',
            body : formData
        })
        .then(res => res.json())
        .then(result =>{
            if(result.success){
                const img = result.data.url;
                const product ={
                    name : data.name,
                    price : data.price,
                    description: data.description,
                    minOrder : data.minOrder,
                    availableProduct : data.availableProduct,
                    img : img
                }
                //Sending product data to database
                fetch(`https://obscure-crag-61698.herokuapp.com/product`,{
                    method : 'POST',
                    headers :{
                        'content-type' : 'application/json'
                    },
                    body : JSON.stringify(product)
                })
                .then(res => res.json())
                .then(insertValue => {
                    toast.success('Product added succefully')
                })
            }
        })
        
    };
    return (
        <div className='ml-12'>
            <h1>Add Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full max-w-xs">
                        {/* Product Name */}
                        <input type="text" 
                        placeholder="Product Name" 
                        className="input input-primary input-bordered w-full max-w-xs" 
                        {...register("name",{
                            required :{
                                value: true,
                                message : 'Product name is required.'
                            }
                          })}
                        />
                        <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                            {/* Product Price */}
                    <div className="form-control w-full max-w-xs">
                        <input type="price" 
                        placeholder="Price" 
                        className="input input-primary input-bordered w-full max-w-xs" 
                        {...register("price",{
                            required :{
                                value: true,
                                message : 'Price is required.'
                            }
                          })}
                        />
                        <label className="label">
                        {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                        </label>
                    </div>
                            {/* Product Description */}
                    <div className="form-control w-full max-w-xs">
                    <textarea className="textarea h-24 textarea-primary input-bordered w-full max-w-xs"
                    placeholder="Product Description" 
                    {...register("description",{
                        required :{
                            value: true,
                            message : 'Descriiption is required.'
                        }
                      })}
                    ></textarea>
                        {/* <input type="textarea" 
                        placeholder="Product Description" 
                        className="input input-primary input-bordered w-full max-w-xs" 
                        {...register("description",{
                            required :{
                                value: true,
                                message : 'Descriiption is required.'
                            }
                          })}
                        /> */}
                        <label className="label">
                        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                        </label>
                    </div>
                            {/* Product Minimum Order */}
                    <div className="form-control w-full max-w-xs">
                        <input type="number" 
                        placeholder="Minimum order quantity" 
                        className="input input-primary input-bordered w-full max-w-xs" 
                        {...register("minOrder",{
                            required :{
                                value: true,
                                message : 'Minimum order quantity is required.'
                            }
                          })}
                        />
                        <label className="label">
                        {errors.minOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minOrder.message}</span>}
                        </label>
                    </div>
                            {/* Available Product */}
                    <div className="form-control w-full max-w-xs">
                        <input type="number" 
                        placeholder="Available product quantity" 
                        className="input input-primary input-bordered w-full max-w-xs" 
                        {...register("availableProduct",{
                            required :{
                                value: true,
                                message : 'Available product quantity is required.'
                            }
                          })}
                        />
                        <label className="label">
                        {errors.availableProduct?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableProduct.message}</span>}
                        </label>
                    </div>
                            {/* Product Image*/}
                    <div className="form-control w-full max-w-xs">
                        <input type="file" 
                        className="input input-primary input-bordered w-full max-w-xs" 
                        {...register("img",{
                            required :{
                                value: true,
                                message : 'Image is required.'
                            }
                          })}
                        />
                        <label className="label">
                        {errors.img?.type === 'required' && <span className="label-text-alt text-red-500">{errors.img.message}</span>}
                        </label>
                    </div>
                   
                        <input className="btn input-primary w-full max-w-xs" type="submit" value='Add Product' />
                    </form>
        </div>
    );
};

export default AddProduct;