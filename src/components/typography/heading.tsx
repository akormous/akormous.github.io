import TypographyProps from "./TypograhpyInterface"

export function H1(props: TypographyProps) {
    return (
    <>
    <h1 className="text-white slat text-5xl md:text-7xl lg:text-9xl my-4">{props.children}</h1>
    </>)
}

export function H2(props: TypographyProps) {
    return (
    <>
    <h2 className="text-white text-3xl md:text-5xl lg:text-7xl my-4">{props.children}</h2>
    </>)
}

export function H3(props: TypographyProps) {
    return (
    <>
    <h3 className="text-white text-1xl md:text-3xl lg:text-5xl my-4">{props.children}</h3>
    </>)
}