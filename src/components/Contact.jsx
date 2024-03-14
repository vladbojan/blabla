"use client"
import React from 'react';
import 'aos/dist/aos.css';
import {useLanguage} from "../../context/LanguageContext";

const Contact = () => {
    const { translations } = useLanguage();
    return (
        <>
            <div className={"w-full xl:w-10/12 mx-auto"} id={"contact"}>
                <section id="contact" className="contact-section container contact-style-3 bg-white">
                    <div className="container mx-auto px-4 py-16">
                        <div className="md:mx-auto md:w-3/4 lg:w-1/2"
                             data-aos="fade-up"
                             data-aos-offset="200"
                             data-aos-easing="ease-in-out">
                            <div className="text-center mb-12">
                                <h3 className="text-2xl font-bold mb-4">{translations.contact.title}</h3>
                                <p className="text-gray-600">{translations.contact.subtitle}</p>
                            </div>
                        </div>
                        <div className="md:flex justify-between lg:space-x-8">
                            <div className="md:w-2/3 lg:w-3/4">
                                
                                    
                                    
                                    <div className="text-center mb-12">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="text-right">
                                                <p className="text-gray-600">{translations.contact.employer}</p>
                                                <p className="text-gray-600">{translations.contact.employerDesc}</p>
                                            </div>
                                            <div className="relative mb-12" data-aos="fade-right"
                                                data-aos-offset="210"
                                                data-aos-easing="ease-in-out"
                                                style={{
                                                    justifySelf: 'center'
                                                }}
                                                >
                                                <img
                                                    src="/assets/qr-code-formular_angajator.png"
                                                    alt="scan"
                                                />
                                            </div>
                                            <div className="text-right">
                                                <p className="text-gray-600">{translations.contact.employee}</p>
                                                <p className="text-gray-600">{translations.contact.employeeDesc}</p>
                                            </div>
                                            <div className="relative" data-aos="fade-right"
                                                data-aos-offset="210"
                                                data-aos-easing="ease-in-out"
                                                style={{
                                                    justifySelf: 'center'
                                                }}
                                                >
                                                <img
                                                    src="/assets/qr-code-formular_angajat.png"
                                                    alt="scan"
                                                />
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>

                            

                            <div className="mt-8 md:mt-0 md:w-1/3 lg:w-1/4">
                                <div className=" flex flex-col px-4  space-y-8">
                                    <div className="flex items-center shadow-md rounded-md bg-gray-100 hover:bg-blue-500 hover:text-white hover:bg-blue-500 hover:text-white py-5"
                                         data-aos="fade-down"
                                         data-aos-offset="200"
                                         data-aos-easing="ease-in-out">
                                        <i className="lni lni-phone text-gray-400"></i>
                                        <div className="ml-4">
                                            {translations.contact.contactDetails.phone.map((phone, index) => (
                                                <p key={index} className="text-sm">{phone}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center shadow-md rounded-md bg-gray-100 hover:bg-blue-500 hover:text-white py-5"
                                         data-aos="fade-down"
                                         data-aos-offset="220"
                                         data-aos-easing="ease-in-out">
                                        <i className="lni lni-envelope text-gray-400"></i>
                                        <div className="ml-4">
                                            {translations.contact.contactDetails.email.map((email, index) => (
                                                <p key={index} className="text-sm">{email}</p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center shadow-md rounded-md bg-gray-100 hover:bg-blue-500 hover:text-white py-5"
                                         data-aos="fade-down"
                                         data-aos-offset="200"
                                         data-aos-easing="ease-in-out">
                                        <i className="lni lni-map-marker text-gray-400"></i>
                                        <div className="ml-4">
                                            {translations.contact.contactDetails.address.map((email, index) => (
                                                <p key={index} className="text-sm">{email}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className={"w-full flex justify-start my-2"}>
                    <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF"></path>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Contact;
