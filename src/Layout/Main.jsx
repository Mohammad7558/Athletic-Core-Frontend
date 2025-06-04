import React from 'react';
import { Outlet } from 'react-router';

const Main = () => {
    return (
        <div>
            <div>Nav</div>
            <Outlet/>
            <div>Footer</div>
        </div>
    );
};

export default Main;