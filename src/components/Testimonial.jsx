"use client"
import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useLanguage } from '../../context/LanguageContext';

const TestimonialCarousel = () => {
    const { translations } = useLanguage();

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/swiper/swiper-bundle.min.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    // Array of objects containing testimonial data
    const testimonials = [
        {
            avatar: 'assets/team/man.png',
            text: translations.testimonial.testimonial1,
            name: 'John Doe',
            position: 'Product Designer',
            logo: '/assets/logo.png'
        },
        {
            avatar: 'assets/team/man.png',
            text: translations.testimonial.testimonial2,
            name: 'John Doe',
            position: 'Product Designer',
            logo: '/assets/logo.png'
        },
        {
            avatar: 'assets/team/man.png',
            text: translations.testimonial.testimonial3,
            name: 'John Doe',
            position: 'Product Designer',
            logo: '/assets/logo.png'
        },
        {
            avatar: 'assets/team/man.png',
            text: translations.testimonial.testimonial4,
            name: 'John Doe',
            position: 'Product Designer',
            logo: '/assets/logo.png'
        },
        {
            avatar: 'assets/team/man.png',
            text: translations.testimonial.testimonial5,
            name: 'John Doe',
            position: 'Product Designer',
            logo: '/assets/logo.png'
        },
    ];

    return (
        <div id={"testimonial"} className="xl:container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
            <h2 className="mb-12 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl"
                data-aos="fade-down"
                data-aos-offset="200"
                data-aos-easing="ease-in-out">
                {translations.testimonial.title}
            </h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="mx-auto text-center md:w-8/12 lg:w-7/12">
                            <div className="">
                                <div className="mx-auto space-y-6 text-center md:w-8/12 lg:w-7/12">
                                    <img
                                        className="mx-auto !h-24 !w-24 rounded-full"
                                        src={testimonial.avatar}
                                        alt="user avatar"
                                        height={320}
                                        width={320}
                                        loading="lazy"
                                    />
                                    <p>
                                        <span className="font-serif">"</span> {testimonial.text} <span className="font-serif">"</span>
                                    </p>
                                    <div>
                                        <h6 className="text-lg font-semibold leading-none">{testimonial.name}</h6>
                                        <span className="text-xs text-gray-500">{testimonial.position}</span>
                                    </div>
                                    <img
                                        className="mx-auto w-24"
                                        src={testimonial.logo}
                                        alt="company logo"
                                        height={400}
                                        width={142}
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialCarousel;
