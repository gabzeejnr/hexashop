"use client";
import { useGoToTopOnLoad } from "../hooks/load.hook";
import Hero from "./hero";
import SlideShow from "./SlideShow";

export default function Home() {

    useGoToTopOnLoad("")

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