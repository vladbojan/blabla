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
            description: 'With a deep-rooted passion for organizational development and a people-centered approach, I am committed to fostering an inclusive and dynamic work environment. My experience in human resources has equipped me with the skills necessary to efficiently manage recruitment, training, and development processes, thereby contributing to the growth and success of APOSTOL si ASOCIATII. I am driven by the challenge of building strong teams that share the values and objectives of our company.',
            destinations: ['Talent Management: Extensive experience in identifying, attracting, and retaining top talent, ensuring our team is comprised of the best and brightest professionals.', 
            'Development and Training: Implemented development and training programs that encourage professional and personal growth among employees.', 
            'Organizational Culture: Advocated for a positive organizational culture that fosters collaboration, innovation, and a commitment to excellence.'],
            companies: ['Expertise in labor laws and HR practices', 'Capability to manage multiple priorities and stay organized'],
            skills: ['Excellent communication and interpersonal skills', 'Ability to work effectively in both team and independent settings'],
        },
        {
            name: 'Ilie Anton',
            position: 'Project Manager',
            image: '/assets/team/user.png',
            description: 'I am a Project Manager with 20 of experience in leading projects from inception to completion across various industries, including technology and construction. With a strong focus on achieving project goals within the constraints of scope, time, and budget, I have a proven track record of delivering high-quality results that meet or exceed stakeholder expectations. My approach combines effective communication, team leadership, and risk management to navigate complex project landscapes successfully. I am passionate about fostering collaboration and innovation to drive project success.',
            destinations: ['Project Delivery: Successfully managed and delivered over [number] projects, ranging from small-scale initiatives to large, multi-disciplinary ventures, resulting in [specific outcomes, e.g., increased revenue, enhanced efficiency].',
            'Team Leadership: Led diverse project teams, cultivating a collaborative environment and empowering team members to achieve their full potential while meeting project deliverables.',
            'Stakeholder Engagement: Established and maintained strong relationships with stakeholders, ensuring open lines of communication and alignment with project goals and expectations.',
            'Risk Management: Implemented comprehensive risk management practices to identify, assess, and mitigate potential risks, ensuring minimal impact on project timelines and outcomes.'],
            companies: ['Excellent communication and interpersonal skills','Strong leadership and team management capabilities'],
            skills: [],
        },
        {
            name: 'Vlad Bojan',
            position: 'Software Architect (Consultant)',
            image: '/assets/team/user.png',
            description: 'As a Software Architect with 16 years of experience in the tech industry, I specialize in crafting scalable, resilient, and efficient software solutions. My passion lies in bridging the gap between complex business needs and technological innovation, ensuring that the software architectures I design not only meet current requirements but are also future-proof. With a strong foundation in both software development and architectural design principles, I am committed to leading teams through the challenges of modern software projects, from conception to deployment.',
            destinations: ['Architectural Design: Led the design and implementation of robust software architectures for 10s of enterprise-level projects, focusing on scalability, security, and performance.',
            'Technology Leadership: Served as a technical lead, guiding cross-functional teams in the adoption of new technologies and best practices, resulting in enhanced productivity and software quality.',
            'Innovation and Problem-Solving: Pioneered the adoption of microservices architecture for a major project, significantly improving deployment times and system resilience.',
            'Continuous Learning: Regularly update my skill set to include the latest in cloud computing, containerization, and serverless architectures, ensuring that solutions remain cutting-edge.'],
            companies: ['Leadership', 'Communication', 'Architectural Styles'],
            skills: ['Java', 'React.js', 'Angular.js'],
        },
        {
            name: 'Ode Eka',
            position: 'Process Specialist',
            image: '/assets/team/user.png',
            description: 'With 6 of experience in process improvement and optimization, I have dedicated my career to enhancing operational efficiency and effectiveness within organizations. My expertise lies in analyzing existing processes, identifying areas for improvement, and implementing innovative solutions that drive productivity and quality. I am passionate about leveraging data-driven approaches and cutting-edge methodologies to solve complex challenges and achieve sustainable results. Through collaboration and leadership, I aim to foster an environment of continuous improvement and excellence.',
            destinations: ['Process Optimization: Successfully redesigned and implemented 10s of key processes, resulting in a marked improvement in efficiency and a significant reduction in waste.',
            'Project Management: Led cross-functional teams in the execution of process improvement projects, ensuring on-time and within-budget delivery with measurable enhancements in performance.',
            'Lean Six Sigma Implementation: Championed the adoption of Lean Six Sigma methodologies, facilitating training sessions for staff and overseeing the certification of [number] of Green and Black Belts within the organization.',
            'Strategic Planning: Contributed to the development of long-term operational strategies, incorporating process improvement plans that align with organizational goals and objectives.'],
            companies: ['Process Analysis', 'Process Mapping'],
            skills: [],
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
                size="lg"
                open={open}
                handler={handleClose} // Close the dialog when handler is called
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: .6, y: -100 },
                }}
            >
                <div className={"w-full flex justify-end mt-4"}>
                    <span><MdCancel  onClick={() => setOpen(false)} color={"#2196f3"}  className={"me-6 w-6 h-6 cursor-pointer"}/></span>
                </div>
                <DialogBody className={""}>
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
                                <h3 className="font-bold mb-2">Experience and Achievements:</h3>
                                <ul className="list-disc list-inside mb-4">
                                    {selectedMember.destinations.map((destination, index) => (
                                        <li key={index}>{destination}</li>
                                    ))}
                                </ul>
                                <h3 className="font-bold mb-2">Skills:</h3>
                                <ul className="list-disc list-inside mb-4 flex justify-evenly items-center">
                                    {selectedMember.companies.map((company, index) => (
                                        <span role="img" aria-label="star" key={index}>⭐{' '}{company}{' '}</span>
                                    ))}
                                </ul>
                                <ul className="list-disc list-inside mb-4 flex justify-evenly items-center">
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
