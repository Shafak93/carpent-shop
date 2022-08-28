import React from 'react';
import mission1 from '../../../banner/about/About us page.gif';
import mission from '../../../banner/about/Business mission.gif';
const AboutUs = () => {
    return (
        <div>
            <div className='flex items-center justify-around'>
                <img src={mission} alt="mission image" />
                <div>
                    <h3 className='text-5xl text-center py-5'>Our Mission</h3>
                    <p className='w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus veritatis culpa, incidunt voluptatibus quod. Nostrum, natus excepturi. Nostrum esse excepturi incidunt veniam beatae sapiente itaque aliquid, fugit voluptates ullam ratione corrupti, culpa sit cumque et architecto saepe, obcaecati suscipit assumenda non omnis optio dolore reprehenderit impedit. Suscipit, cum alias! Nobis consequatur aliquid amet, voluptas repellendus facere. Tempore, vel. Numquam quae laboriosam iste accusantium, quo repudiandae facere sunt molestiae, autem corporis, eaque hic? Aut dignissimos beatae corrupti, magnam officiis, odit dolore, excepturi hic praesentium placeat rerum ad nostrum nisi nulla eveniet maiores repellendus inventore autem modi sint? Esse, id maxime?</p>
                </div>
          </div>
            <div className='flex items-center justify-around'>
                <div>
                    <h3 className='text-5xl text-center py-5'>Our Vission</h3>
                    <p className='w-96'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit minus veritatis culpa, incidunt voluptatibus quod. Nostrum, natus excepturi. Nostrum esse excepturi incidunt veniam beatae sapiente itaque aliquid, fugit voluptates ullam ratione corrupti, culpa sit cumque et architecto saepe, obcaecati suscipit assumenda non omnis optio dolore reprehenderit impedit. Suscipit, cum alias! Nobis consequatur aliquid amet, voluptas repellendus facere. Tempore, vel. Numquam quae laboriosam iste accusantium, quo repudiandae facere sunt molestiae, autem corporis, eaque hic? Aut dignissimos beatae corrupti, magnam officiis, odit dolore, excepturi hic praesentium placeat rerum ad nostrum nisi nulla eveniet maiores repellendus inventore autem modi sint? Esse, id maxime?</p>
                </div>
                <img src={mission1} alt="vission image" />
                
            </div>
        </div>
    );
};

export default AboutUs;