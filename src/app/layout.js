"use client"
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOS from 'aos';
import { useEffect } from "react";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <Head>
                <title>Vlad | Software Agency</title>
            </Head>
            <html lang="en">
            <body className={inter.className}>
            <Navbar />
            {children}
            <Footer />
            </body>
            </html>
        </>
    );
}
