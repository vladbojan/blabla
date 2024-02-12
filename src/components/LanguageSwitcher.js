import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext'; // Ensure correct path

const LanguageSwitcher = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { language, changeLanguage } = useLanguage(); // Destructure the language from the context

    const handleLanguageChange = (lang) => {
        changeLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="flex bg-blue-400 justify-center rounded-full shadow-sm py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                    id="language-menu"
                    aria-expanded="true"
                    aria-haspopup="true"
                >
                    {/* Display the flag based on the current language */}
                    {language === 'en' ? (
                        <img src="/assets/flag/uk.png" alt="English Flag" className="w-6 h-6 rounded-full mr-2" />
                    ) : (
                        <img src="/assets/flag/romania.png" alt="Romanian Flag" className="w-6 h-6 rounded-full mr-2" />
                    )}
                    <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path fillRule="evenodd" d="M10 3l-7 7m0 0l7 7m-7-7h14" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="language-menu"
                >
                    <div className="py-1" role="none">
                        <button
                            className="text-gray-900 hover:bg-gray-100 flex hover:text-gray-900 block px-4 py-2 text-sm text-left w-full"
                            onClick={() => handleLanguageChange('en')}
                        >
                            <img src="/assets/flag/uk.png" alt="English Flag" className="w-6 h-6 rounded-full mr-2" />
                            English
                        </button>
                        <button
                            className="text-gray-900 flex hover:bg-gray-100 hover:text-gray-900 block px-4 py-2 text-sm text-left w-full"
                            onClick={() => handleLanguageChange('ro')}
                        >
                            <img src="/assets/flag/romania.png" alt="Romanian Flag" className="w-6 h-6 rounded-full mr-2" />
                            Romanian
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;
