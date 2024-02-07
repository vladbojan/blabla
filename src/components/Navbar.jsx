"use client"
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className=" bg-[#ffffff] sticky top-0 z-10 text-black p-4 " style={{"box-shadow": "rgba(99, 99, 99, 0.2) 0px 1px 4px 0px"}}>
            <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
                <div className="flex items-center">
                    <img src="/assets/logo.png" alt="Logo" className="h-20 mr-2" />
                    <div><span className="text-black text-2xl font-semibold">APOSTOL</span> <br/><span className={"ml-8 text-md"}>SI ASOCIATII</span></div>
                </div>
                <div className="hidden md:flex space-x-8">
                    <button onClick={() => scrollToSection('home')} className="text-black hover:text-blue-400">Home</button>
                    <button onClick={() => scrollToSection('features')} className="text-black hover:text-blue-400">Features</button>
                    <button onClick={() => scrollToSection('about')} className="text-black hover:text-blue-400">About</button>
                    <button onClick={() => scrollToSection('portfolio')} className="text-black hover:text-blue-400">Portfolio</button>
                    <button onClick={() => scrollToSection('pricing')} className="text-black hover:text-blue-400">Pricing</button>
                    <button onClick={() => scrollToSection('team')} className="text-black hover:text-blue-400">Team</button>
                    <button onClick={() => scrollToSection('contact')} className="text-black hover:text-blue-400">Contact Us</button>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleNavbar} className="text-black focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            )}
                        </svg>
                    </button>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 w-full bg-[#f2f2f1] p-4 rounded-lg shadow-lg`}>
                    <button onClick={() => scrollToSection('home')} className="text-black hover:text-blue-400">Home</button>
                    <button onClick={() => scrollToSection('features')} className="text-black hover:text-blue-400">Features</button>
                    <button onClick={() => scrollToSection('about')} className="text-black hover:text-blue-400">About</button>
                    <button onClick={() => scrollToSection('portfolio')} className="text-black hover:text-blue-400">Portfolio</button>
                    <button onClick={() => scrollToSection('pricing')} className="text-black hover:text-blue-400">Pricing</button>
                    <button onClick={() => scrollToSection('team')} className="text-black hover:text-blue-400">Team</button>
                    <button onClick={() => scrollToSection('contact')} className="text-black hover:text-blue-400">Contact Us</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
