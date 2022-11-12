import React from 'react';
import Addservices from '../components/Addservices/Addservices';
import GlobalBanner from '../components/GlobalBanner/GlobalBanner';
import Header from '../shared/Header';

const ServiceAdd = () => {
    return (
        <div>
            <Header></Header>
            <GlobalBanner></GlobalBanner>
            <Addservices></Addservices>
        </div>
    );
};

export default ServiceAdd;