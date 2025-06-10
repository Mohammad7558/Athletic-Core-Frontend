import Lottie from 'lottie-react';
import React from 'react';
import loader from '../../../src/assets/Loader.json'
const Loader = () => {
    return (
        <div className='w-full flex justify-center h-[80vh]'>
            <Lottie className='w-16' animationData={loader}></Lottie>
        </div>
    );
};

export default Loader;