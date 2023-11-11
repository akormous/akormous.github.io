'use client'
import { H2, H3 } from "./typography/heading";
import SecondaryButton from "./ui/secondarybutton";
import { useTranslations } from "next-intl";
import { projectsList } from "@/data/localeSettings";

interface ProjectCardProps {
    title: string;
    href: string;
    description: string;
    technologies: string;
    image: string;
    buttonlinktext: string;
}

interface ProjectsProps {
    projectList: ProjectCardProps[];
}

function ProjectCard(props: ProjectCardProps) {
    return (
        
    <div className="border border-slate-700 p-8">
    <H3>{props.title.toLowerCase()}</H3>
    <p className="text-white">{props.description}</p>
    {props.technologies.split(',').map((technology) => (
            <span key={technology} className="bg-indigo-700 text-gray-200 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ">{technology}</span>
    ))}
        <div className="flex flex-col justify-center items-center my-2">
            <SecondaryButton><a href={props.href} target="blank" className="text-white">{props.buttonlinktext}</a></SecondaryButton>
        </div>
    </div>

    );
}

export function Projects() {
    const t = useTranslations('Projects')
    const c = useTranslations('common')
    return (
        <>
        <div id="projects" className="flex flex-col mb-36 justify-center items-center">
            <H2> {t('titletext')} </H2>
            <div className="py-12 px-6 max-w-2xl w-full">
                {projectsList.map((p) => (
                    <ProjectCard key={p} title={t(p+'.title')} href={t(p+'.title')} description={t(p+'.description')} technologies={t(p+'.technologies')} image={t(p+'.image')} buttonlinktext={c('check it out')}/>
                ))}
            </div>
        </div>
        </>
    );
}