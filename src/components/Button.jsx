export default function Button({ type, disabled, value, font, onClick, className, children, ...props }) {
    return (
        <button type={type ?? "button"} disabled={disabled} onClick={onClick}
            className={`${className} border-2 p-3 ${font ? `font-${font}` : "font-extralight"} cursor-pointer`}
        >{value ?? children}</button>
    )
}