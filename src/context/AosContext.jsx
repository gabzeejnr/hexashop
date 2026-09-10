"use client";

import React, { createContext, useContext, useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const AosContext = createContext(null);

export function AosProvider({ children }) {

    const pathname = usePathname();

    useEffect(function () {
        AOS.init({
            duration: 1000,
            once: false
        })
    }, []);

    useEffect(function () {
        AOS.refresh();
    }, [pathname])

    return (
        <AosContext.Provider value={AOS}>
            {children}
        </AosContext.Provider>
    )
}


export function useAos() {
    const ctx = useContext(AosContext);
    if (!ctx) throw new Error("useAos must be used in an AosProvider.");
    return ctx;
}