"use client"
import React, {useContext} from 'react';
import 'aos/dist/aos.css';
import { useLanguage} from '../../context/LanguageContext'; // Import the LanguageContext

const CompanyJobs = () => {
    const { translations } = useLanguage();

    // Array of objects containing data for each card
    const jobsData = [
        {
            key: 'graphicsDesign', // Unique key for each job
            icon: '/assets/skills/graphic.png',
            title: translations.companyJobs.graphicsDesign.title, // Access translated title
            description: translations.companyJobs.graphicsDesign.description, // Access translated description
            link: '#'

        },
        {
            key: 'printDesign',
            icon: '/assets/skills/print.png',
            title: translations.companyJobs.printDesign.title, // Access translated title
            description: translations.companyJobs.printDesign.description,
            link: '#'
        },
        {
            key: 'businessAnalysis',
            icon: '/assets/skills/analytics.png',
            title: translations.companyJobs.businessAnalysis.title, // Access translated title
            description: translations.companyJobs.businessAnalysis.description,
            link: '#'
        },
        {
            key: 'webDevelopment',
            icon: '/assets/skills/development.png',
            title: translations.companyJobs.webDevelopment.title, // Access translated title
            description: translations.companyJobs.webDevelopment.description,
            link: '#'
        },
        {
            icon: '/assets/skills/security.png',
            title: translations.companyJobs.bestSecurity.title, // Access translated title
            description: translations.companyJobs.bestSecurity.description,
            link: '#'
        },
        {
            key: 'Designing',
            icon: '/assets/skills/desing.png',
            title: translations.companyJobs.webDesign.title, // Access translated title
            description: translations.companyJobs.webDesign.description,
            link: '#'
        }
    ];

    return (
        <>
            <div className="relative py-16" id={"about"}>
                <div className="mb-12 space-y-2 text-center"
                     data-aos="fade-down"
                     data-aos-offset="200"
                     data-aos-easing="ease-in-out"
                >
                    <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">{translations.companyJobs.companyJobsTitle}</h2>
                    <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
                        {translations.companyJobs.companyJobsDescription}
                    </p>
                </div>
                <div className="container relative m-auto px-6 text-gray-500 md:px-12">
                    <div className={"w-full flex justify-end my-2"}>
                        <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF"></path>
                        </svg>
                    </div>
                    <div className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3">
                        {/* Map over the jobsData array to render each card dynamically */}
                        {jobsData.map((job, index) => (
                            <div key={index} className="group space-y-6 border shadow-md border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-6 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none"
                                 data-aos="fade-right"
                                 data-aos-offset={(index + 30) * 2}
                                 data-aos-easing="ease-in-out">
                                <img
                                    className="mx-auto w-44"
                                    src={job.icon}
                                    alt="illustration"
                                    loading="lazy"
                                />
                                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                    {job.title}
                                </h3>
                                <p>
                                    {job.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className={"w-full flex justify-start my-2"}>
                        <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CompanyJobs;
