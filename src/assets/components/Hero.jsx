// import React from 'react';
import heroimg from '../images/banner.png';

const Hero = () => {
    return (
        <div className='flex justify-between max-w-[1288px] mx-auto mt-20 pl-[80px]'>
            <div className='w-[628px]'>
                <h1 className="text-[80px] font-bold leading-[95px] mb-5">It's good 
                tea time at The Tea House</h1>
                <p className='text-xl w-[513px]'>Tea and Botanical Solutions Supplier Give Optimum Satisfaction To Your Taste Buds.</p>
                <button className=' mt-8 bg-gradient-to-r from-[#FF8938] to-[#FF0000] h-[64px] w-[200px] rounded-xl text-white text-xl items-center'>Explore More</button>
            </div>
            <div>
                <img className='w-[655px]' src={heroimg} alt="" />
            </div>
        </div>
    );
};

export default Hero;