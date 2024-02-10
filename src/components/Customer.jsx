import React from 'react';

const Customer = () => {
    const companies = [
        {
            name: 'Floraria Iris',
            description: 'Innovating Success Through Trusted Collaborations. Empowering Businesses Worldwide with Excellence.',
            link: 'https://www.florariairis.ro/',
            image: '/assets/companies/Floraria.png'
        },
        {
            name: 'Digital Innovators Inc',
            description: 'Innovating Success Through Trusted Collaborations. Empowering Businesses Worldwide with Excellence.',
            link: 'https://acgbd.com/',
            image: '/assets/companies/acgbd.png'
        },
        {
            name: 'WebTech Solutions',
            description: 'Innovating Success Through Trusted Collaborations. Empowering Businesses Worldwide with Excellence.',
            link: 'https://evohouse.eu/',
            image: '/assets/companies/evohouse.png'
        },
        {
            name: 'Creative Minds Ltd',
            description: 'Innovating Success Through Trusted Collaborations. Empowering Businesses Worldwide with Excellence.',
            link: 'https://www.romstal.ro/',
            image: '/assets/companies/romastal.png'
        },
        {
            name: 'Creative Minds Ltd',
            description: 'Innovating Success Through Trusted Collaborations. Empowering Businesses Worldwide with Excellence.',
            link: 'https://www.siqsess.com/#/home',
            image: '/assets/companies/siqces.png'
        },
        {
            name: 'Creative Minds Ltd',
            description: 'Innovating Success Through Trusted Collaborations. Empowering Businesses Worldwide with Excellence.',
            link: 'https://www.siqsess.com/#/home',
            image: '/assets/companies/siqces.png'
        }
    ];

    return (
        <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6" id={"customer"}>
            <div className="mb-6 space-y-2 text-center"
                 data-aos="fade-down"
                 data-aos-offset="200"
                 data-aos-easing="ease-in-out">
                <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Trusted Customers</h2>
                <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
                    Trusted Customers: Discover a curated list of esteemed businesses and organizations that have entrusted us with their needs, embodying our dedication to excellence and trustworthiness
                </p>
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"}>
                {companies.map((company, index) => (
                    <div key={index} className=" z-1 flex flex-col justify-center overflow-hidden py-2 sm:py-4">
                        <div className="group cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-md ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                            <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-blue-400 transition-all duration-300 group-hover:scale-[10]" />
                            <div className="relative z-1 mx-auto max-w-md">
                                <img
                                    src={company.image}
                                    alt={company.name}
                                    className="h-20 w-20 object-cover rounded-full bg-blue-400 transition-all duration-300 group-hover:bg-blue-400"
                                />
                                <h1 className={"my-2 text-lg font-semibold text-blue-400 leading-7 transition-all duration-300 group-hover:text-white/90"}>{company.name}</h1>
                                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                    <p>
                                        {company.description}
                                    </p>
                                </div>
                                <div className="pt-5 text-base font-semibold leading-7">
                                    <p>
                                        <a
                                            href={company.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sky-500 transition-all duration-300 group-hover:text-white"
                                        >
                                           Visit for more  →
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Customer;
