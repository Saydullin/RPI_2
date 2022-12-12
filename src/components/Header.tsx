import {
    NavigationLinks
} from "../widgets/NavigationLinks"
import {
    Container, Flex, Space,
} from "../styles/Styles"
import LogoIcon from "./LogoIcon"

function Header() {

    return (
        <header className="header sticky">
            <Container>
                <Flex isColumn={false} position={"space-between"}>
                    <LogoIcon />
                    <NavigationLinks className="move_right" />
                </Flex>
            </Container>
        </header>
    )
}

export {
    Header
}


