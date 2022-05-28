import React from 'react';
import Banner from '../Header/Banner';
import BussinessSummery from './BussnessSummery/BussinessSummery';
import ChooseUs from './ChooseUs/ChooseUs';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import Review from './Review/Review';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BussinessSummery></BussinessSummery>
            <ChooseUs></ChooseUs>
            <Review></Review>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;