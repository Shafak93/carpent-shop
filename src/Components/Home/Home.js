import React from 'react';
import Banner from '../Header/Banner';
import BussinessSummery from './BussnessSummery/BussinessSummery';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BussinessSummery></BussinessSummery>
        </div>
    );
};

export default Home;