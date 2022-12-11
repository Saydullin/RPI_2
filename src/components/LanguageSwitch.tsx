import { useTranslation } from "react-i18next"

export default function LanguageSwitch() {
    const { t, i18n } = useTranslation()
    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
        i18n.options.lng = lang
    }

    return (
        <>
            {i18n.language}
            <select>
                <option value="ru" selected={i18n.language == "ru"} onClick={() => changeLanguage("ru")}>RU</option>
                <option value="en" selected={i18n.language == "en"}  onClick={() => changeLanguage("en")}>EN</option>
            </select>
        </>
    )
}


