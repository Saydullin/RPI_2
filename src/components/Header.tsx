import {
    NavigationLinks
} from "../widgets/NavigationLinks"
import { useTranslation } from "react-i18next"
import logo from "../assets/img/feather.png"
import {
    Container, Space,
} from "../styles/Styles"
import { LanguageSwitch } from "./LanguageSwitch"
import LogoIcon from "./LogoIcon"

function Header() {
    const { t, i18n } = useTranslation()

    return (
        <header className="header sticky">
            <Container className="dflex">
                <LogoIcon />
                <NavigationLinks className="move_right" />
            </Container>
        </header>
    )
}

export {
    Header
}


