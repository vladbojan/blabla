import React from 'react';

const CompanyJobs = () => {
    // Array of objects containing data for each card
    const jobsData = [
        {
            icon: '/assets/skills/graphic.png',
            title: 'Graphics Design',
            description: 'Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.',
            link: '#'
        },
        {
            icon: '/assets/skills/print.png',
            title: 'Print Design',
            description: 'Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.',
            link: '#'
        },
        {
            icon: '/assets/skills/analytics.png',
            title: 'Business Analysis',
            description: 'Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.',
            link: '#'
        },
        {
            icon: '/assets/skills/development.png',
            title: 'Web Development',
            description: 'Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.',
            link: '#'
        },
        {
            icon: '/assets/skills/security.png',
            title: 'Best Security',
            description: 'Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.',
            link: '#'
        },
        {
            icon: '/assets/skills/desing.png',
            title: 'Web Design',
            description: 'Obcaecati, quam? Eligendi, nulla numquam natus laborum porro at cum, consectetur ullam tempora ipsa iste officia sed officiis! Incidunt ea animi officiis.',
            link: '#'
        }
    ];

    return (
        <>
            <div className="relative py-16">
                <div className="mb-12 space-y-2 text-center">
                    <h2 className="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Services</h2>
                    <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
                        The future of design begins its journey right here at APOSTOL SI ASOCIATII, where innovation meets creativity to shape tomorrow's digital landscape.
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
                            <div key={index} className="group space-y-6 border shadow-md border-gray-100 dark:border-gray-700 rounded-3xl bg-white dark:bg-gray-800 px-8 py-6 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
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
                                <a
                                    href={job.link}
                                    className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-100 dark:before:border-gray-600 before:transition before:duration-300 group-hover:before:scale-125"
                                >
                                    <span className="text-primary">→</span>
                                </a>
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