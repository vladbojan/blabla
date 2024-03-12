"use client"
import React, {useState} from 'react';
import {BsFillPlayCircleFill} from "react-icons/bs";
import {MdOutlineCallEnd} from "react-icons/md";
import Modal from 'react-modal';
import 'aos/dist/aos.css';
import Link from "next/link";
import { useLanguage } from '../../context/LanguageContext';


const VideoModal = ({isOpen, onClose}) => {
    const videoId = 'pWOv9xcoMeY?si=jigNnHAd0jAIc4-t';

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        contentLabel="Video Modal"
        ariaHideApp={false}
        style={{
            overlay: {
                backgroundColor: 'rgba(0,0,0,0.5)',
                zIndex: '40',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }, content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                width: '80%',
                maxWidth: '80%',
                maxHeight: '100%',
                borderRadius: '4px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                padding: 0, // Remove padding
            }
        }}
    >
        <div
            className="relative"
            style={{
                width: '100%', // Ensure full width
                height: '0', paddingBottom: '56.25%', // Aspect ratio 16:9 for video container
                overflow: 'hidden', // Hide any overflow
            }}
        >
            <iframe
                title="YouTube Video"
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?controls=1`}
                frameBorder="0"
                allowFullScreen
                style={{width: '100%', height: '100%'}} // Adjust iframe size here
            />
        </div>

    </Modal>);
};

const Hero = () => {
    const [videoModalOpen, setVideoModalOpen] = useState(false);
    const { language, translations } = useLanguage();
    const openVideoModal = () => {

        setVideoModalOpen(true);
    };

    const closeVideoModal = () => {
        setVideoModalOpen(false);
    };
    return (
        <>
            <div className="pt-4 md:py-6 m-auto px-6 md:px-4 container px-6" id={"home"}>
            <div
                aria-hidden="true"
                className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"
            />
            <div className="relative lg:flex lg:items-center lg:gap-12" >
                <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12"
                     data-aos="fade-right"
                     data-aos-offset="400"
                     data-aos-easing="ease-in-out"
                >
                    <h1 className="text-gray-900 flex flex-col font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl dark:text-white">
                        <span>APOSTOL <span className={"text-blue-400 underline decoration-blue-400"}>SI</span></span>
                        <span
                            className={"rounded-md py-2 px-4  md:ml-36 md:w-7/12 text-center mt-2 text-gray-900 underline decoration-blue-400 underline-offset-4 "}>ASOCIATII</span>
                    </h1>
                    <p className="mt-8 text-gray-600 dark:text-gray-300 text-justify text-md">
                        {translations.hero.description}</p>
                    <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:space-x-8 mt-16">
                        <button
                            className="relative flex h-14 w-52 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                            onClick={openVideoModal}
                        >
                            <span
                                className="relative text-base flex items-center justify-evenly font-semibold text-sky-600 dark:text-white">
                            <span className="text-blue-400">{translations.hero.cta1}</span>
                            <span className="ms-3">
                                <BsFillPlayCircleFill color="#007cff" style={{width: '25px', height: '25px'}}/>
                            </span>
                            </span>
                        </button>

                        <VideoModal isOpen={videoModalOpen} onClose={closeVideoModal}/>
                        <button
                            className="relative h-14 w-52 items-center justify-center px-6 bg-blue-500 rounded-full"
                            onClick={() => {
                                window.location.href = 'mailto:office@apostolsiasociatii.eu';
                            }}
                        >
                            <span className="relative text-base flex items-center justify-evenly font-semibold text-white">
                                <span>{translations.hero.cta2}</span>
                                <span><MdOutlineCallEnd color={"white"} style={{width: "25px", height: "25px"}}/></span>
                            </span>
                        </button>

                    </div>

                    <div className="mt-16 flex gap-6 lg:gap-12 justify-between items-center ">
                        <Link href="https://www.florariairis.ro/" target="_blank">
                                <img
                                    src="/assets/companies/Floraria.png"
                                    className="h-14 sm:h-12 w-auto lg:h-10 cursor-pointer"
                                    alt=""
                                />
                        </Link>
                        <Link href="https://www.romstal.ro/" target="_blank">
                        <img
                            src="/assets/companies/romstal.png"
                            className="h-8 sm:h-10 w-auto lg:h-6 cursor-pointer"
                            alt=""
                        />
                        </Link>
                        <Link href="https://evohouse.eu/" target="_blank">
                        <img
                            src="/assets/companies/evohouse.png"
                            className="h-8 sm:h-10 w-auto lg:h-6 cursor-pointer"
                            alt=""
                        />
                        </Link>
                        <Link href="https://acgbd.com/" target="_blank">
                        <img
                            src="/assets/companies/acgbd.png"
                            className="h-8 sm:h-10 w-auto lg:h-6 cursor-pointer"
                            alt=""
                        />
                        </Link>
                    </div>
                </div>
                <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16"
                     data-aos="fade-down"
                     data-aos-offset="400"
                     data-aos-easing="ease-in-out">
                    <img
                        src="/assets/companies/company.jpg"
                        alt="project illustration"
                        height=""
                        width=""
                    />
                </div>
            </div>
        </div>
    </>);
};

export default Hero;