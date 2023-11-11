'use client'
import { useTranslations } from "next-intl";
import { H1, H2, H3 } from "./typography/heading";
import PrimaryButton from "./ui/primarybutton";

export function Hero() {
    const t = useTranslations('Hero');
    return (
        <div className="relative h-[100vh] flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center">
            <H2>{t('text1')}<br/>{t('text2')}</H2>
            <a href="mailto:iamakshatchauhan@gmail.com"><PrimaryButton>{t('available to work')}</PrimaryButton></a>
            </div>
        </div>
    );
}