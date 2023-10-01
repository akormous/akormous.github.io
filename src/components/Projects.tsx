import { H1 } from "./typography/heading";

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
            <img className="rounded-t-lg" src={props.image} alt="" />
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

export function Projects(props: ProjectsProps) {
    return (
        <>
        <div className="flex flex-col my-36 justify-center items-center">
            <H1 content="Projects" />
            <div className="container grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 ">
                {props.projectList.map((p) => (
                    <ProjectCard key={p.title} {...p} />
                ))}
            </div>
        </div>
        </>
    );
}