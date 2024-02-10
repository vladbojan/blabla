"use client"
import React, { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
import {MdCancel} from "react-icons/md";

const Team = () => {
    const [selectedMember, setSelectedMember] = useState(null);
    const [open, setOpen] = useState(false);

    // Function to handle opening the dialog and setting the selected member
    const handleOpen = (member) => {
        setSelectedMember(member);
        setOpen(true);
    };

    // Function to handle closing the dialog
    const handleClose = () => {
        setSelectedMember(null);
        setOpen(false);
    };

    const teamMembers = [
        {
            name: 'Mariana Manole',
            position: 'Senior Quality Assurance',
            image: '/assets/team/user.png',
            pdf: '/assets/cv/CV Mariana Manole.pdf',
            description: 'Mariana Manole is a highly skilled Senior Quality Assurance Engineer with a proven track record of ensuring the quality and reliability of software products. With meticulous attention to detail, she excels in identifying and resolving issues to deliver top-notch solutions.',
            destinations: ['Beach Getaway', 'Mountain Retreat', 'City Exploration', 'Cultural Tour'],
            companies: ['Tech Solutions LLC', 'Digital Innovators Inc', 'WebTech Solutions'],
            skills: ['Manual Testing', 'Automated Testing', 'Test Planning'],
        },
        {
            name: 'Vlad Bojan',
            position: 'Software Architect (Consultant)',
            image: '/assets/team/user.png',
            pdf: '/assets/cv/CV Vlad Bojan.pdf',
            description: 'Vlad Bojan is an experienced Software Architect with a passion for creating scalable and efficient solutions. He specializes in designing and implementing high-performance software systems.',
            destinations: ['Mountain Trek', 'Beach Resort', 'Urban Exploration', 'Historical Tour'],
            companies: ['Tech Solutions LLC', 'Digital Innovators Inc', 'WebTech Solutions'],
            skills: ['JavaScript', 'React.js', 'Node.js'],
        },
        {
            name: 'Ilie Anton',
            position: 'Senior Full Stack Developer',
            image: '/assets/team/user.png',
            pdf: '/assets/cv/CV Ilie Anton.pdf',
            description: 'Ilie Anton is a skilled Full Stack Developer known for crafting robust and user-friendly web applications. With a keen eye for detail, he excels in both front-end and back-end development.',
            destinations: ['Adventure Safari', 'Cultural Immersion', 'Mountain Retreat', 'City Exploration'],
            companies: ['Tech Solutions LLC', 'Digital Innovators Inc', 'WebTech Solutions'],
            skills: ['JavaScript', 'React.js', 'Node.js'],
        },
        {
            name: 'Jack',
            position: 'Senior JAVA Backend Developer',
            image: '/assets/team/user.png',
            pdf: '/assets/cv/CV Ilie Anton.pdf',
            description: 'Ilie Anton is a skilled Full Stack Developer known for crafting robust and user-friendly web applications. With a keen eye for detail, he excels in both front-end and back-end development.',
            destinations: ['Adventure Safari', 'Cultural Immersion', 'Mountain Retreat', 'City Exploration'],
            companies: ['Tech Solutions LLC', 'Digital Innovators Inc', 'WebTech Solutions'],
            skills: ['JavaScript', 'React.js', 'Node.js'],
        }

    ];

    return (
        <>
            <div className="py-20" id="team">
                <div className="container mx-auto px-6 text-center md:px-12">
                    <div
                        className="mb-16"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out"
                    >
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                            Our Team
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
                            Our company boasts a highly skilled team of professionals, each possessing a wealth
                            of expertise and a passion for innovation.
                        </p>
                    </div>
                    <div className={'w-full flex justify-end my-2'}>
                        <svg width="110" height="72" viewBox="0 0 110 72" fill="none">
                            <path
                                d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z"
                                fill="#EBF4FF"
                            />
                        </svg>
                    </div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {teamMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="group space-y-8 border-t-4 p-4 border-gray-100 dark:border-gray-800"
                             data-aos="fade-up"
                             data-aos-offset={(index + 30) * 10}
                             data-aos-easing="ease-in-out">
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
                                    <h4 className="text-2xl text-gray-700 dark:text-white">{member.name}</h4>
                                    <span className="block text-sm text-gray-500">{member.position}</span>
                                </div>
                                <button
                                    className="relative flex h-11 w-10/12 mx-auto items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                                    onClick={() => handleOpen(member)}
                                >
                                    <span className="relative text-base font-semibold text-sky-600 dark:text-white">
                                        View Profile
                                    </span>
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
                </div>
            </div>
            <Dialog
                style={{overflow: 'auto'}}
                size="lg"
                open={open}
                handler={handleClose} // Close the dialog when handler is called
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
            >
                <div className={"w-full flex justify-end mt-4"}>
                    <span><MdCancel  onClick={() => setOpen(false)} color={"#2196f3"}  className={"me-6 w-6 h-6 cursor-pointer"}/></span>
                </div>
                <DialogBody style={{ overflowY: 'auto' }}>
                    {selectedMember && (
                        <>
                            <h2 className="text-center text-2xl font-bold mb-4">{selectedMember.name}</h2>
                            <div className="flex justify-center mb-4">
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="rounded-full w-32 h-32 border-2 border-gray-300"
                                />
                            </div>
                            <div className="text-left">
                                <h3 className="font-bold mb-2">Description:</h3>
                                <p className="mb-4">{selectedMember.description}</p>
                                <h3 className="font-bold mb-2">Destinations:</h3>
                                <ul className="list-disc list-inside mb-4">
                                    {selectedMember.destinations.map((destination, index) => (
                                        <li key={index}>{destination}</li>
                                    ))}
                                </ul>
                                <h3 className="font-bold mb-2 ">Companies:</h3>
                                <ul className="list-disc list-inside mb-4 flex justify-evenly">
                                    {selectedMember.companies.map((company, index) => (
                                        <li key={index}>{company}</li>
                                    ))}
                                </ul>
                                <h3 className="font-bold mb-2">Skills:</h3>
                                <ul className="list-disc list-inside flex justify-evenly items-center">
                                    {selectedMember.skills.map((skill, index) => (
                                        <span role="img" aria-label="star" key={index}>
                                            ⭐{' '}
                                            {skill}{' '}
                                          </span>
                                    ))}

                                </ul>
                            </div>
                        </>
                    )}
                </DialogBody>
            </Dialog>
        </>
    );
};

export default Team;
