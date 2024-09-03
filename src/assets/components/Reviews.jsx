// import React from 'react';
import user from '../images/client.png';

const Reviews = () => {
    return (
        <div className='flex relative bg-gradient-to-r from-[#FF8938] to-[#FF0000] mt-28 max-w-[1140px] mx-auto h-[650px] p-20 gap-32 items-center justify-center rounded-xl'>
            <div className='text-white w-[440px]'>
                <h2 className='text-5xl font-semibold mb-4'>Meet Our Super Clients</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='h-[56px] w-[139px] mt-5 bg-white text-[#FF451C] rounded-xl font-bold'>Show All</button>
            </div>
            <div className=''>
                <div className='relative bg-white h-[220px] w-[394px] p-10 rounded-xl mb-14 opacity-45'>
                    <img className='absolute -left-5 -top-5 border-4 rounded-full bg-white border-white' src={user} alt="" />
                    <p>We are providing the best and suitable home insurance services for the people who are interested to treatment</p>
                    <h4 className='font-bold mt-4'>Ilham Yuda</h4>
                    <h5>Businessman</h5>
                </div>
                <div className='absolute bg-white h-[233px] w-[433px] p-10 rounded-xl top-[200px] right-[160px]  z-20'>
                    <img className='absolute -left-5 -top-5 border-4 rounded-full bg-white border-white' src={user} alt="" />
                    <p>We are providing the best and suitable home insurance services for the people who are interested to treatment</p>
                    <h4 className='font-bold mt-4'>Ilham Yuda</h4>
                    <h5>Businessman</h5>
                </div>
                <div className='relative bg-white h-[220px] w-[394px] p-10 rounded-xl opacity-45'>
                    <img className='absolute -left-5 -top-5 border-4 rounded-full bg-white border-white' src={user} alt="" />
                    <p>We are providing the best and suitable home insurance services for the people who are interested to treatment</p>
                    <h4 className='font-bold mt-4'>Ilham Yuda</h4>
                    <h5>Businessman</h5>
                </div>
            </div>
        </div>
    );
};

export default Reviews;