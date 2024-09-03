// import React from 'react';
import fresh1 from  '../images/fresh-1.png';
import fresh2 from '../images/fresh-2.png';

const Facilities = () => {
    return (
        <div  className='flex gap-14 justify-between max-w-[1140px] mx-auto mt-28'>
            <div className="grid grid-cols-2 gap-8 flex-1 max-w-[508px]">
                <div className="h-[136px] w-[238px] bg-gradient-to-r from-red-100 to-orange-100 rounded-xl"></div>
                <div className="h-[355px] row-span-2 bg-[#E6A6231A] w-[238px] flex justify-center items-center rounded-xl"><img src={fresh1} alt="" /></div>
                <div className="h-[355px] row-span-2 bg-[#5776391A] w-[238px] flex justify-center items-center rounded-xl"><img src={fresh2} alt="" /></div>
                <div className="h-[136px] w-[238px] bg-gradient-to-r from-[#D9D9D9] to-slate-100 rounded-xl"></div>
            </div>
            <div className='flex-1'>
                <h2 className="text-5xl font-semibold mb-5">Great Tea, Freshly Presented</h2>
                <p className='mb-5 text-xl'>The meaning of gong cha is chanese is to provide the best tea to emperor from all possessions . It represents the highest quality and self expectation. Establishing in 2006, Gong cha had been deeply appreciated by its custoers  because of good words of mouth and unique customized service orginated from Taiwan.</p>
                <h4 className='mb-3 text-xl font-bold'>Unique Taste</h4>
                <p className='mb-5 text-xl'>A Unique and different style from other teapots gives a luxurious and minimalist impression</p>
                <h4 className='mb-3 text-xl font-bold'>Premium Quality</h4>
                <p className='text-xl'>Premium Quality that makes tea more elegant and more durable when you use it.</p>
            </div>
        </div>
    );
};

export default Facilities;