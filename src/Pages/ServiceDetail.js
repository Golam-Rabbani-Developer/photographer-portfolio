import React from 'react';
import GlobalBanner from '../components/GlobalBanner/GlobalBanner';
import SingleService from '../components/SingleService';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const ServiceDetail = () => {
    return (
        <div className=''>
            <Header></Header>
            <GlobalBanner></GlobalBanner>
            <SingleService></SingleService>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetail;