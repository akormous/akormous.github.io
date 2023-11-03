import Link from "next/link";

interface LinkProps {
    name: string;
    href: string;
}

export default function CustomLink(props: LinkProps) {
    return (

        <Link
         href={props.href}
         className="mx-9 hover:text-indigo-500"
        >
            {props.name}
        </Link>
    )
}