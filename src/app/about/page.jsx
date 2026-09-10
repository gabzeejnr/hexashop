"use client"
import { useEffect } from "react";
import Hero from "./Hero";
import About from "./About";
import { navigateToTop } from "../../utils/document.html";

export default function AboutPage() {

    useEffect(()=>{
        navigateToTop("about")
    }, [])
    return (
        <main className="min-h-screen py-10">
            <div id="top" className="h-100">
                <Hero />
            </div>
            <div className="px-2 lg:px-15 mt-20">
                <About />
            </div>
        </main>
    )
}