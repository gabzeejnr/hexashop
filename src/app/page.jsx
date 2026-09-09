"use client";
import { useEffect } from "react";
import Hero from "./hero";
import SlideShow from "./SlideShow";

export default function Home() {

    useEffect(() => {
        if (document.readyState === "complete") {
            console.log("Window loaded");
        }
        if (document.readyState === "interactive") console.log("Interactive")
        if (document.readyState === "loading") console.log("Loading")
    })

    return (
        <main className="flex flex-col py-10">
            <div>
                <Hero />
            </div>
            <div className="mt-30">
                <SlideShow />
            </div>
        </main>
    )
}