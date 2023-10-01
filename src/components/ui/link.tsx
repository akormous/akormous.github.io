interface LinkProps {
    name: string;
    href: string;
}

export default function Link(props: LinkProps) {
    return (
        <a
         href={props.href}
         className="mx-9 hover:text-sky-400"
        >
            {props.name}
        </a>
    )
}