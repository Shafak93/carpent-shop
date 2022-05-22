import React from 'react';
import Banner from '../Header/Banner';
import BussinessSummery from './BussnessSummery/BussinessSummery';
import Footer from './Footer/Footer';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BussinessSummery></BussinessSummery>
            <Footer></Footer>
        </div>
    );
};

export default Home;