import Image from "next/image";
import C from "./comp";
import { i_m } from "./data";
import leftBanner from "../assets/images/left-hero-banner.jpg";
import { brandName } from "../data/companyData";
import Button from "../components/Button";

export default function Hero() {
    return (
        <section className="flex flex-col lg:flex-row gap-10 lg:h-150 px-5">
            <div className="relative flex-1 flex items-center md:justify-center px-5 lg:px-0">
                <Image src={leftBanner} alt="Main hero image" loading="eager" className="align-middle object-cover h-full" />
                <div className="absolute w-full h-full text-center text-white flex flex-col gap-3 justify-center items-center px-5">
                    <h1 className=" font-bold text-4xl">We are {brandName.split(" ")[0]}</h1>
                    <span className="text-lg font-medium italic">Awesome, clean & creative HTML5 Template</span>
                    <Button value="Purchase Now!" className="hover:bg-white hover:text-black hover:border-white" />
                </div>
            </div>
            <div className="grid grid-cols-1 gap-5 px-5 flex-1 md:grid-cols-2">
                {i_m.map(q => <C key={q.t} title={q.t} sub={q.s} img={q.i} text={q.te} />)}
            </div>
        </section>
    )
}