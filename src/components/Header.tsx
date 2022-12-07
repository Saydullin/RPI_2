import {
    NavigationLinks
} from "../widgets/NavigationLinks"
import { Link } from "react-router-dom"
import { Trans, useTranslation } from "react-i18next"
import logo from "../assets/img/feather.png"
import {
    Flex,
    BigIcon,
    BoldTitle,
    Space
} from "../styles/Styles"
import LanguageSwitch from "./LanguageSwitch"

function Header() {
    const { t, i18n } = useTranslation()
    
    return (
        <header className="header dflex">
            <Link to="/">
                <Flex isColumn={false} position="center">
                    <BigIcon src={logo} alt="logo" />
                    <Space width={10} height={0} />
                    <BoldTitle className="t-color">Wiki Poets</BoldTitle>
                </Flex>
            </Link>
            <NavigationLinks className="move_right" />
        </header>
    )
}

export {
    Header
}


