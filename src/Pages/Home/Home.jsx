import React, { useEffect } from 'react';
import Slider from '../../components/Slider/Slider';
import { useLocation } from 'react-router';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/'){
          window.document.title = 'Home - Athletic-Core'
        }
      }, [location.pathname])
    return (
        <div>
            <Slider/>
        </div>
    );
};

export default Home;