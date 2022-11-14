import React from 'react';
import GlobalBanner from '../components/GlobalBanner/GlobalBanner';
import PersonsReviews from '../components/PersonsReviews';
import Footer from '../shared/Footer';
import Header from '../shared/Header';



const Reviews = () => {
    return (
        <div>
            <Header></Header>
            <GlobalBanner h2='Reviews' h3='All Of Your Reviews' img='https://i.ibb.co/sVWzB6Q/banner-03-1.webp'></GlobalBanner>
            <div className='bg-white pt-20'>
                <PersonsReviews></PersonsReviews>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Reviews;