"use client"
import { LanguageProvider } from '../../context/LanguageContext';
import { useEffect } from "react";
import Head from "next/head";
import AOS from 'aos';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children, pageProps }) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Head>
                <title>Vlad | Software Agency</title>
            </Head>
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
