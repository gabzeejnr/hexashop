export default function Button({ type, disabled, value, className, children, ...props }) {
    return (
        <button type={type ?? "button"} disabled={disabled}
            className={`border-2 p-3 font-extralight cursor-pointer ${className}`}
        >{value ?? children}</button>
    )
}