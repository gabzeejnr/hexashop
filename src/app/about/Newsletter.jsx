import { address, email, phoneNumber, sM } from "../../data/companyData";
import Button from "../../components/Button";
import Link from "next/link";

export default function Newsletter() {

    const array = [];

    if (address) {
        const parse = address.split(",")
        parse.shift();
        array.push(parse)
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        console.log(Object.fromEntries(form));
        return
    }

    return (
        <section>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-2 flex flex-col gap-4 justify-center">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-[17px]"></h3>
                        <h1 className="text-[35px] font-bold">By Subscribing To Our Newsletter You Can Get 30% Off...</h1>
                        <span className="italic text-[15px] text-gray-500 ">Details to details is what makes Hexashop different from the other themes.</span>
                    </div>
                    <form onSubmit={handleSubmit} className="italic text-[17px] font-medium flex flex-col sm:flex-row gap-6">
                        <div className="flex flex-col border justify-center gap-5 lg:w-4/5">
                            <input type="text" name="name" required placeholder="Your Name" className="border p-2 flex-1" />
                            <input type="email" name="email" required placeholder="Your Email" className="border p-2 flex-1" />
                        </div>
                        <Button type="submit" value="Send?" font="bold" className="hover:text-white hover:bg-black hover:border-black" />
                    </form>
                </div>
                <div className="flex-1 p-4 grid  md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-[17px]">Store Location:</h3>
                        <p className="text-gray-500 text-[15px]">{array}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-[17px]">Work Hours:</h3>
                        <p className="text-gray-500 text-[15px]">
                            07:30 AM - 9:30 PM Daily
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-[17px]">Phone:</h3>
                        <p className="text-gray-500 text-[15px]">{phoneNumber}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-[17px]">Email:</h3>
                        <p className="text-gray-500 text-[15px]">{email}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-[17px]">Office Location:</h3>
                        <p className="text-gray-500 text-[15px]">Somewhere in the middle of nowhere</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="font-bold text-[17px]">Social Media:</h3>
                        <p className="text-gray-500 text-[15px]">
                            {sM.map((s, i) => {
                                const isLast = i === sM.length - 1;
                                const text = s.id.charAt(0).toUpperCase() + s.id.slice(1)
                                return isLast
                                    ? (<Link href={s.link}>
                                        <span>{text}</span>
                                    </Link>)
                                    : (<Link href={s.link}>
                                        <span>{text}, </span>
                                    </Link>)
                            })}
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}