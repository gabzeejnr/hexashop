import Link from "next/link";

export default function FooterLink({ title, arr }) {
    return (
        <div className="flex flex-col gap-3 text-center">
            <span className="font-bold">{title}</span>
            <div className="flex flex-col gap-1 items-center text-base">
                {arr.map(a => (
                    <Link key={a.title ?? a.text} href={a.link} className="w-fit">{a.title ?? a.text}</Link>
                ))}
            </div>
        </div>
    )
}