"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowDown } from "lucide-react";
import { brandLogo } from "../../data/companyData";
import { li } from "./data";
import styles from "./Header.module.css"

function DropDown() {

    const [open, setOpen] = useState(false);

    return (
        <div className={`${styles["mobile-dropdown"]} flex flex-col bg-background py-1 transition-all duration-700`}>
            {li.map(l => (
                <div key={l.title}>
                    {l.link
                        ? <Link key={l.title} href={l.link} className={`py-2 px-4 font-bold  flex items-center justify-between pr-2`}>{l.title}</Link>
                        : <div className="py-2 px-4 font-bold flex items-center justify-between pr-2" key={l.title}>{l.title}
                            <span onClick={() => setOpen(p => !p)}>{l.children && <ArrowDown />}</span>
                        </div>}
                    {open && (
                        <div className="flex flex-col">
                            {l.children?.map(q => (
                                <Link href={q.link} key={q.title} className="py-2 font-light px-6">{q.title}</Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default function Header() {

    const size = 30;
    const [open, setOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-999">
            <header className="flex px-10 py-3 justify-between lg:justify-around justify-items-center bg-[#838383]">
                <Link href="/">{brandLogo}</Link>
                <div className="font-medium hidden text-white lg:flex items-center gap-4">
                    {li.map(l => (
                        l.link
                            ? <Link key={l.title} href={l.link}>{l.title}</Link>
                            : <div key={l.title} className="relative flex flex-col">
                                <button className={` ${styles["sub-drop-wrapper"]} inline-flex items-center gap-1 cursor-pointer`}>
                                    {l.title}<span>&darr;</span>
                                </button>
                                <div className={`${styles["sub-drop"]} absolute flex top-8 bg-background w-50 overflow-hidden flex-col text-black`}>
                                    {l.children.map((q, i) => <Link href={q.link} key={q.title} className={`py-1 px-3 ${!(i + 1 === l.children.length) ? "border-b" : ""}`}>
                                        <div className="hover:scale-105 hover:translate-x-5">{q.title}</div>
                                    </Link>)}
                                </div>
                            </div>
                    ))}
                </div>
                <button className="text-4xl cursor-pointer lg:hidden text-background" onClick={() => setOpen(p => !p)}
                    aria-label={open ? "Close dropdown menu" : "Open dropdown menu"}
                >{open ? <X size={size} /> : <Menu size={size} />}</button>
            </header>
            {open && <DropDown />}
        </nav>
    )
}