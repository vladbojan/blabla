import React from 'react';
import {SiBisecthosting, SiJirasoftware} from "react-icons/si";
import {LiaConnectdevelop} from "react-icons/lia";
import 'aos/dist/aos.css';
const Features = () => {
    return (
        <>
            <div className="py-16" id={"features"}>
                <div className="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
                    <div className="lg:bg-gray-50 dark:lg:bg-darker lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
                        <div className="md:5/12 lg:w-1/2">
                            <img
                                data-aos="fade-down"
                                data-aos-offset="120"
                                data-aos-anchor="#example-anchor"
                                data-aos-easing="ease-in-out"
                                src="/assets/about-img.svg"
                                alt="image"
                                loading="lazy"
                                width=""
                                height=""
                            />
                        </div>
                        <div className="md:7/12 lg:w-1/2"
                             data-aos="fade-right"
                             data-aos-offset="120"
                             data-aos-easing="ease-in-out">
                            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                                The future of designing starts here
                            </h2>
                            <p className="my-8 text-gray-600 dark:text-gray-300">
                                The future of design begins its journey right here at APOSTOL SI ASOCIATII, where innovation meets creativity to shape tomorrow's digital landscape.
                            </p>
                            <div className="divide-y space-y-4 divide-gray-100 dark:divide-gray-800">
                                <div className="mt-8 flex gap-4 md:items-center">
                                    <div className="w-12 h-12 flex  justify-center items-center gap-4 rounded-full bg-indigo-100 dark:bg-indigo-900/20">
                                        <SiJirasoftware className={"w-6 h-6 text-blue-400"}/>
                                    </div>
                                    <div className="w-5/6"
                                         data-aos="fade-right"
                                         data-aos-offset="130"
                                         data-aos-easing="ease-in-out">
                                        <h4 className="font-semibold text-lg text-gray-700 dark:text-indigo-300">
                                            Software solutions
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Tailored software solutions | Expert consulting
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-4 flex gap-4 md:items-center"
                                     data-aos="fade-right"
                                     data-aos-offset="150"
                                     data-aos-easing="ease-in-out">
                                    <div className="w-12 h-12 flex  justify-center items-center gap-4 rounded-full bg-teal-100 dark:bg-teal-900/20">
                                        <LiaConnectdevelop  className={"w-6 h-6 text-blue-400"}/>
                                    </div>
                                    <div className="w-5/6">
                                        <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">
                                            Core Development
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Agile development methodology | Customer-centric
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-4 flex gap-4 md:items-center"
                                     data-aos="fade-right"
                                     data-aos-offset="170"
                                     data-aos-easing="ease-in-out">
                                    <div className="w-12 h-12 flex gap-4  flex  justify-center items-center rounded-full bg-gray-300 dark:bg-teal-900/20">
                                        <SiBisecthosting  className={"w-6 h-6 text-blue-400"} />
                                    </div>
                                    <div className="w-5/6">
                                        <h4 className="font-semibold text-lg text-gray-700 dark:text-teal-300">
                                           Hosting & Migration
                                        </h4>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Seamless integration capabilities | Proven track record
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Features;