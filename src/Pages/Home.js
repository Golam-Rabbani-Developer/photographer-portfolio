import React from 'react';
import About from '../components/About';
import Albums from '../components/Album/Albums';
import Banner from '../components/Banner/Banner';
import Contact from '../components/Contact/Contact';
import HomeAbout from '../components/HomeAbout';
import Services from '../components/Services';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Home = () => {
    return (
        <div className='font-poppins'>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Albums></Albums>
            <Services></Services>
            <HomeAbout></HomeAbout>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;