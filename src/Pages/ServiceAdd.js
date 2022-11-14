import React from 'react';
import Addservices from '../components/Addservices/Addservices';
import GlobalBanner from '../components/GlobalBanner/GlobalBanner';
import Header from '../shared/Header';




const ServiceAdd = () => {
    return (
        <div>
            <Header></Header>
            <GlobalBanner h2='Add Service' h3='Add Your Own Service' img='https://i.ibb.co/n8TCG0B/banner-04-1.jpg'></GlobalBanner>
            <Addservices></Addservices>
        </div>
    );
};

export default ServiceAdd;