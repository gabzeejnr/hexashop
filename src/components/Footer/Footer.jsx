import FooterLink from "./FooterLinks";
import {
    brandLogo, brandName, email,
    address, phoneNumber
} from "../../data/companyData";
import { footerLinks } from "./data";

function TopFooter() {
    return (
        <div className="flex flex-col gap-3 items-center">
            {brandLogo}
            <div className="flex flex-col gap-2 text-[15px]">
                <span>{address}</span>
                <a href={`mailto:${email}`}>{email}</a>
                <a href={`tel:+${phoneNumber}`}>{phoneNumber}</a>
            </div>
        </div>
    )
}

function LowerFooter() {

    const year = new Date().getFullYear();

    return (
        <div className="pt-10 text-center mx-5 border-t border-t-white text-[15px]">
            <p className="block">Copyright &copy; {year} {brandName} All Rights Reserved.</p>
            <p className="block">Design: <a href="https://github.com/gabzeejnr" target="_blank" className="text-teal-300 hover:text-teal-500 font-semibold transition-all">Gabriel Dodowei</a></p>
        </div>
    )
}

export default function Footer() {

    return (
        <footer className="bg-black flex flex-col gap-15 text-white text-center py-10">
            <div className="flex flex-col md:flex-row md:justify-between md:px-10 items-center gap-10">
                <TopFooter />
                <div className="grid items-center grid-cols-2 md:grid-cols-3 gap-10">
                    {footerLinks.map(f => (
                        <FooterLink title={f[0]} key={f[0]} arr={f[1]} />
                    ))}
                </div>
            </div>
            <LowerFooter />
        </footer>
    )
}