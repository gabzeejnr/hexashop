import Image from "next/image";
import leftImage from "../../assets/images/about/about-left-image.jpg"
import { sM } from "../../data/companyData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./About.module.css";
import Link from "next/link";

export default function About() {
    return (
        <section className="flex flex-col lg:flex-row gap-15">
            <div className="left flex-1">
                <Image src={leftImage} alt="About Left Image" className="w-full h-auto" />
            </div>
            <div className="right flex-1 flex flex-col justify-center">
                <div className="mb-10 border-b-3 border-gray-500 border-dotted">
                    <h3 className="mb-10 text-4xl font-bold">About Us & Our Skills</h3>
                    <p className="text-gray-400 mb-4 font-semibold italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore.</p>
                    <div className="quote flex gap-2 mb-4">
                        <span className={`inline-flex text-6xl select-none before:content-[""]`}></span>
                        <p className="italic font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuski smod kon tempor incididunt ut labore.</p>
                    </div>
                    <p className="text-gray-400 mb-4 font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                </div>
                <div className="flex gap-2">
                    {sM.map(s => (
                        <div className={styles["round-icon"]} key={s.id}>
                            <Link href={s.link}>
                                <FontAwesomeIcon icon={s.icon} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}