"use client";
import { useEffect } from "react";
import { navigateToTop } from "../utils/document.html";
import Hero from "./hero";
import SlideShow from "./SlideShow";

export default function Home() {

    useEffect(() => {
        navigateToTop();
    }, []);

    return (
        <main className="flex flex-col py-10">
            <div id="top">
                <Hero />
            </div>
            <div className="mt-30">
                <SlideShow />
            </div>
        </main>
    )
}