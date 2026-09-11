import Image from "next/image";
import { services } from "./data";
import fallBack from "../../assets/images/about/about-left-image.jpg";
import styles from './About.module.css';

function ServiceCard({ title, text, image }) {

    const array = [];
    const textLength = text.length;
    if (text.charAt(textLength - 1) === ".") {
        array.push(text);
    } else {
        const parsedText = text.split("");
        parsedText.push(".");
        const parse = parsedText.join("");
        console.log(parse);
        array.push(parse);
    }

    return (
        <div className={`${styles.card} gap-4 p-8`}>
            <h1 className="font-bold text-[26px]">{title}</h1>
            <p className=" text-wrap text-gray-400 italic">{array[0]}</p>
            <Image src={image || fallBack} alt={title} />
        </div>
    )
}


export default function Services() {
    return (
        <section>
            <div className="text-center mb-8">
                <h1 className="font-bold text-3xl mb-3">Our Services</h1>
                <span className="text-gray-500 italic font-medium">Details to details is what makes HexaShop different from other themes.</span>
            </div>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {services.map(s => (
                    <div className="wrapper" key={s.title}>
                        <ServiceCard title={s.title} text={s.text} image={s.image} />
                    </div>
                ))}
            </div>
        </section>
    )
}