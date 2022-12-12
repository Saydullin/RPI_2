import { useTranslation } from "react-i18next"
import langIcon from "../assets/img/lang.svg"
import ImageButton from "./ImageButton"

function LanguageSwitch() {
    const { t, i18n } = useTranslation()

    return (
        <>
            {i18n.language == "ru" ?
                    <ImageButton title={"English"} icon={langIcon} onClick={() => i18n.changeLanguage("en")} />
                    :
                    <ImageButton title={"Русский"} icon={langIcon} onClick={() => i18n.changeLanguage("ru")} />
                }
        </>
    )
}

export {
    LanguageSwitch
}
