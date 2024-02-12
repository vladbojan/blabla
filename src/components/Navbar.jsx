import React, { useState } from 'react';
import Link from "next/link";
import {useLanguage} from "../../context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { translations } = useLanguage();
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
        <nav className=" bg-[#ffffff] sticky top-0 z-10 text-gray-900 p-4 " style={{ "box-shadow": "rgba(88, 88, 88, 0.2) 0px 0.2px 1px 0px" }}>
            <div className="max-w-7xl mx-auto flex justify-between items-center relative z-10">
                <div className="flex items-center">
                    <Link href={"/"}>
                        <img src="/assets/logo.png" alt="Logo" className="h-20 mr-2" />
                    </Link>
                    <Link href={"/"}>
                        <div><span className="text-gray-900 text-2xl font-semibold">APOSTOL</span> <br /><span className={"ml-8 text-md"}>SI ASOCIATII</span></div>
                    </Link>
                </div>
                <div className="hidden md:flex space-x-8 " style={{ fontSize: "16px" }}>
                    <button onClick={() => scrollToSection('home')} className="text-gray-900 hover:text-blue-400">{translations.navbar.home}</button>
                    <button onClick={() => scrollToSection('features')} className="text-gray-900 hover:text-blue-400">{translations.navbar.features}</button>
                    <button onClick={() => scrollToSection('customer')} className="text-gray-900 hover:text-blue-400">{translations.navbar.customer}</button>
                    <button onClick={() => scrollToSection('portfolio')} className="text-gray-900 hover:text-blue-400">{translations.navbar.portfolio}</button>
                    <button onClick={() => scrollToSection('team')} className="text-gray-900 hover:text-blue-400">{translations.navbar.team}</button>
                    <button onClick={() => scrollToSection('testimonial')} className="text-gray-900 hover:text-blue-400">{translations.navbar.testimonial}</button>
                    <button onClick={() => scrollToSection('pricing')} className="text-gray-900 hover:text-blue-400">{translations.navbar.pricing}</button>
                    <button onClick={() => scrollToSection('contact')} className="text-gray-900 hover:text-blue-400">{translations.navbar.contact}</button>
                    <LanguageSwitcher/>
                </div>
                <div className="md:hidden flex items-center">
                    <button onClick={toggleNavbar} className="text-gray-900 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            )}
                        </svg>
                    </button>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute flex flex-col justify-evenly item-eveny top-16 right-0 h-80 w-6/12 bg-[#f2f2f1] p-4 rounded-lg shadow-lg`}>
                    <button onClick={() => scrollToSection('home')} className="text-gray-900 hover:text-blue-400">{translations.navbar.home}</button>
                    <button onClick={() => scrollToSection('features')} className="text-gray-900 hover:text-blue-400">{translations.navbar.features}</button>
                    <button onClick={() => scrollToSection('portfolio')} className="text-gray-900 hover:text-blue-400">{translations.navbar.portfolio}</button>
                    <button onClick={() => scrollToSection('team')} className="text-gray-900 hover:text-blue-400">{translations.navbar.team}</button>
                    <button onClick={() => scrollToSection('pricing')} className="text-gray-900 hover:text-blue-400">{translations.navbar.pricing}</button>
                    <button onClick={() => scrollToSection('contact')} className="text-gray-900 hover:text-blue-400">{translations.navbar.contact}</button>
                    <LanguageSwitcher/>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
