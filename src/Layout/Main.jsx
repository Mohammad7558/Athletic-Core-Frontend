import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div className='bg-gray-100'>
            <Header/>
            <Outlet/>
            <div>Footer</div>
        </div>
    );
};

export default Main;