import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({tool}) => {
    const {_id, name, img, description, minOrder, availableProduct, price } = tool
    const navigate = useNavigate();
    const navigateToPurchase = _id =>{
        navigate(`/product/${_id}`)
    }

    return (
        <div>
            <div className="card w-96 bg-base-300 shadow-2xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-xl text-center">{name}</h2>
                    <p className='justify-start'>{description}</p>
                    <p >Min-Orde: {minOrder}</p>
                    <p>Available Product: {availableProduct}</p>
                    <div className="card-actions justify-center">
                    <button onClick={()=>navigateToPurchase(_id)} className="btn btn-primary">Purchase Now</button>   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;