import Image from "next/image";
import Button from "../components/Button";

export default function C({ img, title, sub, text }) {
    return (
        <div className="hi h-70 lg:h-auto relative text-background"> {/*  h-90 lg:h-60 xl:h-80 2xl:h-100 */}
            <Image src={img} alt={title} fill sizes="auto" className="object-cover" />
            <div className="absolute w-full h-full flex flex-col items-center justify-center gap-3 z-1">
                <span className="text-3xl font-bold tracking-[1px]">{title}</span>
                <span className="italic text-[17px]">{sub}</span>
            </div>
            <div className="hero-hover transition-all duration-500 absolute hidden z-10 text-center bg-[#0000006c] h-full w-full p-5 flex-col items-center justify-center gap-4">
                <span className="text-2xl font-bold tracking-[1px]">{title}</span>
                <span className="max-w-4/5 text-[15px]">{text}</span>
                <Button value="Discover More" className="hover:bg-white hover:text-black hover:border-white" />
            </div>
        </div>
    )
}