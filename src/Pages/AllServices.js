import React from 'react';
import GlobalBanner from '../components/GlobalBanner/GlobalBanner';
import Services from '../components/Services';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const AllServices = () => {
    return (
        <div>
            <Header></Header>
            <GlobalBanner></GlobalBanner>
            <div className='bg-white pt-20'>
                <Services></Services>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllServices;