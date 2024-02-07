// ScrollToTopButton.js
"use client"
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className={`fixed bottom-4 right-4 z-10 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <button onClick={scrollToTop} className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3">
                <FaArrowUp />
            </button>
        </div>
    );
};

export default ScrollToTopButton;
