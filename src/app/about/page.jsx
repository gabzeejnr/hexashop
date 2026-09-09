import Hero from "./Hero";
import About from "./About";

export default function AboutPage() {
    return (
        <main className="min-h-screen py-10">
            <div className="h-100">
                <Hero />
            </div>
            <div className="px-2 mt-10">
                <About />
            </div>
        </main>
    )
}