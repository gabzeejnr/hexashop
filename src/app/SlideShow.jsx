"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "../components/Button";
import { imageSlides as i } from "./data";
import styles from "./home.module.css";

export default function SlideShow() {

    const v = 3;
    const [initial, setInitial] = useState(0);
    const end = initial + v;

    return (
        <section className="md:px-5">
            <div className="hidden md:flex justify-between items-center gap-5">
                <Button value="&#x3c;" onClick={() => {
                    if (initial === 0) return setInitial(i.length - 1);
                    return setInitial(p => p - 1);
                }} />
                <div className={`${styles["slide-show"]} gap-10 flex`} data-aos="zoom-in">
                    {i.slice(initial, end).map((i, index) => (
                        <div key={(index * 19) + 1} className="slide flex h-80 max-w-80 border">
                            <Image src={i} alt="slides" className="object-cover" />
                        </div>
                    ))}
                </div>
                <Button value="&#x3e;" onClick={() => {
                    if (initial < i.length - v) return setInitial(initial + 1);
                    return setInitial(0);
                }} />
            </div>
            <div className="flex justify-between items-center gap-5 md:hidden px-3">
                <Button value="&#x3c;" onClick={() => {
                    if (initial === 0) return setInitial(i.length - 1);
                    return setInitial(p => p - 1);
                }} />
                <div className={`${styles["mobile-slide"]} block md:hidden h-80 max-w-100`} data-aos="zoom-in">
                    <Image src={i[initial]} alt="Slide Show content" className="object-cover h-full w-auto" />
                </div>
                <Button value="&#x3e;" onClick={() => {
                    if (initial === (i.length - 1)) return setInitial(0);
                    return setInitial(p => p + 1);
                }} />
            </div>
        </section>
    )
}