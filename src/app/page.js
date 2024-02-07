import Navbar from '@/components/Navbar';
import Hero from "@/components/Hero";
import CompanyJobs from "@/components/CompanyJobs";
import Features from "@/components/Features";
import RecentWork from "@/components/RecentWork";
import Pricing from "@/components/Pricing";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
    return (
        <>
            <Hero/>
            <CompanyJobs/>
            <Features/>
            <RecentWork/>
            <Pricing/>
            <Team/>
            <Testimonial/>
            <Contact/>
            <Footer/>
        </>
    )
}
