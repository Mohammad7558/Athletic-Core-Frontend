import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div className='bg-gray-100'>
            <Header/>
            <div className='mb-20'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;