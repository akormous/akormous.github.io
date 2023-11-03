import { H1, H2, H3 } from "./typography/heading";
import Image from "next/image";
import PrimaryButton from "./ui/primarybutton";
import SecondaryButton from "./ui/secondarybutton";

interface ProjectCardProps {
    title: string;
    href: string;
    description: string;
    technologies: string[];
    image: string;
}

interface ProjectsProps {
    projectList: ProjectCardProps[];
}



function ProjectCard(props: ProjectCardProps) {
    return (
        
    <div className="item justify-self-center max-w-sm mx-8 my-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <Image className="rounded-t-lg" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} src={props.image} alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Check it out
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    </div>

    );
}

function ProjectCard2(props: ProjectCardProps) {
    return (
        
    <div className="border border-slate-700 p-8">
    <H3>{props.title.toLowerCase()}</H3>
    <p className="text-white">{props.description}</p>
    {props.technologies.map((technology) => (
            <span key={technology} className="bg-indigo-700 text-gray-200 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">{technology}</span>
    ))}
        <div className="flex flex-col justify-center items-center my-2">
            <SecondaryButton><a href={props.href} target="blank" className="text-white">{"check it out ->"}</a></SecondaryButton>
        </div>
    </div>

    );
}

export function Projects(props: ProjectsProps) {
    return (
        <>
        <div id="projects" className="flex flex-col mb-36 justify-center items-center">
            <H2>projects</H2>
            <div className="py-12 px-6 max-w-2xl w-full">
                {props.projectList.map((p) => (
                    <ProjectCard2 key={p.title} {...p} />
                ))}
            </div>
        </div>
        </>
    );
}