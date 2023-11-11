import { localeList } from "@/data/localeSettings";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";

export function LocaleSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        router.replace(pathname, { locale: newLocale })
    }

    return (
        <select
         defaultValue={locale}
         onChange={onLocaleChange}
         className="bg-transparent mx-9 px-4 text-white rounded-full dark:bg-indigo-600 focus:bg-indigo-800  dark:text-white ">
            {localeList.map((lang) => (
                <option key={lang} value={lang} className="font-sans">
                    {t('locale', { locale: lang })}
                </option>
            ))}
        </select>
    );
}