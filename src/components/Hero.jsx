import React from 'react';
import {BsFillPlayCircleFill} from "react-icons/bs";
import {MdOutlineCallEnd} from "react-icons/md";

const Hero = () => {
    return (<>
        <div className="pt-4 md:py-6 m-auto px-6 md:px-4 container px-6">
            <div
                aria-hidden="true"
                className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"
            />
            <div className="relative lg:flex lg:items-center lg:gap-12">
                <div
                    className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
                    <h1 className="text-gray-900 flex flex-col font-bold text-4xl md:text-6xl lg:text-4xl xl:text-6xl dark:text-white">
                        <span>APOSTOL SI</span>
                        <span
                            className={"rounded-md py-2 px-4 text-white md:ml-36 md:w-7/12 text-center mt-2 bg-blue-400"}>ASOCIATII</span>
                    </h1>
                    <p className="mt-8 text-gray-600 dark:text-gray-300 text-justify text-md">
                        Our company boasts a highly skilled team of professionals, each possessing a wealth of
                        expertise and a passion for innovation.
                        We take pride in our talented team, whose diverse backgrounds and collaborative spirit drive
                        the success of every project we undertake.</p>
                    <div className="flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:space-x-8 mt-16">
                        <button
                            className="relative flex h-14 w-52 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
          <span
              className="relative text-base flex items-center justify-evenly font-semibold text-sky-600 dark:text-white">
            <span className={"text-blue-400"}>Watch Demo</span>
              <span className={"ms-3"}> <BsFillPlayCircleFill color={"#007cff"}
                                                              style={{width: "25px", height: "25px"}}/></span>
          </span>
                        </button>
                        <button
                            className="relative  h-14 w-52 items-center justify-center px-6 bg-blue-400 rounded-full ">
          <span className="relative text-base flex items-center justify-evenly font-semibold text-white">
            <span>Book a Call</span>
              <span><MdOutlineCallEnd color={"white"} style={{width: "25px", height: "25px"}}/></span>
          </span>
                        </button>
                    </div>

                    <div className="mt-16 flex gap-6 lg:gap-12 justify-between grayscale dark:grayscale-0">
                        <img
                            src="/assets/companies/fiverr.png"
                            className="h-8 sm:h-10 w-auto lg:h-12"
                            alt=""
                        />
                        <img
                            src="/assets/companies/microsoft.png"
                            className="h-8 sm:h-10 w-auto lg:h-12"
                            alt=""
                        />
                        <img
                            src="/assets/companies/apple.png"
                            className="h-8 sm:h-10 w-auto lg:h-12"
                            alt=""
                        />
                        <img
                            src="/assets/companies/tesla.png"
                            className="h-8 sm:h-10 w-auto lg:h-12"
                            alt=""
                        />
                    </div>
                </div>
                <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
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