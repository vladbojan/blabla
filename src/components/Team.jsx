"use client"
import React, {useEffect} from 'react';
import SwiperCore, {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
SwiperCore.use([Pagination]);
const Team = () => {
    const teamMembers = [
        {
            name: 'Hentoni Doe',
            position: 'CEO-Founder',
            image: '/assets/team/man.png',
            pdf: '/assets/cvs/CV Vitalii Sokol QA Final.pdf'
        },
        {
            name: 'Anabelle Doe',
            position: 'Chief Operations Officer',
            image: '/assets/team/man.png'
        },
        {
            name: 'Jonathan Doe',
            position: 'Chief Technical Officer',
            image: '/assets/team/man.png'
        },
        {
            name: 'Jonathan Doe',
            position: 'Chief Technical Officer',
            image: '/assets/team/man.png'
        },
        {
            name: 'Jonathan Doe',
            position: 'Chief Technical Officer',
            image: '/assets/team/man.png'
        }
    ];


    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <>
            <div className="py-20">
                <div className="container mx-auto px-6 text-center md:px-12">
                    <div className="mb-16">
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                            Our Team
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
                            Our company boasts a highly skilled team of professionals, each possessing a wealth of
                            expertise and a passion for innovation.
                        </p>
                    </div>
                    <div className={"w-full flex justify-end my-2"}>
                        <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF"></path>
                        </svg>
                    </div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={4}
                        navigation={true}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1 // For mobile devices
                            },
                            768: {
                                slidesPerView: 2 // For tablets
                            },
                            1024: {
                                slidesPerView: 4 // For desktops and larger screens
                            }
                        }}
                    >
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={index}>
                                <div className="group space-y-8 border-t-4 p-4 border-gray-100 dark:border-gray-800">
                                    <div className="mx-auto mt-16 h-32 w-32 rotate-45 overflow-hidden rounded-[2rem]">
                                        <img
                                            className="mx-auto h-full w-full -rotate-45 scale-125 object-cover transition duration-300 group-hover:scale-[1.4]"
                                            src={member.image}
                                            alt={member.name}
                                            loading="lazy"
                                            width={1000}
                                            height={667}
                                        />
                                    </div>
                                    <div className="space-y-4 text-center">
                                        <div>
                                            <h4 className="text-2xl text-gray-700 dark:text-white">
                                                {member.name}
                                            </h4>
                                            <span className="block text-sm text-gray-500">{member.position}</span>
                                        </div>
                                        <button
                                            className="relative flex h-11 w-10/12 mx-auto items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                                            <span
                                                className="relative text-base font-semibold text-sky-600 dark:text-white">View Profile</span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
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

export default Team;
