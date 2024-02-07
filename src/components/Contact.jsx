import React from 'react';

const Contact = () => {
    return (
        <>
            <div className={"w-full xl:w-10/12 mx-auto"} id={"contact"}>
                <div className={"w-full flex justify-end my-2"}>
                    <svg width="110" height="72" viewBox="0 0 110 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M110 54.7589C110 85.0014 85.3757 66.2583 55 66.2583C24.6243 66.2583 0 85.0014 0 54.7589C0 24.5164 24.6243 0 55 0C85.3757 0 110 24.5164 110 54.7589Z" fill="#EBF4FF"></path>
                    </svg>
                </div>
                <section id="contact" className="contact-section container contact-style-3 bg-white">
                    <div className="container mx-auto px-4 py-16">
                        <div className="md:mx-auto md:w-3/4 lg:w-1/2">
                            <div className="text-center mb-12">
                                <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
                                <p className="text-gray-600">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
                            </div>
                        </div>
                        <div className="md:flex justify-between lg:space-x-8">
                            <div className="md:w-2/3 lg:w-3/4">
                                <form className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <input type="text" id="name" name="name" className="form-input pl-10 pr-4 py-3 w-full border rounded-lg" placeholder="Name" />
                                            <i className="lni lni-user absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"></i>
                                        </div>
                                        <div className="relative">
                                            <input type="email" id="email" name="email" className="form-input pl-10 pr-4 py-3 w-full border rounded-lg" placeholder="Email" />
                                            <i className="lni lni-envelope absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"></i>
                                        </div>
                                        <div className="relative">
                                            <input type="text" id="number" name="number" className="form-input pl-10 pr-4 py-3 w-full border rounded-lg" placeholder="Number" />
                                            <i className="lni lni-phone absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"></i>
                                        </div>
                                        <div className="relative">
                                            <input type="text" id="subject" name="subject" className="form-input pl-10 pr-4 py-3 w-full border rounded-lg" placeholder="Subject" />
                                            <i className="lni lni-text-format absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-400"></i>
                                        </div>
                                    </div>
                                    <textarea name="message" id="message" className="form-input pl-10 pr-4 py-3 w-full border rounded-lg" placeholder="Message" rows="6"></textarea>
                                    <button type="submit" className="button py-3 px-6 bg-[#f3f4f6] text-black shadow-md rounded-lg hover:bg-[#007cff] hover:text-white"><i className="lni lni-telegram-original"></i> Submit</button>
                                </form>
                            </div>
                            <div className="mt-8 md:mt-0 md:w-1/3 lg:w-1/4 ">
                                <div className=" flex flex-col px-4  space-y-8">
                                    <div className="flex items-center shadow-md rounded-md bg-gray-100 py-5">
                                        <i className="lni lni-phone text-gray-400"></i>
                                        <div className="ml-4">
                                            <p className="text-sm">0045939863784</p>
                                            <p className="text-sm">+004389478327</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center shadow-md rounded-md bg-gray-100 py-5">
                                        <i className="lni lni-envelope text-gray-400"></i>
                                        <div className="ml-4">
                                            <p className="text-sm">yourmail@gmail.com</p>
                                            <p className="text-sm">admin@yourwebsite.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center shadow-md rounded-md bg-gray-100 py-5">
                                        <i className="lni lni-map-marker text-gray-400"></i>
                                        <div className="ml-4">
                                            <p className="text-sm">John's House, 13/5 Road, Sidny United State Of America</p>
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