import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Helmet } from 'react-helmet';
import { useLanguage } from "../../context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // State to track active section
    const { translations } = useLanguage();

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id); // Update active section
        }
    };

    useEffect(() => {
        // Update document's head when active section changes
        const title = activeSection === 'home' ? 'Home - APOSTOL SI ASOCIATII' :
            activeSection === 'features' ? 'Features - APOSTOL SI ASOCIATII' :
                activeSection === 'customer' ? 'Customer - APOSTOL SI ASOCIATII' :
                    activeSection === 'portfolio' ? 'Portfolio - APOSTOL SI ASOCIATII' :
                        activeSection === 'team' ? 'Team - APOSTOL SI ASOCIATII' :
                            activeSection === 'testimonial' ? 'Testimonial - APOSTOL SI ASOCIATII' :
                                activeSection === 'pricing' ? 'Pricing - APOSTOL SI ASOCIATII' :
                                    activeSection === 'contact' ? 'Contact - APOSTOL SI ASOCIATII' :
                                        '';

        const description = activeSection === 'home' ? 'Welcome to APOSTOL SI ASOCIATII! We are a leading software development company specializing in providing high-quality solutions tailored to your needs.' :
            activeSection === 'features' ? 'Explore the features of our software solutions designed to empower your business and streamline your operations.' :
                activeSection === 'customer' ? 'Discover how APOSTOL SI ASOCIATII helps customers achieve their goals through innovative software solutions and exceptional customer service.' :
                    activeSection === 'portfolio' ? 'Browse through our portfolio to see examples of our successful projects and the diverse range of industries we serve.' :
                        activeSection === 'team' ? 'Meet the talented individuals behind APOSTOL SI ASOCIATII who are dedicated to delivering excellence in software development and customer satisfaction.' :
                            activeSection === 'testimonial' ? 'Read what our satisfied clients have to say about their experience working with APOSTOL SI ASOCIATII and the impact of our software solutions on their businesses.' :
                                activeSection === 'pricing' ? 'View our flexible pricing options for software development services and find the right solution to fit your budget and requirements.' :
                                    activeSection === 'contact' ? 'Get in touch with APOSTOL SI ASOCIATII to discuss your software development needs, request a quote, or inquire about our services.' :
                                        '';

        const keywords = activeSection === 'home' ? 'software development, custom software, web development, mobile development, software solutions, technology' :
            activeSection === 'features' ? 'software features, software functionalities, software capabilities, business solutions, technology' :
                activeSection === 'customer' ? 'customer success, client testimonials, customer satisfaction, software solutions, business growth' :
                    activeSection === 'portfolio' ? 'portfolio, projects, case studies, success stories, industries served, software solutions' :
                        activeSection === 'team' ? 'team, software developers, technology experts, expertise, skills, collaboration' :
                            activeSection === 'testimonial' ? 'client testimonials, customer feedback, satisfaction, success stories, software impact' :
                                activeSection === 'pricing' ? 'pricing, pricing options, cost-effective solutions, budget-friendly, software development services' :
                                    activeSection === 'contact' ? 'contact us, get in touch, request a quote, inquire, software development services' :
                                        '';

        document.title = title;

        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        }

        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', keywords);
        }
    }, [activeSection]);

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
                    <button onClick={() => scrollToSection('home')} className={`text-gray-900 ${activeSection === 'home' ? 'font-bold' : 'hover:text-blue-400'}`}>{translations.navbar.home}</button>
                    <button onClick={() => scrollToSection('features')} className={`text-gray-900 ${activeSection === 'features' ? 'font-bold' : 'hover:text-blue-400'}`}>{translations.navbar.features}</button>
                    <button onClick={() => scrollToSection('customer')} className={`text-gray-900 ${activeSection === 'customer' ? 'font-bold' : 'hover:text-blue-400'}`}>{translations.navbar.customer}</button>
                    <button onClick={() => scrollToSection('portfolio')} className={`text-gray-900 ${activeSection === 'portfolio' ? 'font-bold' : 'hover:text-blue-400'}`}>{translations.navbar.portfolio}</button>
                    <button onClick={() => scrollToSection('team')} className={`text-gray-900 ${activeSection === 'team' ? 'font-bold' : 'hover:text-blue-400'}`}>{translations.navbar.team}</button>
                    {/* <button onClick={() => scrollToSection('testimonial')} className={`text-gray-900 ${activeSection === 'testimonial' ? 'font-bold' : 'hover:text-blue-400'}`}>{translations.navbar.testimonial}</button>
                    <button onClick={() => scrollToSection('pricing')} className={`text-gray-900 ${activeSection === 'pricing' ? 'font-bold' : 'hover:text-blue-400'}`}>{translations.navbar.pricing}</button>
                     */}
                     <button onClick={() => scrollToSection('contact')} className={`text-gray-900 ${activeSection === 'contact' ? 'font-bold' : 'hover:text-blue-400'}`}>{translations.navbar.contact}</button>
                    <LanguageSwitcher />
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
                    <button onClick={() => scrollToSection('home')} className={`text-gray-900 ${activeSection === 'home' ? 'font-bold' : 'hover:text-blue-400'}`}>{translations.navbar.home}</button>
                    <button onClick={() => scrollToSection('features')} className={`text-gray-900 ${activeSection === 'features' ? 'font-bold' : 'hover:text-blue-400'}`}>{translations.navbar.features}</button>
                    <button onClick={() => scrollToSection('portfolio')} className={`text-gray-900 ${activeSection === 'portfolio' ? 'font-bold' : 'hover:text-blue-400'}`}>{translations.navbar.portfolio}</button>
                    <button onClick={() => scrollToSection('team')} className={`text-gray-900 ${activeSection === 'team' ? 'font-bold' : 'hover:text-blue-400'}`}>{translations.navbar.team}</button>
                    {/* <button onClick={() => scrollToSection('pricing')} className={`text-gray-900 ${activeSection === 'pricing' ? 'font-bold' : 'hover:text-blue-400'}`}>{translations.navbar.pricing}</button>
                     */}
                    <button onClick={() => scrollToSection('contact')} className={`text-gray-900 ${activeSection === 'contact' ? 'font-bold' : 'hover:text-blue-400'}`}>{translations.navbar.contact}</button>
                    <div className={"w-full flex justify-center items-center"}>
                        <LanguageSwitcher />
                    </div>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
