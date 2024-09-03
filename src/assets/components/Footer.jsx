// import React from 'react';
import logo from '../images/cup.png';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
    return (
        <div className='h-[600px] bg-gradient-to-r from-orange-100 to-red-100 mt-24'>
            <div className='max-w-[1140px] mx-auto h-[486px] pt-20 space-y-20'>
                <div className='flex items-center justify-between'>
                    <img src={logo} alt="" />
                    <div className='flex items-center justify-between gap-7'>
                        <p className='text-xl font-medium'>Ready To Get Started?</p>
                        <button className='bg-gradient-to-r from-[#FF8938] to-[#FF0000] h-[64px] w-[200px] rounded-xl text-white text-xl items-center'>Get Started</button>
                    </div>
                </div>
                <div className='flex justify-between gap-20'>
                    <div>
                        <h4 className="text-lg font-semibold">Quick Links</h4>
                        <p className="mt-3">Home</p>
                        <p className="mt-2">About Us</p>
                        <p className="mt-2">Insurance</p>
                        <p className="mt-2">Privacy Policy</p>
                    </div>


                    <div>
                        <h4 className="text-lg font-semibold">Our Service</h4>
                        <p className="mt-3">Life Insurance</p>
                        <p className="mt-2">Car Insurance</p>
                        <p className="mt-2">Health Insurance</p>
                        <p className="mt-2">House Insurance</p>
                    </div>


                    <div>
                        <h4 className="text-lg font-semibold">Help</h4>
                        <p className="mt-3">FAQs</p>
                        <p className="mt-2">Contact Us</p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-7">Subscribe to our newsletter</h2>
                        <div className='flex border-b-2 border-black items-center justify-between pb-6'>
                            <p className='mb-0  pb-0'>Email Address</p>
                            <div className='h-8 w-8 bg-gradient-to-r from-[#FF8938] to-[#FF0000] rounded-full text-center justify-center text-white text-xl cursor-pointer'>></div>
                        </div>
                        <div className="flex text-xl gap-7 mt-10">
                            <FaFacebookF />
                            <FaTwitter />
                            <PiInstagramLogoFill />
                        </div>

                    </div>
                </div>
                <p className='text-center'>© 2024 TeaHouse.com - All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;