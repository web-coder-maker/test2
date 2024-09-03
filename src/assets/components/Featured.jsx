// import React from 'react';
import milktea from '../images/tea-1.png';
import blacktea from '../images/tea-2.png';
import lemontea from '../images/tea-3.png';
import greentea from '../images/tea-4.png';

const Featured = () => {
    return (
        <div className="max-w-[1288px] mx-auto mt-28">
            <div className='w-[901px] text-center mx-auto'>
                <h1 className="text-[45px] font-semibold mb-4">Our Featured Products</h1>
                <p className='mb-8'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='flex gap-6 items-center justify-center'>
                <div className='h-[391px] w-[267px] bg-[#F4F4F4]  flex  flex-col items-center rounded-xl'>
                    <img className='w-[135px] mt-8' src={milktea} alt="" />
                    <h3 className='text-xl  font-bold mt-6'>Milk Tea</h3>
                    <p className='mt-4  w-[208px]'>Creamer could be replaced by fresh milk</p>
                </div>
                <div className='h-[391px] w-[267px] bg-[#F4F4F4]  flex  flex-col items-center rounded-xl'>
                    <img className='w-[145px] mt-8' src={blacktea} alt="" />
                    <h3 className='text-xl  font-bold mt-6'>Milk Tea</h3>
                    <p className='mt-4  w-[208px]'>Creamer could be replaced by fresh milk</p>
                </div>
                <div className='h-[391px] w-[267px] bg-[#F4F4F4]  flex  flex-col items-center rounded-xl'>
                    <img className='w-[143px] mt-8' src={lemontea} alt="" />
                    <h3 className='text-xl  font-bold mt-6'>Milk Tea</h3>
                    <p className='mt-4  w-[208px]'>Creamer could be replaced by fresh milk</p>
                </div>
                <div className='h-[391px] w-[267px] bg-[#F4F4F4]  flex  flex-col items-center rounded-xl'>
                    <img className='w-[131px] mt-8' src={greentea} alt="" />
                    <h3 className='text-xl  font-bold mt-6'>Milk Tea</h3>
                    <p className='mt-4  w-[208px]'>Creamer could be replaced by fresh milk</p>
                </div>

            </div>
        </div>
    );
};

export default Featured;