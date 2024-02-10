"use client"
import React, {useState, useEffect} from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Document, Page, pdfjs} from 'react-pdf';
import Modal from 'react-modal';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import {TbZoomInFilled, TbZoomOutFilled} from "react-icons/tb";
import {FaMinusCircle, FaPlusCircle} from "react-icons/fa";
import {GiCancel} from "react-icons/gi";
import 'aos/dist/aos.css';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString();

const PdfViewer = ({selectedPdf}) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [scale, setScale] = useState(0.7); // Initial scale

    const onDocumentLoadSuccess = ({numPages}) => {
        setNumPages(numPages);
    };

    const zoomIn = () => {
        setScale(scale + 0.1);
    };

    const zoomOut = () => {
        setScale(scale - 0.1);
    };

    const increaseFontSize = () => {
        setScale(scale + 0.1);
    };

    const decreaseFontSize = () => {
        setScale(scale - 0.1);
    };
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4 sticky top-0 z-10 bg-white w-full flex justify-center">
                <button onClick={zoomIn}
                        className="bg-gray-200 hover:bg-gray-300 flex flex-col justify-center rounded-md items-center p-2">
                    <TbZoomInFilled className="w-6 h-6"/>
                    <span className="ml-2">Zoom In</span>
                </button>
                <button onClick={zoomOut}
                        className="bg-gray-200 flex flex-col justify-center hover:bg-gray-300 rounded-md items-center p-2">
                    <TbZoomOutFilled className="w-6 h-6"/>
                    <span className="ml-2">Zoom Out</span>
                </button>
                <button onClick={increaseFontSize}
                        className="bg-gray-200 hover:bg-gray-300 flex flex-col justify-center items-center rounded-md p-2">
                    <FaPlusCircle className="w-6 h-6"/>
                    <span className="ml-2">Increase Font</span>
                </button>
                <button onClick={decreaseFontSize}
                        className="bg-gray-200 hover:bg-gray-300 flex flex-col justify-center items-center rounded-md p-2">
                    <FaMinusCircle className="w-6 h-6"/>
                    <span className="ml-2">Decrease Font</span>
                </button>
            </div>
            <div>
                <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} scale={scale}/>
                </Document>
            </div>
        </div>

    );
};

const Team = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedPdf, setSelectedPdf] = useState(null);
    const [isMobileView, setIsMobileView] = useState(false);

    const openModal = (pdf) => {
        setSelectedPdf(pdf);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const teamMembers = [
        {
            name: 'Mariana Manole',
            position: 'Senior Quality Assurance Engineer',
            image: '/assets/team/man.png',
            pdf: '/assets/cv/CV Vitalii Sokol QA Final.pdf'
        },
        {
            name: 'Vlad Bojan',
            position: 'Software Architect (Consultant)',
            image: '/assets/team/aiman.png',
            pdf: '/assets/cv/CV-Olexandr-Ivchenko.pdf'
        },
        {
            name: 'Ilie Anton',
            position: 'Full Stack Developer',
            image: '/assets/team/ali.png',
            pdf: '/assets/cv/MeronHayleNP (2).pdf'
        },
        {
            name: 'Ilie Anton',
            position: 'Full Stack Developer',
            image: '/assets/team/ali.png',
            pdf: '/assets/cv/MeronHayleNP (2).pdf'
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
    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = new URL(
            'pdfjs-dist/build/pdf.worker.min.js',
            import.meta.url,
        ).toString();
    }, []);
    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768); // Check if screen width is less than or equal to 768 pixels
        };

        // Set initial mobile view state
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="py-20" id={"team"}>
                <div className="container mx-auto px-6 text-center md:px-12">
                    <div className="mb-16"
                         data-aos="fade-down"
                         data-aos-offset="200"
                         data-aos-easing="ease-in-out"
                    >
                        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
                            Our Team
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 lg:mx-auto lg:w-8/12">
                            Our company boasts a highly skilled team of professionals, each possessing a wealth of
                            expertise and a passion for innovation.
                        </p>
                    </div>
                    <div className={"w-full flex justify-end my-2"}>
                        <svg width="110" height="72" viewBox="0 0 110 72" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z"
                                fill="#EBF4FF"></path>
                        </svg>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={100}
                        slidesPerView={3}
                        navigation
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
                                            <h4 className="text-2xl text-gray-700 dark:text-white">
                                                {member.name}
                                            </h4>
                                            <span className="block text-sm text-gray-500">{member.position}</span>
                                        </div>
                                        {member.pdf &&
                                            <button
                                                className="relative flex h-11 w-10/12 mx-auto items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                                                onClick={() => openModal(member.pdf)}>
                                                <span
                                                    className="relative text-base font-semibold text-sky-600 dark:text-white">View Profile</span>
                                            </button>
                                        }
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={"w-full flex justify-start my-2"}>
                        <svg width="110" height="72" viewBox="0 0 110 72" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z"
                                fill="#EBF4FF"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Developer Profile"
                ariaHideApp={false}
                style={{
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: '40', // Increase z-index to ensure it's above other elements
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        width: isMobileView ? '100%' : '60%', // Set width to 100% on mobile devices, 60% on larger screens
                        maxWidth: isMobileView ? '100%' : '60%', // Decrease max width to 80%
                        maxHeight: '90%', // Limit max height to prevent overflow
                        padding: '20px',
                        borderRadius: '4px',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Add a box shadow for depth
                        fontSize: '18px', // Increase font size
                        lineHeight: '1.5', // Increase line height for better readability
                        '@media (max-width: 768px)': {
                            width: '100%', // Set width to 100% for screens up to 768px wide (typically mobile devices)
                            maxWidth: '100%' // Ensure max width is also set to 100%
                        }
                    }
                }}
            >
                <div className={"w-full flex justify-end sticky top-0 z-20"}>
                    <button onClick={closeModal}><GiCancel className="w-6 h-6"/></button>
                </div>
                <PdfViewer selectedPdf={selectedPdf}/>
            </Modal>

        </>
    );
};

export default Team;
