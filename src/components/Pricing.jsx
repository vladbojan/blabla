"use client"
import React from 'react';
import 'aos/dist/aos.css';
import {useLanguage} from "../../context/LanguageContext";

const Pricing = () =>{
    const { translations } = useLanguage();
    return (
        <>
            <div className="xl:container m-auto px-6 py-20 md:px-12 lg:px-20" id={"pricing"}>
                <div className="m-auto text-center lg:w-7/12">
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl"
                        data-aos="fade-down"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-out">
                        {translations.pricing.title}
                    </h2>
                </div>
                <div className="mt-12 grid items-center gap-6 md:grid-cols-2 lg:flex lg:space-x-8">
                    <div className="group relative md:col-span-1 lg:w-[32%]"
                         data-aos="fade-up"
                         data-aos-offset="250"
                         data-aos-easing="ease-in-out">
                        <div
                            aria-hidden="true"
                            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
                        />
                        <div className="relative space-y-8 p-8">
                            <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
                                {translations.pricing.monthly.title}
                            </h3>
                            <div className="relative flex justify-around">
                                <div className="flex">
            <span className="-ml-12 mt-2 text-3xl font-bold text-primary">
              $
            </span>
                                    <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">
              {translations.pricing.monthly.price}
            </span>
                                </div>
                                <span className="absolute right-6 bottom-2 text-xl font-bold text-primary">
            {translations.pricing.monthly.priceLabel}
          </span>
                            </div>
                            <ul
                                role="list"
                                className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
                            >
                                <li className="space-x-2">
                                    <span className="font-semibold text-primary">✓</span>
                                    <span>{translations.pricing.monthly.advantages.first}</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="font-semibold text-primary">✓</span>
                                    <span>{translations.pricing.monthly.advantages.second}</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="font-semibold text-primary">✓</span>
                                    <span>{translations.pricing.monthly.advantages.third}</span>
                                </li>
                            </ul>
                            <button
                                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
          <span className="relative text-base font-semibold text-sky-600 dark:text-white">
            {translations.pricing.monthly.button}
          </span>
                            </button>
                        </div>
                    </div>
                    <div className="group relative row-start-1 md:col-span-2 lg:w-[36%]"
                         data-aos="fade-up"
                         data-aos-offset="200"
                         data-aos-easing="ease-in-out">
                        <div
                            aria-hidden="true"
                            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
                        />
                        <div className="relative space-y-8 p-8">
                            <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
                                {translations.pricing.annual.title}
                            </h3>
                            <div className="overflow-hidden">
                                <div className="-mr-20 flex items-end justify-center">
                                    <div className="flex">
              <span className="-ml-6 mt-2 text-3xl font-bold text-primary">
                $
              </span>
                                        <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">
               {translations.pricing.annual.price}
              </span>
                                    </div>
                                    <div className="mb-2">
              <span className="block text-xl font-bold text-gray-500 dark:text-gray-400">
                .56
              </span>
                                        <span className="block text-xl font-bold text-primary">
                {translations.pricing.annual.priceLabel}
              </span>
                                    </div>
                                </div>
                                <div className="text-center text-2xl font-medium">
                                    <span className="text-gray-400 line-through">$234</span>
                                    <span className="font-semibold text-gray-700 dark:text-white">
              {translations.pricing.annual.discountedPrice}
            </span>
                                </div>
                                <span className="block text-center text-xs uppercase text-primary">
          {translations.pricing.annual.originalPrice}
          </span>
                                <span
                                    className="m-auto mt-4 block w-max rounded-full bg-gradient-to-r from-blue-600 to-blue-300 px-4 py-1 text-sm font-medium text-white">
          {translations.pricing.annual.discountApplied}
          </span>
                            </div>
                            <ul
                                role="list"
                                className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
                            >
                                <li className="space-x-2">
                                    <span className="font-semibold text-primary">✓</span>
                                    <span>{translations.pricing.annual.advantages.first}</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="font-semibold text-primary">✓</span>
                                    <span>{translations.pricing.annual.advantages.second}</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="font-semibold text-primary">✓</span>
                                    <span>{translations.pricing.annual.advantages.third}</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="font-semibold text-primary">✓</span>
                                    <span>{translations.pricing.annual.advantages.fourth}</span>
                                </li>
                            </ul>
                            <button
                                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
          <span className="relative text-base font-semibold text-sky-600 dark:text-white">
           {translations.pricing.annual.button}
          </span>
                            </button>
                        </div>
                    </div>
                    <div className="group relative md:col-span-1 lg:w-[32%]"
                         data-aos="fade-up"
                         data-aos-offset="300"
                         data-aos-easing="ease-in-out">
                        <div
                            aria-hidden="true"
                            className="absolute top-0 h-full w-full rounded-3xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-2xl shadow-gray-600/10 dark:shadow-none transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
                        />
                        <div className="relative space-y-8 p-8">
                            <h3 className="text-center text-3xl font-semibold text-gray-700 dark:text-white">
                                {translations.pricing.free.title}
                            </h3>
                            <div className="relative flex justify-around">
                                <div className="flex">
            <span className="-ml-12 mt-2 text-3xl font-bold text-primary">
              $
            </span>
                                    <span className="leading-0 text-8xl font-bold text-gray-800 dark:text-white">
              {translations.pricing.free.price}
            </span>
                                </div>
                                <span className="absolute right-6 bottom-2 text-xl font-bold text-primary">
            {translations.pricing.free.priceLabel}
          </span>
                            </div>
                            <ul
                                role="list"
                                className="m-auto w-max space-y-4 pb-6 text-gray-600 dark:text-gray-300"
                            >
                                <li className="space-x-2">
                                    <span className="font-semibold text-primary">✓</span>
                                    <span>{translations.pricing.free.advantages.first}</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="font-semibold text-primary">✓</span>
                                    <span>{translations.pricing.free.advantages.second}</span>
                                </li>
                                <li className="space-x-2">
                                    <span className="font-semibold text-primary">✓</span>
                                    <span>{translations.pricing.free.advantages.third}</span>
                                </li>
                            </ul>
                            <button
                                className="relative flex h-11 w-full items-center bg-blue-400 rounded-full justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-50 before:border before:border-sky-500 dark:before:border-gray-600 dark:before:bg-gray-700 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
          <span className="relative text-base font-semibold text-white">
            {translations.pricing.free.button}
          </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Pricing;