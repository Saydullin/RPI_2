import { useState } from "react"
import { Link } from "react-router-dom"
import ImageButton from "../components/ImageButton"
import meunIcon from "../assets/img/menu.svg"
import {
    Links,
    Menu,
    SlideMenu,
    NavigateMenu,
    LinksAdaptive,
    Flex,
    Space,
} from "../styles/Styles"

function NavigationLinks({ ...props }) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(undefined)

    const onMenuClick = () => {
        setIsMenuOpen(isMenuOpen == undefined ? true : !isMenuOpen)
    }

    return (
        <LinksAdaptive {...props}>
            <Links space={20}>
                <Link to="/RPI_2/poets">All poets</Link>
                <Link to="/RPI_2/about">About</Link>
                <Link to="/RPI_2/developers">Developers</Link>
                <Link to="/RPI_2/github">GitHub</Link>
            </Links>
            <Menu>
                <ImageButton icon={meunIcon} title={""} onClick={onMenuClick} />
                <SlideMenu isOpen={isMenuOpen} onClick={onMenuClick}>
                    <NavigateMenu isOpen={isMenuOpen}>
                        <Space width={0} height={50} />
                        <Flex isColumn={true} position={"center"} gap={20}>
                            <Link to="/RPI_2/poets">All poets</Link>
                            <Link to="/RPI_2/about">About</Link>
                            <Link to="/RPI_2/developers">Developers</Link>
                            <Link to="/RPI_2/github">GitHub</Link>
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


