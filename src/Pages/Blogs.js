import React from 'react';
import GlobalBanner from '../components/GlobalBanner/GlobalBanner';
import Questions from '../components/Questions';
import Footer from '../shared/Footer';
import Header from '../shared/Header';


const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <GlobalBanner h2='Blogs' h3='Read All Blogs Here' img='https://i.ibb.co/0YGfHfr/banner-02-1.jpg'></GlobalBanner>
            <div className='bg-white'>
                <Questions></Questions>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;