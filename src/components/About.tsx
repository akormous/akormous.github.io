'use client'
import { H2, H4 } from "@/components/typography/heading";
import { useTranslations } from "next-intl";

export default function About() {
    const t = useTranslations('About')
    const c = useTranslations('common')
    return (
        <>
        <div id="about" className="flex flex-col mb-36 justify-center items-center">
            <H2> {t('titletext')} </H2>
            <div className="max-w-2xl text-justify py-12 px-6">
                <H4>{t('paragraph')}</H4>            
            </div>
        </div>
        </>
    );
}