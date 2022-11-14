import React from 'react';
import GlobalBanner from '../components/GlobalBanner/GlobalBanner';
import SingleService from '../components/SingleService';
import Footer from '../shared/Footer';
import Header from '../shared/Header';



const ServiceDetail = () => {
    return (
        <div className=''>
            <Header></Header>
            <GlobalBanner h2='Service' h3='Book Your Service Now' img='https://i.ibb.co/6rkyBd8/banner-05-1.jpg'></GlobalBanner>
            <SingleService></SingleService>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetail;