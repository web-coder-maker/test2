// import React from 'react';

const Navbar = () => {
    return (
        <div className="flex items-center justify-between max-w-[1288px] mx-auto mt-4">
            <h2 className="text-3xl font-bold">TeaHouse</h2>
            <ul className="flex items-center">
                <li className="ml-3 text-xl hover:text-red-600 cursor-pointer font-semibold">Home</li>
                <li className="ml-12 text-xl hover:text-red-600 cursor-pointer font-semibold">Menu</li>
                <li className="ml-12 text-xl hover:text-red-600 cursor-pointer font-semibold">About</li>
                <li className="ml-12 text-xl hover:text-red-600 cursor-pointer font-semibold">Contact</li>
            </ul>
        </div>
    );
};

export default Navbar;