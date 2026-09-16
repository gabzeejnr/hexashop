import { MouseEventHandler, ReactElement } from "react"

type Button = {
    value: string | any,
    type?: "button" | "submit" | "reset" ,
    disabled?: boolean,
    font?: string,
    onClick?: MouseEventHandler,
    className?: string,
    children?: ReactElement | HTMLElement | string | number,

}

export default function Button({ type, disabled, value, font, onClick, className, children, ...props }: Button) {
    return (
        <button type={type ?? "button"} disabled={disabled} onClick={onClick}
            className={`${className} border-2 p-3 ${font ? `font-${font}` : "font-extralight"} cursor-pointer`}
        >{value ?? children}</button>
    )
}