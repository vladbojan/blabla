"use client"
import React from 'react';
import 'aos/dist/aos.css';
import {useLanguage} from "../../context/LanguageContext";

const RecentWork = () => {
    const { translations } = useLanguage(); // Use the language context hook to access translations

    // Array of objects containing data for each recent work
    const recentWorksData = translations.recentWorks.works;

    return (
        <>
            <div className="py-12" id="portfolio">
                <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                    <div className="mb-12 space-y-2 text-center"
                         data-aos="fade-down"
                         data-aos-offset="200"
                         data-aos-easing="ease-in-out">
                        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">{translations.recentWorks.title}</h2>
                        <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
                            {translations.recentWorks.description}
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Map over the recentWorksData array to render each recent work dynamically */}
                        {recentWorksData.map((work, index) => (
                            <div key={index} className="group sm:px-8 sm:py-4 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-md shadow-gray-600/10"
                                 data-aos="fade-right"
                                 data-aos-offset={(index + 10) * 10}
                                 data-aos-easing="ease-in-out"
                            >
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={work.imageUrl}
                                        alt="art cover"
                                        loading="lazy"
                                        width="1000"
                                        height="667"
                                        className="h-48 object-contain rounded-md w-full object-top transition duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="mt-6 relative">
                                    <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">
                                        {work.title}
                                    </h3>
                                    <p className="mt-6 mb-8 px-4 text-justify text-gray-600 dark:text-gray-300">
                                        {work.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full flex justify-start my-2">
                        <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RecentWork;
