import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";

config.autoAddCss = false;

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "HexaShop - Your fashion needs met",
    description: "A modern fashion website",
    authors: [
        { name: "Gabriel Dododwei" }
    ],
    creator: "Gabriel Dodowei",
    publisher: "HexaShop",
    keywords: [
        "fashion",
        "clothing",
        "shoes",
        "accessories"
    ],
    openGrah: {
        title: "HexaShop",
        description: "Discover the latest fashion trends.",
        type: "website",
        siteName: "HexaShop"
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className="flex flex-col">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
