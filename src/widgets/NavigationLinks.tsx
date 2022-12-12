import { useState } from "react"
import { Link } from "react-router-dom"
import ImageButton from "../components/ImageButton"
import meunIcon from "../assets/img/menu.svg"
import { useTranslation } from "react-i18next"
import {
    Links,
    Menu,
    SlideMenu,
    NavigateMenu,
    LinksAdaptive,
    Flex,
    Space,
} from "../styles/Styles"
import { LanguageSwitch } from "../components/LanguageSwitch"

function NavigationLinks({ ...props }) {
    const { t } = useTranslation()
    const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(undefined)

    const onMenuClick = () => {
        setIsMenuOpen(isMenuOpen == undefined ? true : !isMenuOpen)
    }

    return (
        <LinksAdaptive {...props}>
            <Links space={20}>
                <Link to="/RPI_2/poets">{t("all_poets")}</Link>
                <Link to="/RPI_2/developers">{t("developers")}</Link>
                <Link to="/RPI_2/github">{t("github")}</Link>
                <Space width={20} height={0} />
                <LanguageSwitch />
            </Links>
            <Menu>
                <ImageButton icon={meunIcon} title={""} onClick={onMenuClick} />
                <SlideMenu isOpen={isMenuOpen} onClick={onMenuClick}>
                    <NavigateMenu isOpen={isMenuOpen}>
                        <Space width={0} height={50} />
                        <Flex isColumn={true} position={"center"} gap={20}>
                            <Link to="/RPI_2/poets">{t("all_poets")}</Link>
                            <Link to="/RPI_2/developers">{t("developers")}</Link>
                            <Link to="/RPI_2/github">{t("github")}</Link>
                            <Space width={20} height={0} />
                            <LanguageSwitch />
                        </Flex>
                    </NavigateMenu>
                </SlideMenu>
            </Menu>
        </LinksAdaptive>
    )
}

export {
    NavigationLinks
}


