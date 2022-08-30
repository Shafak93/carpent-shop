import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('https://obscure-crag-61698.herokuapp.com/product')
        .then(res => res.json())
            .then(data => {
                setTools(data.reverse().slice(0, 6))
                setLoading(false)
            })
    }, [])
    // if (loading === true) {
    //     return <Loading></Loading>
    // }
    return (
        <>
            <h1 className='text-5xl font-bold text-center my-5'>Featured Tools</h1>
            <div className='grid 
        sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
        gap-5 px-12 mt-12'>
                {
                    tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
                }
            </div>
        </>
    );
};

export default Tools;