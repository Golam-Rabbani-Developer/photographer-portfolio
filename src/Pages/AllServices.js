import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import GlobalBanner from '../components/GlobalBanner/GlobalBanner';
import Services from '../components/Services';
import Footer from '../shared/Footer';
import Header from '../shared/Header';



const AllServices = () => {
    const [dark, setDark] = useContext(ThemeContext)
    return (
        <div>
            <Header></Header>
            <GlobalBanner h2='Services' h3='My Services' img='https://i.ibb.co/Rj27qJ8/banner-1-1.webp'></GlobalBanner>
            <div className={`pt-20 ${dark ? 'bg-black' : 'bg-white'}`}>
                <Services></Services>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllServices;