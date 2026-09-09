import styles from "./About.module.css";

export default function Hero() {
    return (
        <section className={`${styles["about-hero"]} p-10 relative h-full flex items-center justify-center`}>
            <div className="text-white text-center flex gap-4 flex-col">
                <h1 className="text-5xl font-bold">About Our Company</h1>
                <span className="text-lg font-semibold italic">Awesome, clean & creative HTML5 Template</span>
            </div>
        </section>
    )
}