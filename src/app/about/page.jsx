"use client"
import Hero from "./Hero";
import About from "./About";
import Team from "./Team";
import Services from "./Services";
import Newsletter from "./Newsletter";
import { useGoToTopOnLoad } from "../../hooks/load.hook";

export default function AboutPage() {

    useGoToTopOnLoad("about");

    return (
        <main className="min-h-screen py-10">
            <div className="h-100">
                <Hero />
            </div>
            <div className="px-2 lg:px-15 mt-15 md:mt-30" data-aos="fade-up">
                <About />
            </div>
            <div className="mt-15 md:mt-30 px-2 lg:px-15" data-aos="fade-up">
                <Team />
            </div>
            <div className="mt-15 md:mt-30 px-2 lg:px-15" data-aos="fade-up">
                <Services />
            </div>
            <div className="mt-15 md:mt-30 px-2 lg:px-15" data-aos="fade-up">
                <Newsletter />
            </div>
        </main>
    )
}