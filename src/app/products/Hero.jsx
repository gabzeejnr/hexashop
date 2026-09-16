import Link from "next/link"
import styles from "./Products.module.scss";

export default function Hero() {
    return (
        <section className={`${styles.hero} p-10 relative h-full flex items-center justify-center`}>
            <div className="text-white text-center flex gap-4 flex-col">
                <h1 className="text-5xl font-bold">Our Products</h1>
                <span className="text-lg font-semibold italic tracking-[1px]">Discover Something you'll love</span>
                <span>
                    <Link href="/">Home</Link> / <Link href="/products">Products</Link>
                </span>
            </div>
        </section>
    )
}