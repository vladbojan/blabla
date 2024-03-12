"use client"
import { LanguageProvider } from '../../context/LanguageContext';
import { useEffect } from "react";
import Head from "next/head";
import AOS from 'aos';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from 'react-helmet';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children, pageProps }) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Helmet>
                <title>APOSTOL SI ASOCIATII - Software Development Company</title>
                <meta name="description" content="APOSTOL SI ASOCIATII Software Development HR Human Resources Immigration Services Romania Servicii imigrari visa viza" />
                <meta name="keywords" content="software development, visa services, servicii viza, custom software, web development, mobile development, human resources, HR, IT, immigration services, servicii imigrari" />
                <meta property="og:title" content="APOSTOL SI ASOCIATII - Software Development HR Human Resources Immigration Services Company" />
                <meta property="og:description" content="APOSTOL SI ASOCIATII Software Development HR Human Resources Immigration Services Romania Servicii imigrari visa viza" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://example.com" /> {/* Replace with your actual URL */}
                <meta property="og:image" content="https://example.com/image.jpg" /> {/* Replace with your actual image URL */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@yourtwitterhandle" /> {/* Replace with your Twitter handle */}
                <meta name="twitter:title" content="APOSTOL SI ASOCIATII - Software Development HR Human Resources Immigration Services Company" />
                <meta name="twitter:description" content="APOSTOL SI ASOCIATII Software Development HR Human Resources Immigration Services Romania Servicii imigrari visa viza" />
                <meta name="twitter:image" content="https://example.com/image.jpg" /> {/* Replace with your actual image URL */}
                <meta name="author" content="APOSTOL SI ASOCIATII" /> {/* Author of the website */}
                <meta name="copyright" content="APOSTOL SI ASOCIATII" /> {/* Copyright */}
                <meta name="geo.placename" content="City, Country" /> {/* Geographic location */}
                <meta name="geo.region" content="Country" /> {/* Geographic region */}
            </Helmet>
            <html>
            <body className={inter.className}>
            <LanguageProvider>
                <Navbar />
                {children}
                <Footer />
            </LanguageProvider>
            </body>
            </html>
        </>
    );
}
