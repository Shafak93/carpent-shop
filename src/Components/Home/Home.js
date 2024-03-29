import React from 'react';
import Banner from '../Header/Banner';
import AboutUs from './AboutUs/AboutUs';
import BussinessSummery from './BussnessSummery/BussinessSummery';
import ChooseUs from './ChooseUs/ChooseUs';
import Client from './Client/Client';
import ContactUs from './ContactUs/ContactUs';
import Footer from './Footer/Footer';
import Review from './Review/Review';
import Tools from './Tools/Tools';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Tools></Tools>
            <BussinessSummery></BussinessSummery>
            <ChooseUs></ChooseUs>
            <Client></Client>
            <Review></Review>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;