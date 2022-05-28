import React from 'react';
import myImg from '../../../banner/02.jpg'

const Portfolio = () => {
    return (
        <div className='p-12'>
            <h1 className='text-5xl text-center font-bold pb-12'>My Portfolio</h1>
            <div class="card w-4/4 bg-base-300 shadow-xl">
                <div class="card-body">
                        <div className='flex justify-between'>
                            <div class="avatar">
                                <div class="w-32 rounded-full">
                                    <img src={myImg} />
                                </div>
                            </div>
                            <div>
                                <h1 className='text-2xl font-mono'>MD. Mohiuddin Shafak</h1>
                                <h2 className='text-xl'>Email: shafakctg@gmail.com</h2>
                            </div>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-5xl text-center font-bold py-12'>Educational Background</h1>

                <div class="overflow-x-auto">
                    <table class="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>Institute</th>
                            <th>Exam</th>
                            <th>GPA</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>1</th>
                            <td>Baitush Sharaf Ideal Madrash</td>
                            <td>Dakhil</td>
                            <td>5 out of 5</td>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>
                            <th>2</th>
                            <td>Chittagong College</td>
                            <td>H.S.C</td>
                            <td>4.6 out of 5</td>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>3</th>
                            <td>University of Chittagong</td>
                            <td>BSS</td>
                            <td>2.89 out of 4</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>University of Chittagong</td>
                            <td>MSS</td>
                            <td>3.05 out of 4</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='flex justify-center '>
            <div class="card w-3/4 bg-base-300 shadow-xl">
                    <div class="card-body">
                        <h1 className='text-3xl text-center font-bold'>Technologies that i have experienced</h1>
                        <ul class="menu bg-base-100 w-56">
                            <li><a>HTML</a></li>
                            <li><a>CSS</a></li>
                            <li><a>Bootstrap, Tailwind CSS</a></li>
                            <li><a>Javascript</a></li>
                            <li><a>React js</a></li>
                            <li><a>Node js</a></li>
                            <li><a>Express js</a></li>
                            <li><a>MongoDB</a></li>
                            <li><a>Github</a></li>
                            <li><a>Firebase Authentication</a></li>
                        </ul>
                    </div>
                    </div>
            </div>

            <div>
                <h1 className='text-3xl text-center font-bold'>My Projects Link</h1>
                <div class="overflow-x-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Project Name</th>
                        <th>Project Link</th>
                        
                    </tr>
                    </thead>
                    <tbody>
                    {/* <!-- row 1 --> */}
                    <tr>
                        <th>1</th>
                        <td>Bike Mania</td>
                        <td><a>https://bike-mania-6a3dd.web.app/</a></td>
                    </tr>
                    {/* <!-- row 2 --> */}
                    <tr>
                        <th>2</th>
                        <td>Psycho Medicine</td>
                        <td>https://psycho-medicine.web.app/</td>
                    </tr>
                    {/* <!-- row 3 --> */}
                    <tr>
                        <th>3</th>
                        <td>Cloth Store</td>
                        <td>https://cloth-store-cfea70.netlify.app/</td>
                        
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;