import React, { useEffect, useState } from 'react';
import Tool from '../Tool/Tool';

const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-12'>
            {
                tools.map(tool => <Tool key={tool._id} tool ={tool}></Tool>)
            }
        </div>
    );
};

export default Tools;