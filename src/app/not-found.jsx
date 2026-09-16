"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import nF from "../assets/images/error/error-bg.jpg"
import Button from "../components/Button";

export default function NotFound() {

    const router = useRouter();

    return (
        <main className="min-h-screen relative select-none bg-transparent flex flex-col justify-center items-center"
            onDragStart={() => { return false }}>
            <Image src={nF} alt="Not Found" fill className="absolute select-none" loading="eager" />
            <div className="z-10 flex flex-col items-center">
                <div className="text-[100px] font-bold">404</div>
                <span className="text-xl font-bold -mt-5 tracking-[2px]">Page not Found</span>
                <div className="flex gap-5 mt-10">
                    <Button value="Go Back" font="bold" onClick={() => router.back()} />
                    <Button value="Go Home" font="bold" onClick={() => router.push("/")} />
                </div>
            </div>
        </main>
    )
}