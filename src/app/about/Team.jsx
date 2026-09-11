import Image from "next/image";
import { tM } from "./data";
import fallBack from "../../assets/images/about/about-left-image.jpg";
import styles from "./About.module.css";

function TeamCard({ name, image, role }) {
    return (
        <div className={`${styles.card} gap-1 items-center p-4`}>
            <div className="h-fit w-fit max-w-90">
                <Image src={image ?? fallBack} sizes="auto" alt={name} />
            </div>
            <div className="text-center mt-4">
                <h1 className="font-bold text-2xl">{name}</h1>
                <span>{role}</span>
            </div>
        </div>
    )
}

export default function Team() {
    return (
        <section>
            <div className="text-center mb-8">
                <h1 className="font-bold text-3xl mb-3">Our Team</h1>
                <span className="text-gray-500 italic font-medium">Details to details is what makes HexaShop different from other themes.</span>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {tM.map((t, i) => (
                    <div className="wrapper" key={(i * 30) + 10}>
                        <TeamCard name={t.name} role={t.role} image={t.image} />
                    </div>
                ))}
            </div>
        </section>
    )
}