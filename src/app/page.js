import Hero from "@/components/Hero";
import CompanyJobs from "@/components/CompanyJobs";
import Features from "@/components/Features";
import RecentWork from "@/components/RecentWork";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Customer from "@/components/Customer";
import Head from "next/head";
export default function Home() {
    return (
        <>
            <Head>
                <title>Vlad | Software Agency</title>
            </Head>
            <Hero/>
            <CompanyJobs/>
            <Features/>
            <Customer/>
            <RecentWork/>
            <Team/>
      {/*       <Testimonial/>
            <Pricing/> */}
            <Contact/>
        </>
    )
}
