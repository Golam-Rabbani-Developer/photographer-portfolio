import React from 'react';
import GlobalBanner from '../components/GlobalBanner/GlobalBanner';
import Questions from '../components/Questions';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Blogs = () => {
    return (
        <div>
            <Header></Header>
            <GlobalBanner></GlobalBanner>
            <div className='bg-white'>
                <Questions></Questions>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;