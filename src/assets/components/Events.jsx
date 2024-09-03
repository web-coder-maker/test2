// import React from 'react';
import news1 from '../images/news-1.png';
import news2 from '../images/news-2.png';
import news3 from '../images/news-3.png';

const Events = () => {
    return (
        <div className='max-w-[1140px] mx-auto mb-10'>
            <h2 className="text-[45px] font-semibold mt-24 text-center">News & Events</h2>
            <p className='w-[901px] mx-auto text-center mt-5 mb-7'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>

            <div className='flex gap-5'>
                <div className='w-[364px] h-[448px] border rounded-xl flex flex-col items-center space-y-6 hover:shadow-2xl duration-500'>
                    <img className='w-[320px] mt-6' src={news1} alt="" />
                    <div className='w-[320px] space-y-4'>
                        <h5 className=''>Feb 05, 2027</h5>
                        <h3 className='font-semibold text-xl'>Collecting 8 points for discount</h3>
                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                        <button className='font-semibold'>Learn More</button>
                    </div>
                </div>
                <div className='w-[364px] h-[448px] border rounded-xl flex flex-col items-center space-y-6 hover:shadow-2xl duration-500'>
                    <img className='w-[320px] mt-6' src={news2} alt="" />
                    <div className='w-[320px] space-y-4'>
                        <h5 className=''>Feb 05, 2027</h5>
                        <h3 className='font-semibold text-xl'>Collecting 8 points for discount</h3>
                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                        <button className='font-semibold'>Learn More</button>
                    </div>
                </div>
                <div className='w-[364px] h-[448px] border rounded-xl flex flex-col items-center space-y-6 hover:shadow-2xl duration-500'>
                    <img className='w-[320px] mt-6' src={news3} alt="" />
                    <div className='w-[320px] space-y-4'>
                        <h5 className=''>Feb 05, 2027</h5>
                        <h3 className='font-semibold text-xl'>Collecting 8 points for discount</h3>
                        <p>There are many variations of passages of Lorem Ipsum available.</p>
                        <button className='font-semibold'>Learn More</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Events;