import Button from "../../components/Button";

type Pagination = {
    max: number
}

export default function Pagination({ max }: Pagination) {
    return (
        <div className="flex gap-6 items-center justify-center md:mt-10">
            {max > 1
                ? (
                    <>
                        <Button value="&lt;" />
                        <div className="text-[17px] flex gap-3">
                            <Button value={1} className="border" />
                            <Button value={max} className="border" />
                        </div>
                        <Button value="&gt;" /></>
                )
                : null
            }
        </div>
    )
}